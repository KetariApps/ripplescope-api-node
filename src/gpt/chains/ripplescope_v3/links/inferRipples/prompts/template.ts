import OpenAI from 'openai';
import { GPT_RipplesResponse } from '../../../types.js';

const responseObject: GPT_RipplesResponse = {
  ripples: [
    {
      name: 'The name of the ripple.',
      brief: 'A short summary of the ripple.',
      description:
        "A longer description of the ripple and how the organization's operations caused it on the Scope.",
      edge: {
        magnitude:
          'A number from zero to one which represents the intensity of this ripple within this scope',
        aspect:
          'A short summary of the operation, project, or initiative of the organization which is related to this scope.',
        reason:
          'The reason the aspect of the organization is related to this scope.',
        sentiment:
          '"POSITIVE" if the Ripple is beneficial to the scope or "NEGATIVE" if the ripple is detrimental to the scope.',
      },
    },
  ],
};
const template: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: 'assistant',
  content: `Answer as a JSON object in the following format:\n\n${JSON.stringify(
    responseObject,
    undefined,
    2,
  )}`,
};
export default template;
