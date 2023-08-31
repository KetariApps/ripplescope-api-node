import OpenAI from "openai";
import { ProjectAnalysisGPTResponse } from "../../../types.js";

const returnObject: ProjectAnalysisGPTResponse = {
  project: {
    benefits: [
      {
        name: "A three word name for the benefit",
        aspect:
          "Identify the aspect of the project that is potentially beneficial to the impact area. If none exists, return an empty array of 'benefits'.",
        reason:
          "Explain why this aspect of the project is potentially beneficial to the impact area.",
        score:
          "A stringified float which represents the potential benefit from 0-1, where 0 is a neutral benefit and 1 is extremely beneficial.",
      },
    ],
    hazards: [
      {
        name: "A three word name for the hazard",
        aspect:
          "Identify any aspect of the project that is potentially hazardous to the impact area. If none exists, return an empty array of 'hazards'.",
        reason:
          "Explain why this aspect of the project is potentially hazardous to the impact area.",
        score:
          "A stringified float which represents the potential hazard from 0-1, where 0 is a neutral hazard and 1 is extremely hazardous.",
      },
    ],
  },
};
const responseTemplateMessage: OpenAI.Chat.CreateChatCompletionRequestMessage =
  {
    role: "assistant",
    content:
      "The response should adhere to this response template:\n\n-----\n\nRESPONSE TEMPLATE:\n\n" +
      JSON.stringify(returnObject),
  };

export default responseTemplateMessage;
