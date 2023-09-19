import SocialFoundations from './socialFoundations/index.js';
import EcologicalCeilings from './ecologicalCeilings/index.js';
import userPromptResponseTemplate from './responseTemplate.js';
import constructTestRedundanciesPrompt from '../../testRedundantImpactAreas/constructTestRedundanciesPrompt.js';
import userPrompt from './userPrompt.js';
import context from './context.js';
import responseTemplate from './responseTemplate.js';

const Scopes = {
  object: { ...EcologicalCeilings, ...SocialFoundations },
  userPrompt: userPrompt,
  userPromptResponseTemplate: userPromptResponseTemplate,
  constructTestRedundanciesPrompt: constructTestRedundanciesPrompt,
  context: context,
  responseTemplate: responseTemplate,
};
export default Scopes;
