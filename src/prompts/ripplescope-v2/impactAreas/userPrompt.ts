import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";
import { Project } from "../../../types.js";

const userPrompt = (project: Project) => {
  const message: ChatCompletionRequestMessage = {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content:
      `COMPANY INFORMATION:\n\nName: ${
        project.name
      }\nLocation: ${project.nations.join(", ")}\nProblem: ${
        project.problem
      }\nSolution: ${project.solution}\n\n\n` +
      "Return a JSON list of impact areas the project addresses." +
      "An impact area returned in the JSON list must be present in the IMPACT AREAS list." +
      "An impact area returned in the JSON list may be directly stated in the project details or logically implied by the project details but not directly stated." +
      "An impact area returned in the JSON list may be beneficial or detrimental." +
      "For example, projects may have unforseen impact that was stated in their project details because of the geo-political location in which the project is taking place.",
  };

  return message;
};
export default userPrompt;
