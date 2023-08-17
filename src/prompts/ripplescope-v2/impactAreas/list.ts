import { ChatCompletionRequestMessageRoleEnum } from "openai";
import SocialFoundations from "./socialFoundations/index.js";
import EcologicalCeilings from "./ecologicalCeilings/index.js";

const list = () => {
  const impactAreasString = Object.values({
    ...SocialFoundations,
    ...EcologicalCeilings,
  })
    .map((impactArea) => `"${impactArea.name}": ${impactArea.description}`)
    .join("\n");

  return {
    role: ChatCompletionRequestMessageRoleEnum.Assistant,
    content: `IMPACT AREAS:\n\n${impactAreasString}`,
  };
};

export default list;
