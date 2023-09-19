import OpenAI from 'openai';
import getJSONString from '../../../../../helpers/getJSONString.js';
import {
  GPT_Ripple,
  GPT_RipplesResponse,
  GPT_Scope,
  RecentlyCreatedProject,
} from '../types.js';
import { definitions, raisonDetre } from '../../systemPrompts/index.js';
import { initializer } from './prompts/index.js';

export default async function inferRipples(
  scopes: GPT_Scope[],
  project: RecentlyCreatedProject,
  openai: OpenAI,
) {
  const settled_GPT_RipplesResponse = await Promise.allSettled(
    scopes.map(async (scope, i, arr) => {
      const decorator = `[${new Date().toUTCString()}][${project.name}][${
        i + 1
      }/${arr.length}][${scope.name}]`;

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [definitions, raisonDetre, ...initializer(project, scope)],
      });

      if (response) {
        const GPT_ResponseString = response.choices[0].message?.content;
        if (GPT_ResponseString === null) {
          throw new Error(
            `${decorator}: No response from OpenAI while inferring ripples`,
          );
        }
        const GPT_Response = getJSONString(
          GPT_ResponseString,
        ) as GPT_RipplesResponse;

        if (GPT_Response === undefined) {
          throw new Error(
            `${decorator}: Error parsing OpenAI response while inferring ripples`,
          );
        } else {
          return GPT_Response.ripples.map((ripple) => ({
            scope,
            ripple,
          }));
        }
      } else {
        throw new Error(
          `${decorator}: Error analyzing OpenAI response while inferring ripples`,
        );
      }
    }),
  );

  const fulfilled_GPT_RipplesResponses: Array<
    Array<{
      scope: GPT_Scope;
      ripple: GPT_Ripple;
    }>
  > = [];
  settled_GPT_RipplesResponse.forEach((result) => {
    if (result.status === 'fulfilled') {
      fulfilled_GPT_RipplesResponses.push(result.value);
    } else {
      throw new Error(result.reason);
    }
  });
  const flat_fulfilled_GPT_RipplesResponses =
    fulfilled_GPT_RipplesResponses.flat();
  return flat_fulfilled_GPT_RipplesResponses;
}
