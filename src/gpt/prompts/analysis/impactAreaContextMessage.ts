import OpenAI from "openai";
import { ImpactAreaDetailsFragment } from "../../../__generated__/graphql.js";

const impactAreaContextMessage = (
  projectImpactArea: ImpactAreaDetailsFragment
): OpenAI.Chat.ChatCompletionMessage => {
  return {
    role: "assistant",
    content: `IMPACT AREA:\n${projectImpactArea.name}\n${projectImpactArea.description}\n${projectImpactArea.context}\n${projectImpactArea.questions}`,
  };
};
export default impactAreaContextMessage;
