import OpenAI from "openai";
import {
  CategorizationRequestProject,
  ProjectCategorizationGPTResponse,
} from "../types.js";
import { global } from "./prompts/global.js";
import getJSONString from "../helpers/getJSONString.js";
import { getImpactAreas } from "../db/queries/getImpactAreas.js";
import { GraphQLClient } from "graphql-request";
import categorization from "./prompts/categorization/index.js";

export default async function cateorizeProject(
  project: CategorizationRequestProject,
  client: GraphQLClient,
  openai: OpenAI
) {
  let messages: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[] = [
    ...global,
    categorization.userPrompt(project),
    categorization.responseTemplate,
  ];
  let impactAreasGPTResponseString: string | null;
  let impactAreaMatches: ProjectCategorizationGPTResponse | undefined;

  const getImpactAreasQuery = await getImpactAreas(client, {
    where: { verified: true },
    includeDetails: true,
  });
  messages.push(categorization.context(getImpactAreasQuery.impactAreas));

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
