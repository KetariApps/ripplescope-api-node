import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";

const categoryObject = {
  categories: [
    {
      name: "the impact category name from the list of impact categories",
      reason: "the reason this impact category is relevant to the project",
      aspect:
        "A breif description of the aspect of the project which led to the assertion of relevance",
    },
  ],
};
const impactCategoriesUserPromptResponseTemplate: ChatCompletionRequestMessage =
  {
    role: ChatCompletionRequestMessageRoleEnum.Assistant,
    content:
      "The JSON object should match this template:\n\n" +
      JSON.stringify(categoryObject),
  };
export default impactCategoriesUserPromptResponseTemplate;
