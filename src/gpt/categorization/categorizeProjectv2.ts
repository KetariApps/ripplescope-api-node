import OpenAI from "openai";
import * as dotenv from "dotenv";
import ImpactAreas from "../../prompts/ripplescope-v2/impactAreas/index.js";
import {
  CategorizationRequestProject,
  CategorizationWorkerMessage,
  ProjectCategorizationGPTResponse,
  WorkerMessageType,
} from "../../types.js";
import { global } from "../../prompts/global.js";
import getJSONString from "../../helpers/getJSONString.js";
import { getImpactAreas } from "../../db/queries/getImpactAreas.js";
import { GraphQLClient } from "graphql-request";
import buildImpactAreaListMessage from "../../prompts/ripplescope-v2/impactAreas/buildImpactAreaListMessage.js";

export default async function cateorizeProjectV2(
  project: CategorizationRequestProject,
  client: GraphQLClient
) {
  //// env stuff
  dotenv.config();
  const { OPENAI_API_KEY } = process.env;
  //// openai stuff
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });
  let messages: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[] = [
    ...global,
    ImpactAreas.userPrompt(project),
    ImpactAreas.userPromptResponseTemplate,
  ];
  let impactAreasGPTResponseString: string | null;
  let impactAreaMatches: ProjectCategorizationGPTResponse | undefined;
  let responseMessage: CategorizationWorkerMessage;

  const impactAreas = await getImpactAreas(client, {
    where: { verified: true },
  });
  messages.push(buildImpactAreaListMessage(impactAreas));

  return openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages,
    })
    .catch((error) => console.error(error))
    .then((response) => {
      if (response) {
        impactAreasGPTResponseString = response.choices[0].message?.content;
        impactAreaMatches = getJSONString(impactAreasGPTResponseString) as
          | ProjectCategorizationGPTResponse
          | undefined;

        if (impactAreaMatches === undefined) {
          responseMessage = {
            type: WorkerMessageType.ERROR,
            content: "error parsing GPT response",
          };
        } else {
          responseMessage = {
            type: WorkerMessageType.CATEGORIZATION,
            impactAreas: impactAreaMatches.impactAreas,
          };
        }
      } else {
        responseMessage = {
          type: WorkerMessageType.ERROR,
          content: "error categorizing project",
        };
      }
      return responseMessage;
    });
}
