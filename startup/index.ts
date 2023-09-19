import { createScopes } from '../src/db/mutation/scope/create';
import * as dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';
import ecological from './initialNodes/scopes/ecological';
import social from './initialNodes/scopes/social';

(async () => {
  dotenv.config();
  const { GRAPH_URI } = process.env;
  if (GRAPH_URI === undefined) throw new Error('GRAPH_URI is undefined');

  const client = new GraphQLClient(GRAPH_URI);

  console.log('Creating initial scopes.');
  await client.request(createScopes, { input: [...ecological, ...social] });
  console.log('Created initial scopes.');
})();
