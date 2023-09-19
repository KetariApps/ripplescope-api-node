import OpenAI from 'openai';

const scope = `Scope:
A scope is a categorization of Ripples a project may have. Scopes are inspired by
  both Doughnut Economics categories and the UN Sustainable Development Goals.
  With that in mind, scopes are specifically related to a project's potential for ethical and ecological impact.`;
const ripple = `Ripple:
A Ripple is a discrete impact a project has within a scope. A Ripple may be positive or negative.`;
const magnitude = `Magnitude:
Magnitude is the intensity of a ripple within its scope from zero to one (zero = no impact, one = massive impact)`;
const interference = `Interference:
  Interference is the effect of the interaction of two Ripples, inspired by wave interference.`;
const synergy = `Synergy:
Synergy is the phenomenon of the interaction of multiple Ripples increasing the magnitude of
  one or more of the Ripples in the set. The direction of magnitude may be positive or negative.
  Therefore, Synergy may result in compounding risk, or compounding benefit.`;
const destructiveInterference = `Destructive Interference: 
  Destructive Interference is the phenomenon of the interaction of multiple Ripples reducing
  the magnitude of one or more of the component Ripples. The direction of magnitude may be positive or negative.
  Therefore, Destructive Interference may result in mitigation of risk (perhaps even eliminating risk entirely)
  or reduction of benefit (perhaps even eliminating benefit entirely).`;
const ripplescope = `Ripplescope:
Ripplescope is a system that assesses the overall impact of a project on the world,
  including that project's interference with other projects via its Ripples.`;

const definitions: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: 'system',
  content: [
    scope,
    ripple,
    magnitude,
    interference,
    synergy,
    destructiveInterference,
    ripplescope,
  ].join('\n\n\n'),
};
export default definitions;
