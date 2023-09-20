import OpenAI from 'openai';
import {
  connectRipples,
  connectScopes,
  createOrganization,
  inferRipples,
  inferScopes,
} from './links/index.js';
import ripplescopeError from './links/ripplescopeError/index.js';
import * as dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';
import { OrganizationCreateInput } from '../../../__generated__/graphql.js';

export default async function ripplescopeChain(
  organizationDetails: OrganizationCreateInput,
) {
  dotenv.config();
  const { GRAPH_URI, OPENAI_API_KEY } = process.env;
  if (GRAPH_URI === undefined) throw new Error('GRAPH_URI is undefined');
  if (OPENAI_API_KEY === undefined)
    throw new Error('OPENAI_API_KEY is undefined');
  const client = new GraphQLClient(GRAPH_URI);
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

  const organization = await createOrganization(organizationDetails, client);
  try {
    const scopes = await inferScopes(organization, openai, client);
    const organizationWithScopes = await connectScopes(
      organization,
      scopes,
      client,
    );
    const ripplesResponses = await inferRipples(organizationWithScopes, openai);
    await connectRipples(organizationWithScopes, ripplesResponses, client);
  } catch (error) {
    await ripplescopeError(organization, error, client);
  }
}
