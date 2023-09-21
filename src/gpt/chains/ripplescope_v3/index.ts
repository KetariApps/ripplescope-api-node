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
    const scopes = await inferScopes(organization, openai, client);
    const organizationWithScopes = await connectScopes(
      processId,
      organization,
      scopes,
      client,
    );
    const ripplesResponses = await inferRipples(organizationWithScopes, openai);
    await connectRipples(
      processId,
      organizationWithScopes,
      ripplesResponses,
      client,
    );
  } catch (error) {
    await ripplescopeError(processId, organization, error, client);
  }
}
