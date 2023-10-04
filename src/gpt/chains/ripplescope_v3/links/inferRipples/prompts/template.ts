import OpenAI from 'openai';
import { GPT_RipplesResponse } from '../../../types.js';

const responseObject: GPT_RipplesResponse = {
  ripples: [
    {
      name: 'A sentiment-neutral name for the ripple in three words or less.',
      brief: 'A short summary of the ripple.',
      description:
        "A longer description of the ripple and how the organization's operations caused it on the Scope.",
      edge: {
        aspect:
          'A short summary of the operation, project, or initiative of the organization which is related to this scope.',
        reason:
          'The reason the aspect of the organization is related to this scope.',
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
