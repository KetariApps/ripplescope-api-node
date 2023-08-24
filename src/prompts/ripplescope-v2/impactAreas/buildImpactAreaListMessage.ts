import OpenAI from "openai";
import { GetImpactAreasQuery } from "../../../gql/graphql.js";

const buildImpactAreaListMessage = (
  getImpactAreasQuery: GetImpactAreasQuery
) => {
  const impactAreasString = getImpactAreasQuery.impactAreas
    .map((impactArea) => `"${impactArea.name}": ${impactArea.description}`)
    .join("\n");

  const message: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: "assistant",
    content: `IMPACT AREAS:\n\n${impactAreasString}`,
  };
  return message;
};

export default buildImpactAreaListMessage;
