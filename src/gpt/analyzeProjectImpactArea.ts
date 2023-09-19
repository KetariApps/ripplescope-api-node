import OpenAI from 'openai';
import analysis from './prompts/analysis/index.js';
import {
  ImpactAreaDetailsFragment,
  ProjectDetailsFragment,
} from '../__generated__/graphql.js';
import { ProjectAnalysisGPTResponse } from '../types.js';
import getJSONString from '../helpers/getJSONString.js';
import _ from 'lodash';

export default async function analyzeProjectImpactArea(
  impactArea: ImpactAreaDetailsFragment,
  project: ProjectDetailsFragment,
  openai: OpenAI,
) {
  const {
    userMessage,
    projectContextMessage,
    impactAreaContextMessage,
    responseTemplateMessage,
  } = analysis;
  const messages = [
    userMessage,
    projectContextMessage(project),
    impactAreaContextMessage(impactArea),
    responseTemplateMessage,
  ];
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
  });
  if (response) {
    const projectAnalysisGPTResponseString =
      response.choices[0].message?.content;
    const projectAnalysisGPTResponse = getJSONString(
      projectAnalysisGPTResponseString,
    ) as ProjectAnalysisGPTResponse | undefined;

    if (projectAnalysisGPTResponse === undefined) {
      throw new Error('error parsing GPT response');
    } else {
      return projectAnalysisGPTResponse;
    }
  } else {
    throw new Error('error analyzing project with GPT');
  }
}
