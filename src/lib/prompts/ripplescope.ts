import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";
import { impactCategories } from "./impactCategories.js";
import { terminologyDefinitions } from "./terminologyDefinitions.js";
import { responseTemplate } from "./responseTemplate.js";
import { relationshipMap } from "./relationshipMap.js";

export const ripplescope: ChatCompletionRequestMessage[] = [
  impactCategories,
  terminologyDefinitions,
  responseTemplate,
  relationshipMap,
];

export const buildPrompt = (projectPlan: string) => {
  const prompt = `PROJECT\n${projectPlan}\n\n---\n\nUsing the provided impact categories, report any direct or indirect impact within all categories where the project has any impact.`;

  return {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content: prompt,
  };
};
