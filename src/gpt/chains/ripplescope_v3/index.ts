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
import { resolveRipplesResponse, resolveSettledSummary } from './util/index.js';

export default async function ripplescopeChain(
  processId: string,
  organization: CreateOrganizationsMutation['createOrganizations']['organizations'][0],
  openai: OpenAI,
  client: GraphQLClient,
) {
  const decorator = `[${processId}][Ripplescope Chain]`;
  try {
    console.debug(`${decorator}: Inferring Scopes`);
    const scopes = await inferScopes(organization, openai, client);
    console.debug(`${decorator}: Connecting Scopes`);
    const organizationWithScopes = await connectScopes(
      processId,
      organization,
      scopes,
      client,
    );

    const orgMissingDescriptionAndBrief =
      typeof organizationWithScopes.description !== 'string' &&
      typeof organizationWithScopes.brief !== 'string';
    orgMissingDescriptionAndBrief &&
      console.debug(`${decorator}: Describing Organization`);
    console.debug(`${decorator}: Inferring Ripples`);

    const [settledSummary, settledRipplesResponse] = await Promise.allSettled([
      orgMissingDescriptionAndBrief
        ? describeOrganization(organizationWithScopes, openai)
        : undefined,
      inferRipples(organizationWithScopes, openai),
    ]);

    const summary = resolveSettledSummary(settledSummary);
    const ripplesResponses = resolveRipplesResponse(settledRipplesResponse);

    console.debug(`${decorator}: Linking Data`);
    await updateOrganization({
      processId,
      id: organizationWithScopes.id,
      client,
      description: summary?.description,
      brief: summary?.brief,
      ripplesResponses,
    });

    console.debug(`${decorator}: Done`);
  } catch (error) {
    console.error(`${decorator}: Error ${error}`);
    await ripplescopeError(processId, organization, error, client);
  }
}
