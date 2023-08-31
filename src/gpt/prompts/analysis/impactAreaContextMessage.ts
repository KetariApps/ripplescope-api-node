import OpenAI from "openai";
import { ImpactAreaDetailsFragment } from "../../../__generated__/graphql.js";

const impactAreaContextMessage = (
  impactArea: ImpactAreaDetailsFragment
): OpenAI.Chat.ChatCompletionMessage => {
  const { name, description, context, questions } = impactArea;
  return {
    role: "assistant",
    content: `IMPACT AREA:\n${name}\n${description}\n${context}\n${questions}`,
  };
};
export default impactAreaContextMessage;
