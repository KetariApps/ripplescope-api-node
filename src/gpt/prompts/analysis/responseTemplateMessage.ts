import OpenAI from "openai";
import { ProjectAnalysisGPTResponse } from "../../../types.js";

const returnObject: ProjectAnalysisGPTResponse = {
  project: {
    impactArea: {
      benefits: [
        {
          description:
            "Breifly describe the potential benefit of the project relative to the impact area.",
          aspect:
            "Identify the aspect of the project that is potentially beneficial to the impact area.",
          reason:
            "Explain why this aspect of the project is potentially beneficial to the impact area.",
          score:
            "Score the level of the potential benefit from 0-1, where 0 is a neutral benefit and 1 is extremely beneficial.",
        },
      ],
      hazards: [
        {
          description:
            "Breifly describe the potential hazard of the project relative to the impact area.",
          aspect:
            "Identify the aspect of the project that is potentially hazardous to the impact area.",
          reason:
            "Explain why this aspect of the project is potentially hazardous to the impact area.",
          score:
            "Score the level of the potential hazardous from 0-1, where 0 is a neutral hazard and 1 is extremely hazardous.",
        },
      ],
    },
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
