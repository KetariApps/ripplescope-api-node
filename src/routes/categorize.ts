import { Request, Response } from "express";
import { AnalysisRequest } from "../types.js";
import categorizeProject, {
  CategorizationMessageHandlerProps,
} from "../workers/categorization/categorizeProject.js";

export default async function categorize(req: Request, res: Response) {
  try {
    const analysisRequest = req.body as AnalysisRequest;
    console.log(analysisRequest);
    const { processId: streamId, categorizationWorker } = categorizeProject({
      analysisRequest,
      categorizationMessageHandler,
    });
    res.status(200).json({ streamId }); // Send JSON response
    res.end(); // End the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
    res.end(); // Ensure the response is properly terminated
  }
}

const categorizationMessageHandler = async (
  props: CategorizationMessageHandlerProps
) => {
  const { processId, message } = props;

  try {
  } catch (err) {
    console.log(err);
  }
};
