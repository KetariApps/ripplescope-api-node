import OpenAI from 'openai';
import getJSONString from '../../../../util/getJSONString.js';
import { initializer, template } from './prompts/index.js';
import { GraphQLClient } from 'graphql-request';
import { GPT_ScopesResponse, RecentlyCreatedProject } from '../../types.js';
import {
  definitions,
  getExistingScopes,
  raisonDetre,
} from '../../systemPrompts/index.js';
import { CreateProjectsMutation } from '../../../../../__generated__/graphql.js';

export default async function inferScopes(
  project: CreateProjectsMutation['createProjects']['projects'][0],
  openai: OpenAI,
  client: GraphQLClient,
) {
  const decorator = `[${new Date().toUTCString()}][${project.name}]`;

  const existingScopes = await getExistingScopes(client);
  const messages = [definitions, raisonDetre, initializer(project)];
  if (existingScopes !== null) messages.push(existingScopes);
  messages.push(template);

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
  });

  if (response) {
    const GPT_ResponseString = response.choices[0].message?.content;
    if (GPT_ResponseString === null) {
      throw new Error(
        `${decorator}: No response from OpenAI while inferring scopes`,
      );
    }
    const GPT_Response = getJSONString(
      GPT_ResponseString,
    ) as GPT_ScopesResponse;

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
