import { CreateOrganizationsMutation } from '../../../../__generated__/graphql.js';
import { GPT_NameResponse } from '../../../../gpt/chains/ripplescope_v3/types.js';
import getJSONString from '../../../../gpt/util/getJSONString.js';
import { initializer, template } from './prompts/index.js';
import OpenAI from 'openai';

type CreatedConsideration =
  CreateOrganizationsMutation['createOrganizations']['organizations'][0]['considerations'][0];

export default async function nameConsiderations(
  considerations: CreateOrganizationsMutation['createOrganizations']['organizations'][0]['considerations'],
  openai: OpenAI,
) {
  const settledNames = await Promise.allSettled(
    considerations.map((c, i, arr) => nameConsideration(c, i, arr, openai)),
  );
  const resolvedNames: Awaited<ReturnType<typeof nameConsideration>>[] = [];
  settledNames.forEach((name) =>
    name.status === 'fulfilled'
      ? resolvedNames.push(name.value)
      : console.error(name.reason),
  );

  return resolvedNames;
}

const nameConsideration = async (
  consideration: CreatedConsideration,
  iterator: number,
  arr: CreatedConsideration[],
  openai: OpenAI,
) => {
  const decorator = `[${new Date().toUTCString()}][${iterator + 1} / ${
    arr.length
  }]`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [...initializer(consideration), template],
  });

  if (response) {
    const GPT_ResponseString = response.choices[0].message?.content;
    if (GPT_ResponseString === null) {
      throw new Error(
        `${decorator}: No response from OpenAI while naming the consideration`,
      );
    }

    let GPT_Response: GPT_NameResponse;
    try {
      GPT_Response = JSON.parse(GPT_ResponseString);
    } catch (error) {
      console.log('NAME_CONSIDERATION', GPT_ResponseString);
      GPT_Response = getJSONString(GPT_ResponseString);
    }

    if (GPT_Response === undefined) {
      throw new Error(
        `${decorator}: Error parsing OpenAI response while naming the consideration`,
      );
    } else {
      return { ...GPT_Response, ...consideration };
    }
  } else {
    throw new Error(
      `${decorator}: Error analyzing OpenAI response while describing the organization`,
    );
  }
};
