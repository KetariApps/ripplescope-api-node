import { GraphQLClient } from 'graphql-request';
import OpenAI from 'openai';
import {
  connectRipples,
  connectScopes,
  createProject,
  inferRipples,
  inferScopes,
} from './links/index.js';
import ripplescopeError from './links/ripplescopeError/index.js';
import { NewProjectInput } from './links/types.js';

export default async function ripplescope(
  projectDetails: NewProjectInput,
  client: GraphQLClient,
  openai: OpenAI,
) {
  const project = await createProject(projectDetails, client);
  try {
    const scopes = await inferScopes(project, openai, client);
    await connectScopes(project, scopes, client);
    const ripplesResponses = await inferRipples(scopes, project, openai);
    await connectRipples(project, ripplesResponses, client);
  } catch (error) {
    await ripplescopeError(project, error, client);
  }
}