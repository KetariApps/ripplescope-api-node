import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";

const impactCategoriesUserPrompt = (companyInfo: string) => {
  const message: ChatCompletionRequestMessage = {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content:
      `COMPANY INFORMATION:\n\n${companyInfo}\n\n\n` +
      "Return a JSON list of the impact categories related to the company." +
      "The list of impact categories should include unforseen, beneficial or detrimental, impact categories that are logically implied by the project, but not directly stated." +
      "For example, projects may have unforseen impact on a category not directly stated in their project goals because of the geo-political location in which the project is taking place.",
  };

  return message;
};

export default impactCategoriesUserPrompt;
