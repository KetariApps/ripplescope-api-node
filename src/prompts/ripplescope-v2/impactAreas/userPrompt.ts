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
      "Return a JSON list of the impact areas the project impacts from the provided list of impact areas." +
      "The list of impact areas should include direct and indirect, known and unforseen, beneficial or detrimental, impact areas that are logically implied by the project, but not directly stated." +
      "For example, projects may have unforseen impact on a area not directly stated in their project goals because of the geo-political location in which the project is taking place.",
  };

  return message;
};
export default userPrompt;
