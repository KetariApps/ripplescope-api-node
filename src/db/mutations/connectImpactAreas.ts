import { Driver } from "neo4j-driver";
import snakeCase from "../../helpers/snakeCase.js";
import { Project, ProjectCategorizationGPTResponse } from "../../types.js";
import ImpactAreas from "../../prompts/ripplescope-v2/impactAreas/index.js";

const connectImpactAreas = async (
  driver: Driver,
  project: Project,
  impactAreas: ProjectCategorizationGPTResponse["impactAreas"]
) => {
  let session = driver.session();
  try {
    const results = await session.executeWrite((tx) =>
      Promise.all(
        impactAreas.map((impactArea) => {
          const matchedImpactArea = Object.values(ImpactAreas.object).find(
            (area) => area.name === impactArea.name
          );
          console.log(project.name, matchedImpactArea?.name);
          if (matchedImpactArea === undefined) return;
          return tx
            .run(
              `
            MERGE (project:Project {uniqueName: $projectUniqueName})
            MERGE (impactArea:ImpactArea {uniqueName: $impactAreaUniqueName})
            CREATE (project)-[:TOUCHES {aspect: $aspect, reason: $reason}]->(impactArea)
            RETURN *
            `,
              {
                projectUniqueName: snakeCase(project.name),
                impactAreaUniqueName: matchedImpactArea.dbName,
                aspect: impactArea.aspect,
                reason: impactArea.reason,
              }
            )
            .then((res) => res);
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
