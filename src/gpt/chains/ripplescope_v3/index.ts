import {
  connectRipples,
  connectScopes,
  inferRipples,
  inferScopes,
} from './links/index.js';
import ripplescopeError from './links/ripplescopeError/index.js';
import { CreateOrganizationsMutation } from '../../../__generated__/graphql.js';
import OpenAI from 'openai';
import { GraphQLClient } from 'graphql-request';

export default async function ripplescopeChain(
  processId: string,
  organization: CreateOrganizationsMutation['createOrganizations']['organizations'][0],
  openai: OpenAI,
  client: GraphQLClient,
) {
  try {
    console.debug(`[${processId}]: Inferring Scopes`);
    const scopes = await inferScopes(organization, openai, client);
    console.debug(`[${processId}]: Connecting Scopes`);
    const organizationWithScopes = await connectScopes(
      processId,
      organization,
      scopes,
      client,
    );
    console.debug(`[${processId}]: Inferring Ripples`);
    const ripplesResponses = await inferRipples(organizationWithScopes, openai);
    console.debug(`[${processId}]: Connecting Ripples`);
    await connectRipples(
      processId,
      organizationWithScopes,
      ripplesResponses,
      client,
    );
    console.debug(`[${processId}]: Done`);
  } catch (error) {
    console.error(`[${processId}]: Error ${error}`);
    await ripplescopeError(processId, organization, error, client);
  }
}
