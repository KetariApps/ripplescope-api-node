import OpenAI from "openai";
import { ProjectCategorizationGPTResponse } from "../types.js";
import { global } from "./prompts/global.js";
import getJSONString from "../helpers/getJSONString.js";
import categorization from "./prompts/categorization/index.js";
import {
  ImpactAreaDetailsFragment,
  LocationDetailsFragment,
  ProjectDetailsFragment,
} from "../__generated__/graphql.js";

export default async function categorizeProject(
  project: ProjectDetailsFragment & {
    locations: readonly LocationDetailsFragment[];
  },
  impactAreas: ImpactAreaDetailsFragment[],
  openai: OpenAI
) {
  let messages: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[] = [
    ...global,
    categorization.userPrompt(project),
    categorization.responseTemplate,
  ];
  let impactAreasGPTResponseString: string | null;
  let impactAreaMatches: ProjectCategorizationGPTResponse | undefined;

  messages.push(categorization.context(impactAreas));

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });

  if (response) {
    impactAreasGPTResponseString = response.choices[0].message?.content;
    impactAreaMatches = getJSONString(impactAreasGPTResponseString) as
      | ProjectCategorizationGPTResponse
      | undefined;

    if (impactAreaMatches === undefined) {
      throw new Error("error parsing GPT response");
    } else {
      return impactAreaMatches.impactAreas;
    }
  } else {
    throw new Error("error categorizing project with GPT");
  }
}
