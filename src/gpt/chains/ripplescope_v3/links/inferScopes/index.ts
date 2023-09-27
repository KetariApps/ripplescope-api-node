import OpenAI from 'openai';
import getJSONString from '../../../../util/getJSONString.js';
import { initializer, template } from './prompts/index.js';
import { GraphQLClient } from 'graphql-request';
import { GPT_ScopesResponse } from '../../types.js';
import { definitions, raisonDetre } from '../../systemPrompts/index.js';
import { CreateOrganizationsMutation } from '../../../../../__generated__/graphql.js';
import { scopes } from '../../../../../db/query/scope/scopes.js';

export default async function inferScopes(
  organization: CreateOrganizationsMutation['createOrganizations']['organizations'][0],
  openai: OpenAI,
  client: GraphQLClient,
) {
  const decorator = `[${new Date().toUTCString()}][${organization.name}]`;

  const scopesQuery = await client.request(scopes, {});
  const messages = [
    definitions,
    raisonDetre,
    ...initializer(organization, scopesQuery),
    template,
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
  });

  if (response) {
    const GPT_ResponseString = response.choices[0].message?.content;
    if (GPT_ResponseString === null) {
      throw new Error(
        `${decorator}: No response from OpenAI while inferring scopes`,
      );
    }

    let GPT_Response: GPT_ScopesResponse;
    try {
      GPT_Response = JSON.parse(GPT_ResponseString);
    } catch (error) {
      GPT_Response = getJSONString(GPT_ResponseString);
    }

    if (GPT_Response === undefined) {
      throw new Error(
        `${decorator}: Error parsing OpenAI response while inferring scopes`,
      );
    } else {
      return GPT_Response.scopes;
    }
  } else {
    throw new Error(
      `${decorator}: Error analyzing OpenAI response while inferring scopes`,
    );
  }
}
