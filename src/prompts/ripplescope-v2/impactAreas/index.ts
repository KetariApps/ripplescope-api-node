import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";
import SocialFoundations from "./socialFoundations/index.js";
import EcologicalCeilings from "./ecologicalCeilings/index.js";
import { ProjectCategorizationGPTResponse } from "../../../types.js";

const list = () => {
  const socialFoundationsString = Object.values(SocialFoundations)
    .flatMap((foundation) =>
      Object.values(foundation).map(
        (impactArea) => `"${impactArea.dbName}": ${impactArea.description}`
      )
    )
    .join("\n");
  const ecologicalCeilingsString = Object.values(EcologicalCeilings)
    .flatMap((foundation) =>
      Object.values(foundation).map(
        (impactArea) => `"${impactArea.dbName}": ${impactArea.description}`
      )
    )
    .join("\n");

  return {
    role: ChatCompletionRequestMessageRoleEnum.Assistant,
    content: `IMPACT AREAS:\n\n${socialFoundationsString}\n${ecologicalCeilingsString}`,
  };
};

const userPrompt = (companyInfo: string) => {
  const message: ChatCompletionRequestMessage = {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content:
      `COMPANY INFORMATION:\n\n${companyInfo}\n\n\n` +
      "Return a JSON list of the impact areas related to the company." +
      "The list of impact areas should include unforseen, beneficial or detrimental, impact areas that are logically implied by the project, but not directly stated." +
      "For example, projects may have unforseen impact on a area not directly stated in their project goals because of the geo-political location in which the project is taking place.",
  };

  return message;
};

const returnObject: ProjectCategorizationGPTResponse = {
  impactAreas: [
    {
      name: "The impact area name from the list of impact areas.",
      aspect:
        "A breif description of the aspect of the project which led to the assertion of relevance.",
      reason:
        "A breif description of why this aspect makes the project relevant to the impact area.",
    },
  ],
};
const userPromptResponseTemplate: ChatCompletionRequestMessage = {
  role: ChatCompletionRequestMessageRoleEnum.Assistant,
  content:
    "The JSON object should match this template:\n\n" +
    JSON.stringify(returnObject),
};

const ImpactAreas = { list: list(), userPrompt, userPromptResponseTemplate };
export default ImpactAreas;
