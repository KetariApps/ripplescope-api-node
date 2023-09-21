import OpenAI from 'openai';
import { GPT_RipplesResponse } from '../../../types.js';

const responseObject: GPT_RipplesResponse = {
  ripples: [
    {
      name: 'The name of the ripple.',
      description: 'A description of the ripple.',
      edge: {
        magnitude:
          'a number from zero and one which represents the intensity of this ripple within this scope',
        aspect:
          'The aspect of the organization which is related to this scope.',
        reason:
          'The reason the aspect of the organization is related to this scope.',
        sentiment: 'Either POSITIVE or NEGATIVE',
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
