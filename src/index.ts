import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
// import neo4j, { Driver } from "neo4j-driver";
import { GraphQLClient } from 'graphql-request';
import ripplescope from './routes/post/ripplescope.js';
import scraped from './routes/post/scraped.js';

//// env stuff
dotenv.config();
const { GRAPH_URI, PORT, OPENAI_API_KEY } = process.env;

if (
  GRAPH_URI === undefined ||
  PORT === undefined ||
  OPENAI_API_KEY === undefined
) {
  console.error('undefined environment variables');
} else {
  try {
    // configure the express server
    const app = express();
    const corsConfig = {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    };
    app.use(cors(corsConfig));
    app.options('*', cors(corsConfig));
    app.use(express.json());

    // set up the routes
    app.post('/ripplescope', (req, res) => ripplescope(req, res));
    app.post('/ripplescope/scraped', (req, res) => scraped(req, res));

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
