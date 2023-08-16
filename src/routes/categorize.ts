import { Request, Response } from "express";
import {
  AnalysisRequest,
  Project,
  ProjectCategorizationGPTResponse,
} from "../types.js";
import categorizeProject from "../workers/categorization/categorizeProject.js";
import { Driver } from "neo4j-driver";
import snakeCase from "../helpers/snakeCase.js";
import ImpactAreas from "../prompts/ripplescope-v2/impactAreas/index.js";

export default async function categorize(
  req: Request,
  res: Response,
  driver: Driver
) {
  try {
    const analysisRequest = req.body as AnalysisRequest;
    console.log(analysisRequest);
    const insertProjectResponse = await insertProject(
      driver,
      analysisRequest.project
    );
    if (insertProjectResponse === undefined) return;
    categorizeProject({
      analysisRequest,
      categorizationMessageHandler: async ({ message }) => {
        console.log(analysisRequest.project.name, message);
        connectImpactAreas(
          driver,
          analysisRequest.project,
          message.impactAreas
        );
      },
    });
    res.status(200).json(insertProjectResponse);
    res.end(); // End the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
    res.end(); // Ensure the response is properly terminated
  }
}

const insertProject = async (driver: Driver, project: Project) => {
  let session = driver.session();
  try {
    const results = await session.executeWrite((tx) =>
      Promise.all(
        project.nations.map((nation) =>
          tx.run(
            `
        MERGE (project:Project {name: $projectName, uniqueName: $uniqueProjectName, problem: $problem, solution: $solution})
        MERGE (nation:Location:Nation {name: $nationName, uniqueName: $uniqueNationName})
        CREATE (project)-[:DEPLOYED_TO]->(location)
        RETURN *`,
            {
              projectName: project.name,
              uniqueProjectName: snakeCase(project.name),
              problem: project.problem,
              solution: project.solution,
              nationName: nation,
              uniqueNationName: snakeCase(nation),
            }
          )
        )
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
