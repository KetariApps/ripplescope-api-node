import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { AnalysisRequest } from "./types.js";
import categorizeProject from "./workers/categorization/categorizeProject.js";

//// env stuff
dotenv.config();
const { PORT } = process.env;
const app = express();
// configure cors
const corsConfig = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(express.json());

app.post("/categorize", async (req: Request, res: Response) => {
  try {
    const analysisRequest = req.body as AnalysisRequest;
    console.log(analysisRequest);
    const { processId: streamId, categorizationWorker } = categorizeProject({
      analysisRequest,
      categorizationMessageHandler: (props) => console.log(props),
    });
    res.status(200).json({ streamId }); // Send JSON response
    res.end(); // End the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
    res.end(); // Ensure the response is properly terminated
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
