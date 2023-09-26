import {
  updateOrganization,
  connectScopes,
  describeOrganization,
  inferRipples,
  inferScopes,
} from './links/index.js';
import ripplescopeError from './links/ripplescopeError/index.js';
import { CreateOrganizationsMutation } from '../../../__generated__/graphql.js';
import { GraphQLClient } from 'graphql-request';
import OpenAI from 'openai';

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
    console.debug(`[${processId}]: Describing Organization`);
    console.debug(`[${processId}]: Inferring Ripples`);

    const [{ description, brief }, ripplesResponses] = await Promise.all([
      describeOrganization(organizationWithScopes, openai),
      inferRipples(organizationWithScopes, openai),
    ]);
    console.debug(`[${processId}]: Linking Data`);
    await updateOrganization({
      processId,
      id: organizationWithScopes.id,
      client,
      description,
      brief,
      ripplesResponses,
    });

    console.debug(`[${processId}]: Done`);
  } catch (error) {
    console.error(`[${processId}]: Error ${error}`);
    await ripplescopeError(processId, organization, error, client);
  }
}
