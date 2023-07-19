import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Worker } from "worker_threads";
import { v4 as uuid } from "uuid";
import { RipplescopeWorkerData } from "./workers/ripplescope.js";

//// env stuff
dotenv.config();
const { PORT } = process.env;

const app = express();
app.use(cors());

// Enable parsing of request bodies
app.use(express.json());

const workers: Map<string, Worker> = new Map();

// SSE endpoint
// stream results to specific users
app.get("/sse", (req: Request, res: Response) => {
  const streamId = req.query.streamId as string;
  const worker = workers.get(streamId);

  if (worker === undefined) {
    res.status(404).send("Error locating worker");
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  worker.on("message", (message: string) => {
    if (message === "done") {
      workers.delete(streamId);
      res.end();
    } else if (message === "error") {
      console.error("Error from worker");
    } else {
      res.write(`data: ${message}\n\n`);
    }
  });
});

// ripplescope endpoint
app.post("/ripplescope", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const content = req.body.message;
  const streamId = uuid();
  const workerData: RipplescopeWorkerData = {
    streamId,
    content,
  };
  const worker = new Worker("./build/workers/ripplescope.js", {
    workerData,
  });

  workers.set(streamId, worker);
  res.write(JSON.stringify({ streamId }), () => {
    res.end();
  });
  worker.on("message", (message: string) => {
    if (message === "done") {
      workers.delete(streamId);
      res.end();
    } else if (message === "error") {
      console.error("Error from worker");
    } else {
      res.write(`data: ${message}\n\n`);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
