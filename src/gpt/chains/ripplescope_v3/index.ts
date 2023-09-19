import OpenAI from 'openai';
import {
  connectRipples,
  connectScopes,
  createProject,
  inferRipples,
  inferScopes,
} from './links/index.js';
import ripplescopeError from './links/ripplescopeError/index.js';
import { NewProjectInput } from './types.js';
import * as dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

export default async function ripplescope(projectDetails: NewProjectInput) {
  dotenv.config();
  const { GRAPH_URI, OPENAI_API_KEY } = process.env;
  if (GRAPH_URI === undefined) throw new Error('GRAPH_URI is undefined');
  if (OPENAI_API_KEY === undefined)
    throw new Error('OPENAI_API_KEY is undefined');
  const client = new GraphQLClient(GRAPH_URI);
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

  const project = await createProject(projectDetails, client);
  try {
    const scopes = await inferScopes(project, openai, client);
    const projectWithScopes = await connectScopes(project, scopes, client);
    const ripplesResponses = await inferRipples(projectWithScopes, openai);
    await connectRipples(projectWithScopes, ripplesResponses, client);
  } catch (error) {
    await ripplescopeError(project, error, client);
  }
}
