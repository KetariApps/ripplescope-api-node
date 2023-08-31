import OpenAI from "openai";
import * as dotenv from "dotenv";
import ImpactAreas from "./prompts/ripplescope-v2/impactAreas/index.js";
import {
  GetProjectsImpactAreasQuery,
  ImpactAreaDetailsFragment,
} from "../__generated__/graphql.js";
import { ProjectCategorizationGPTResponseItem } from "../types.js";

export default async function isRedundantImpactArea(
  existingImpactAreas: GetProjectsImpactAreasQuery["projects"][0]["impactAreasConnection"]["edges"],
  newImpact: ProjectCategorizationGPTResponseItem
) {
  //// env stuff
  dotenv.config();
  const { OPENAI_API_KEY } = process.env;
  //// openai stuff
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });

  const existingImpactAreasString = existingImpactAreas
    .map(({ node, aspect, reason }) => {
      const impactAreaDetails = node as ImpactAreaDetailsFragment;
      `${node.uniqueName}\n${impactAreaDetails.description}\n${aspect}\n${reason}`;
    })
    .join("\n\n");

  const newImpactAreaString = `${newImpact.name}\n${newImpact.aspect}\n${newImpact.reason}`;

  const messages: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[] =
    [
      ImpactAreas.constructTestRedundanciesPrompt(
        existingImpactAreasString,
        newImpactAreaString
      ),
    ];
  return openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages,
    })
    .catch((error) => console.error(error))
    .then((response) => {
      if (response) {
        const messageContent = response.choices[0].message?.content;
        if (messageContent === null) return undefined;
        return {
          isRedundant: messageContent.toLocaleUpperCase().includes("TRUE")
            ? true
            : false,
          content: messageContent,
          prompt: messages,
        };
      }
    });
}
