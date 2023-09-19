import { createScopes } from '../db/mutation/scope/create.js';
import * as dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';
import ecological from './initialNodes/scopes/ecological.js';
import social from './initialNodes/scopes/social.js';

(async () => {
  try {
    dotenv.config();
    const { GRAPH_URI } = process.env;
    if (GRAPH_URI === undefined) throw new Error('GRAPH_URI is undefined');

    const client = new GraphQLClient(GRAPH_URI);

    // todo: verify scopes don't already exist -- this may run at every container startup

    console.log('Creating initial scopes.');
    await client.request(createScopes, { input: [...ecological, ...social] });
    console.log('Created initial scopes.');
  } catch (error) {
    console.error(error);
  }
})();
