import { Request, Response } from "express";
import { Driver } from "neo4j-driver";
import getProject from "../../db/queries/getProject.js";

export default async function project(
  req: Request,
  res: Response,
  driver: Driver
) {
  try {
    const uniqueName = req.params.uniqueName;
    const getProjectResponses = await getProject(driver, uniqueName);
    res.status(200).json(getProjectResponses);
    res.end(); // End the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
    res.end(); // Ensure the response is properly terminated
  }
}
