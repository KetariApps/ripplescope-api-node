import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";

const impactCategoriesUserPrompt = (companyInfo: string) => {
  const message: ChatCompletionRequestMessage = {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content: `COMPANY INFORMATION:\n\n${companyInfo}\n\n\nReturn a JSON list of the impact categories related to the company. The list of impact categories should include impact categories that are logically implied by the project, but not directly stated.`,
  };

  return message;
};

export default impactCategoriesUserPrompt;
