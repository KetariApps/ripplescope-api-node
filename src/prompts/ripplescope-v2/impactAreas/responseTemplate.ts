import OpenAI from "openai";
import { ProjectCategorizationGPTResponse } from "../../../types.js";

const returnObject: ProjectCategorizationGPTResponse = {
  impactAreas: [
    {
      name: "The impact area name from the list of impact areas.",
      aspect:
        "Identify the aspect of the project which is relevant to this impact area. Use the project name if it was provided.",
      reason:
        "A breif description of why this aspect is relevant to the impact area.",
      impactScore:
        "A stringified float between -1 and 1, where -1 means the aspect of the project has the potential to be extremely harmful to the impact area, and 1 means it has the potential to be extremely beneficial",
    },
  ],
};
const userPromptResponseTemplate: OpenAI.Chat.CreateChatCompletionRequestMessage =
  {
    role: "assistant",
    content:
      "The JSON object should match this template:\n\n" +
      JSON.stringify(returnObject),
  };

export default userPromptResponseTemplate;
