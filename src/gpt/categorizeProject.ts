import OpenAI from 'openai';
import { ProjectCategorizationGPTResponse } from '../types.js';
import { global } from './prompts/global.js';
import getJSONString from '../helpers/getJSONString.js';
import {
  ImpactAreaDetailsFragment,
  ProjectDetailsFragment,
} from '../__generated__/graphql.js';
import Scopes from './prompts/ripplescope-v2/scopes/index.js';

export default async function categorizeProject(
  project: ProjectDetailsFragment,
  impactAreas: ImpactAreaDetailsFragment[],
  openai: OpenAI,
) {
  let messages: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[] = [
    ...global,
    Scopes.userPrompt(project),
    Scopes.responseTemplate,
  ];
  let impactAreasGPTResponseString: string | null;
  let impactAreaMatches: ProjectCategorizationGPTResponse | undefined;

  messages.push(Scopes.context(impactAreas));

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
  });

  if (response) {
    impactAreasGPTResponseString = response.choices[0].message?.content;
    impactAreaMatches = getJSONString(impactAreasGPTResponseString) as
      | ProjectCategorizationGPTResponse
      | undefined;

    if (impactAreaMatches === undefined) {
      throw new Error('error parsing GPT response');
    } else {
      return impactAreaMatches.impactAreas;
    }
  } else {
    throw new Error('error categorizing project with GPT');
  }
}
