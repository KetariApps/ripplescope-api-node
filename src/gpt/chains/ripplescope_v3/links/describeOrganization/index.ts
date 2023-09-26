import OpenAI from 'openai';
import getJSONString from '../../../../util/getJSONString.js';
import {
  GPT_DescriptionResponse,
  OrganizationWithScopes,
} from '../../types.js';
import { definitions, raisonDetre } from '../../systemPrompts/index.js';
import { initializer, template } from './prompts/index.js';

export default async function inferRipples(
  organization: OrganizationWithScopes,
  openai: OpenAI,
) {
  const decorator = `[${new Date().toUTCString()}][${organization.name}]`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      definitions,
      raisonDetre,
      ...initializer(organization, organization.scopesConnection.edges),
      template,
    ],
  });

  if (response) {
    const GPT_ResponseString = response.choices[0].message?.content;
    if (GPT_ResponseString === null) {
      throw new Error(
        `${decorator}: No response from OpenAI while describing the organization`,
      );
    }
    const GPT_Response = getJSONString(
      GPT_ResponseString,
    ) as GPT_DescriptionResponse;

    if (GPT_Response === undefined) {
      throw new Error(
        `${decorator}: Error parsing OpenAI response while describing the organization`,
      );
    } else {
      return GPT_Response;
    }
  } else {
    throw new Error(
      `${decorator}: Error analyzing OpenAI response while describing the organization`,
    );
  }
}
