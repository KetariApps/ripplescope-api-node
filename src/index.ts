import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import categorize from "./routes/post/categorize.js";
import neo4j, { Driver } from "neo4j-driver";
import project from "./routes/get/project.js";

//// env stuff
dotenv.config();
const { PORT, NEO_URI, NEO_USER, NEO_PASS, OPENAI_API_KEY } = process.env;

if (
  NEO_URI === undefined ||
  NEO_USER === undefined ||
  NEO_PASS === undefined ||
  PORT === undefined ||
  OPENAI_API_KEY === undefined
) {
  console.error("undefined environment variables");
} else {
  let driver: Driver;
  try {
    // connect to the neo4j instance
    driver = neo4j.driver(NEO_URI, neo4j.auth.basic(NEO_USER, NEO_PASS));
    const serverInfo = await driver.getServerInfo();
    console.log("Neo4j connection established");
    console.log(serverInfo);

    // configure the express server
    const app = express();
    const corsConfig = {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    };
    app.use(cors(corsConfig));
    app.options("*", cors(corsConfig));
    app.use(express.json());

    // set up the routes
    app.get("/projects/:uniqueName", (req, res) => project(req, res, driver));
    app.post("/categorize", (req, res) => categorize(req, res, driver));

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
