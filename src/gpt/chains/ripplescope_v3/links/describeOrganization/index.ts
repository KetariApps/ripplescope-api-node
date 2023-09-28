import {
  GPT_DescriptionResponse,
  OrganizationWithScopes,
} from '../../types.js';
import { initializer, template } from './prompts/index.js';
import OpenAI from 'openai';
import getJSONString from '../../../../util/getJSONString.js';

export default async function describeOrganization(
  organization: OrganizationWithScopes,
  openai: OpenAI,
) {
  const decorator = `[${new Date().toUTCString()}][${organization.name}]`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [...initializer(organization), template],
  });

  if (response) {
    const GPT_ResponseString = response.choices[0].message?.content;
    if (GPT_ResponseString === null) {
      throw new Error(
        `${decorator}: No response from OpenAI while describing the organization`,
      );
    }

    let GPT_Response: GPT_DescriptionResponse;
    try {
      GPT_Response = JSON.parse(GPT_ResponseString);
    } catch (error) {
      console.log('DESCRIBE_ORG', GPT_ResponseString);
      GPT_Response = getJSONString(GPT_ResponseString);
    }

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
