import SocialFoundations from "./socialFoundations/index.js";
import EcologicalCeilings from "./ecologicalCeilings/index.js";
import userPromptResponseTemplate from "./responseTemplate.js";
import userPrompt from "./userPrompt.js";
import constructTestRedundanciesPrompt from "./constructTestRedundanciesPrompt.js";

const ImpactAreas = {
  object: { ...EcologicalCeilings, ...SocialFoundations },
  userPrompt: userPrompt,
  userPromptResponseTemplate: userPromptResponseTemplate,
  constructTestRedundanciesPrompt: constructTestRedundanciesPrompt,
};
export default ImpactAreas;
