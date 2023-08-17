import { Driver, ManagedTransaction } from "neo4j-driver";
import snakeCase from "../../helpers/snakeCase.js";
import {
  ProjectToImpactAreaConnectionMutationVariables,
  GetProjectResponse,
  Project,
  ProjectCategorizationGPTResponse,
} from "../../types.js";
import ImpactAreas from "../../prompts/ripplescope-v2/impactAreas/index.js";
import isRedundantImpactArea from "../../workers/categorization/isRedundantImpactArea.js";

const connectImpactAreas = async (
  driver: Driver,
  project: Project,
  impactAreas: ProjectCategorizationGPTResponse["impactAreas"]
) => {
  let session = driver.session();
  try {
    const results = await session.executeWrite((tx) =>
      Promise.all(
        impactAreas.map(async (impactArea) => {
          let payload: ProjectToImpactAreaConnectionMutationVariables;
          let existingImpactAreas: string;
          let newImpactArea: string;
          let impactAreaWasRedundant: boolean | undefined;
          let getProjectResponse: GetProjectResponse[] | undefined;
          const localImpactArea = Object.values(ImpactAreas.object).find(
            (area) => area.name === impactArea.name
          );
          const localpayloadParams =
            localImpactArea === undefined
              ? {
                  impactArea_doughnutCategory: "",
                  impactArea_impactAreaCategory: "",
                  impactArea_description: "",
                  impactArea_questions: "",
                  impactArea_context: "",
                  impactArea_name: "",
                }
              : {
                  impactArea_doughnutCategory: localImpactArea.doughnutCategory,
                  impactArea_impactAreaCategory:
                    localImpactArea.impactAreaCategory,
                  impactArea_description: localImpactArea.description,
                  impactArea_questions: localImpactArea.questions,
                  impactArea_context: localImpactArea.context,
                  impactArea_name: localImpactArea.name,
                };
          payload = {
            project_uniqueName: snakeCase(project.name),
            impactArea_uniqueName: snakeCase(impactArea.name),
            impactArea_verified: localImpactArea !== undefined,
            edge_aspect: impactArea.aspect,
            edge_reason: impactArea.reason,
            edge_score: impactArea.score,
            ...localpayloadParams,
          };
          // check project relationships for redundancies
          getProjectResponse = await runGetProject(tx, snakeCase(project.name));
          if (
            getProjectResponse.some((record) =>
              record.impactAreas.some(
                (edge) => edge.impactArea === snakeCase(impactArea.name)
              )
            )
          ) {
            // this project already has a relationship to this impact area, test for redundancy before linking
            existingImpactAreas = getProjectResponse
              .flatMap((record) =>
                record.impactAreas
                  .filter(
                    (edge) => edge.impactArea === snakeCase(impactArea.name)
                  )
                  .map((edge, i) =>
                    [String(i + 1) + edge.aspect, edge.reason].join("\n")
                  )
              )
              .join("\n\n");

            newImpactArea = [impactArea.aspect, impactArea.reason].join("\n");
            const isRedundantImpactAreaResponse = await isRedundantImpactArea(
              existingImpactAreas,
              newImpactArea
            );
            console.log({
              type: "redundancy check",
              project: project.name,
              impactArea,
              existingImpactAreas,
              newImpactArea,
              isRedundantImpactAreaResponse,
            });
            impactAreaWasRedundant = isRedundantImpactAreaResponse?.value;

            if (
              impactAreaWasRedundant === undefined ||
              impactAreaWasRedundant
            ) {
              // we don't know if this impact area is redundant or not, or the impact area was redundant, so we won't connect it to the project
              return undefined;
            } else {
              // the impact area is not redundant, connect it to the project
              return runConnectionMutation(tx, payload);
            }
          } else {
            console.log({
              type: "new connection",
              project: project.name,
              impactArea,
            });
            // there is no existing relationship between this project and the impact area, connect them
            return runConnectionMutation(tx, payload);
          }
        })
      )
    );

    await session.close();
    return results;
  } catch (error) {
    console.error(error);
    await session.close();
    return;
  }
};

export default connectImpactAreas;

const runConnectionMutation = (
  tx: ManagedTransaction,
  payload: ProjectToImpactAreaConnectionMutationVariables
) =>
  tx
    .run(
      `
        MERGE (project:Project {uniqueName: $project_uniqueName})
        MERGE (impactArea:ImpactArea {
          uniqueName: $impactArea_uniqueName, 
          doughnutCategory: $impactArea_doughnutCategory, 
          category: $impactArea_impactAreaCategory, 
          verified: $impactArea_verified, 
          context: $impactArea_context, 
          description: $impactArea_description, 
          name: $impactArea_name, 
          questions: $impactArea_questions
        })
        CREATE (project)-[:ADDRESSES {aspect: $edge_aspect, reason: $edge_reason, score: $edge_score}]->(impactArea)
        RETURN *
      `,
      payload
    )
    .catch((err) => console.log(err));

const runGetProject = (tx: ManagedTransaction, uniqueName: string) =>
  tx
    .run(
      `
      MATCH (p:Project {uniqueName: $uniqueName})
      OPTIONAL MATCH r=(p)-[rel]-(i: ImpactArea)
      RETURN p.name as project, collect({reason: rel.reason, aspect: rel.aspect, impactArea: i.uniqueName}) as impactAreas
      `,
      { uniqueName }
    )
    .then((res) =>
      res.records.map((rec) => ({
        project: rec.get("project"),
        impactAreas: rec.get("impactAreas"),
      }))
    );
