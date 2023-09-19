import OpenAI from 'openai';
import getJSONString from '../../../../util/getJSONString.js';
import {
  GPT_Ripple,
  GPT_RipplesResponse,
  ProjectWithScopes,
} from '../../types.js';
import { definitions, raisonDetre } from '../../systemPrompts/index.js';
import { initializer } from './prompts/index.js';
import { connectScopes } from '../index.js';

export default async function inferRipples(
  project: ProjectWithScopes,
  openai: OpenAI,
) {
  const scopeEdges = project.scopesConnection.edges;
  const settled_GPT_RipplesResponse = await Promise.allSettled(
    scopeEdges.map(async (scopeEdge, i, arr) => {
      const decorator = `[${new Date().toUTCString()}][${project.name}][${
        i + 1
      }/${arr.length}][${scopeEdge.node.name}]`;

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          definitions,
          raisonDetre,
          ...initializer(project, scopeEdge),
        ],
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
            scopeEdge,
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
      scopeEdge: Awaited<
        ReturnType<typeof connectScopes>
      >['scopesConnection']['edges'][0];
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
