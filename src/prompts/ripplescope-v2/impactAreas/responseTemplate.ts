import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";
import { ProjectCategorizationGPTResponse } from "../../../types.js";

const returnObject: ProjectCategorizationGPTResponse = {
  impactAreas: [
    {
      name: "The impact area name from the list of impact areas.",
      aspect:
        "A name of the aspect of the project which led to the assertion of relevance.",
      reason:
        "A breif description of why this aspect makes the project relevant to the impact area.",
      summary: "A combined description of the aspect and reason.",
      score:
        "A stringified float between -1 and 1, where -1 means the aspect of the project has the potential to be extremely harmful to the impact area, and 1 means it has the potential to be extremely beneficial",
    },
  ],
};
const userPromptResponseTemplate: ChatCompletionRequestMessage = {
  role: ChatCompletionRequestMessageRoleEnum.Assistant,
  content:
    "The JSON object should match this template:\n\n" +
    JSON.stringify(returnObject),
};

export default userPromptResponseTemplate;
