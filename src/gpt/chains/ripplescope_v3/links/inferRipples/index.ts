import getJSONString from '../../../../util/getJSONString.js';
import {
  GPT_Ripple,
  GPT_RipplesResponse,
  OrganizationWithScopes,
} from '../../types.js';
import { definitions, raisonDetre } from '../../systemPrompts/index.js';
import { initializer, template } from './prompts/index.js';
import { connectScopes } from '../index.js';
import OpenAI from 'openai';

export default async function inferRipples(
  organization: OrganizationWithScopes,
  openai: OpenAI,
) {
  const settled_GPT_RipplesResponse = await Promise.allSettled(
    organization.scopesConnection.edges.map(async (scopeEdge, i, arr) => {
      const decorator = `[${new Date().toUTCString()}][${organization.name}][${
        i + 1
      }/${arr.length}][${scopeEdge.node.name}]`;

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          definitions,
          raisonDetre,
          ...initializer(organization, scopeEdge),
          template,
        ],
      });

      if (response) {
        const GPT_ResponseString = response.choices[0].message?.content;
        if (GPT_ResponseString === null) {
          throw new Error(
            `${decorator}: No response from OpenAI while inferring ripples`,
          );
        }

        let GPT_Response: GPT_RipplesResponse;
        try {
          GPT_Response = JSON.parse(GPT_ResponseString);
        } catch (error) {
          GPT_Response = getJSONString(GPT_ResponseString);
        }

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
      console.error(result.reason);
    }
  });
  if (fulfilled_GPT_RipplesResponses.length === 0) {
    throw new Error('Could not infer any ripples on organization.');
  }
  const flat_fulfilled_GPT_RipplesResponses =
    fulfilled_GPT_RipplesResponses.flat();
  return flat_fulfilled_GPT_RipplesResponses;
}
