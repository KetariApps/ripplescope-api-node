import { Driver, ManagedTransaction } from "neo4j-driver";
import snakeCase from "../../helpers/snakeCase.js";
import {
  ConnectionMutationVariables,
  ImpactArea,
  Project,
  ProjectCategorizationGPTResponse,
} from "../../types.js";
import ImpactAreas from "../../prompts/ripplescope-v2/impactAreas/index.js";
import getProject from "../queries/getProject.js";
import isRedundantImpactArea from "../../workers/categorization/isRedundantImpactArea.js";

const connectImpactAreas = async (
  driver: Driver,
  project: Project,
  impactAreas: ProjectCategorizationGPTResponse["impactAreas"]
) => {
  let session = driver.session();
  let existingImpactAreas: string;
  let newImpactArea: string;
  let payload: ConnectionMutationVariables;
  try {
    const results = await session.executeWrite((tx) =>
      Promise.all(
        impactAreas.map((impactArea) => {
          const matchedImpactArea = Object.values(ImpactAreas.object).find(
            (area) => area.name === impactArea.name
          );
          console.log(project.name, matchedImpactArea?.name);

          if (matchedImpactArea === undefined) {
            // add the impact area to the database for future review
            payload = {
              projectUniqueName: snakeCase(project.name),
              impactAreaUniqueName: snakeCase(
                impactArea.name.toLocaleLowerCase()
              ),
              aspect: impactArea.aspect,
              reason: impactArea.reason,
              score: impactArea.score,
              verified: false,
            };
            runConnectionMutation(tx, payload);
            return;
          }

          // check project relationships for redundancies
          return getProject(driver, snakeCase(project.name)).then((res) => {
            payload = {
              projectUniqueName: snakeCase(project.name),
              impactAreaUniqueName: matchedImpactArea.dbName,
              aspect: impactArea.aspect,
              reason: impactArea.reason,
              score: impactArea.score,
              verified: true,
            };
            if (res === undefined || res.length === 0) {
              // there was an error finding the project
              return undefined;
            } else {
              if (
                res.some((record) =>
                  record.impactAreas.some(
                    (impactArea) =>
                      impactArea.impactArea === matchedImpactArea.dbName
                  )
                )
              ) {
                // this project already has a relationship to this impact area, test for redundancy before linking
                existingImpactAreas = res
                  .flatMap((record) =>
                    record.impactAreas
                      .filter(
                        (edge) => edge.impactArea === matchedImpactArea.dbName
                      )
                      .map((edge) => [edge.impactArea, edge.reason].join("\n"))
                  )
                  .join("\n\n");
                newImpactArea = [impactArea.name, impactArea.reason].join("\n");
                return isRedundantImpactArea(
                  existingImpactAreas,
                  newImpactArea
                ).then((isRedundant) => {
                  console.log(impactArea.name, project.name);
                  if (isRedundant === undefined) {
                    // we don't know if this impact area is redundant or not, so we won't connect it to the project
                    console.error("cannot assess redundancy");
                    return undefined;
                  } else if (isRedundant) {
                    // the impact area is redundant, so we won't connect it to the project
                    console.log("impact area was redundant");
                    return undefined;
                  } else {
                    // the impact area is not redundant, go ahead and connect it to the project
                    return runConnectionMutation(tx, payload);
                  }
                });
              } else {
                // there is no relationship between this project and the impact area, go ahead and connect it to the project
                return runConnectionMutation(tx, payload);
              }
            }
          });
        })
      ).then((res) => res)
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
  payload: ConnectionMutationVariables
) =>
  tx
    .run(
      `
        MERGE (project:Project {uniqueName: $projectUniqueName})
        MERGE (impactArea:ImpactArea {uniqueName: $impactAreaUniqueName, verified: $verified})
        CREATE (project)-[:ADDRESSES {aspect: $aspect, reason: $reason, score: $score}]->(impactArea)
        RETURN *
      `,
      payload
    )
    .then((res) => res);
