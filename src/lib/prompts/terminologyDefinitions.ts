import { ChatCompletionRequestMessageRoleEnum } from "openai";

export const terminologyDefinitions = {
  role: ChatCompletionRequestMessageRoleEnum.Assistant,
  content: `A co-benefit is an aspect of the project that would have a positive impact, which is not known of or described by the stated mission of the project.\n\nA co-hazard is an aspect of the project that would have a negative impact, which is not known of or described by the stated mission of the project.`,
};
