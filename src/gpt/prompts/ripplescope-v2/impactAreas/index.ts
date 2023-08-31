import SocialFoundations from "./socialFoundations/index.js";
import EcologicalCeilings from "./ecologicalCeilings/index.js";
import userPromptResponseTemplate from "../../categorization/responseTemplate.js";
import userPrompt from "../../categorization/userPrompt.js";
import constructTestRedundanciesPrompt from "../../testRedundantImpactAreas/constructTestRedundanciesPrompt.js";

const ImpactAreas = {
  object: { ...EcologicalCeilings, ...SocialFoundations },
  userPrompt: userPrompt,
  userPromptResponseTemplate: userPromptResponseTemplate,
  constructTestRedundanciesPrompt: constructTestRedundanciesPrompt,
};
export default ImpactAreas;
