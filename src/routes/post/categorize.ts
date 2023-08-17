import { Request, Response } from "express";
import { AnalysisRequest } from "../../types.js";
import categorizeProject from "../../workers/categorization/categorizeProject.js";
import { Driver } from "neo4j-driver";
import insertProject from "../../db/mutations/insertProject.js";
import connectImpactAreas from "../../db/mutations/connectImpactAreas.js";
import isRedundantImpactArea from "../../workers/categorization/isRedundantImpactArea.js";

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
