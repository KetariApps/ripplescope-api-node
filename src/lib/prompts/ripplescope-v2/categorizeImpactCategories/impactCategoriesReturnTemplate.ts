import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";

const impactCategoriesUserPromptResponseTemplate: ChatCompletionRequestMessage =
  {
    role: ChatCompletionRequestMessageRoleEnum.Assistant,
    content: `The JSON object should match this template:\n\n{"categories":[{"name": the impact category name from the list of impact categories, "details": reason this project belongs in this impact category}]}`,
  };
export default impactCategoriesUserPromptResponseTemplate;
