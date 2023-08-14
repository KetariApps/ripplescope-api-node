import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
// import { createClient, Graph } from "redis";
import analyzeProject from "./workers/analyzeProject.js";
import { AnalysisRequest } from "./types.js";

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

/**
 * connects to localhost on port 6379. To connect to a different host or port, use a connection string in the format redis[s]://[[username][:password]@][host][:port][/db-number]
 */
// const redisClient = createClient();
// redisClient.on("error", (err) => console.log("Redis Client Error", err));

/**
 * The ripplescope endpoint receives analysis requests, kicks off an analysis chain, and returns a key to the user that they can use to observe the status of the chain
 */
app.post("/ripplescope", async (req: Request, res: Response) => {
  try {
    const analysisRequest = req.body as AnalysisRequest;
    console.log(analysisRequest);
    const { processId: streamId, categorizationWorker } = analyzeProject({
      analysisRequest,
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
