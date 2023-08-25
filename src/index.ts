import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
// import neo4j, { Driver } from "neo4j-driver";
import { GraphQLClient } from "graphql-request";
import ripplescope from "./routes/post/ripplescope.js";

//// env stuff
dotenv.config();
const { GRAPH_URI, PORT, NEO_URI, NEO_USER, NEO_PASS, OPENAI_API_KEY } =
  process.env;

if (
  GRAPH_URI === undefined ||
  NEO_URI === undefined ||
  NEO_USER === undefined ||
  NEO_PASS === undefined ||
  PORT === undefined ||
  OPENAI_API_KEY === undefined
) {
  console.error("undefined environment variables");
} else {
  // let driver: Driver;
  const client = new GraphQLClient(GRAPH_URI);
  try {
    // connect to the neo4j instance
    // driver = neo4j.driver(NEO_URI, neo4j.auth.basic(NEO_USER, NEO_PASS));
    // const serverInfo = await driver.getServerInfo();
    // console.log("Neo4j connection established");
    // console.log(serverInfo);

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
    app.post("/ripplescope", (req, res) => ripplescope(req, res, client));

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
