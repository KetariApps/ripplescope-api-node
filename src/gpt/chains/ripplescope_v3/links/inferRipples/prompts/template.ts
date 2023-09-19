import OpenAI from 'openai';
import { GPT_RipplesResponse } from '../../types.js';

const responseObject: GPT_RipplesResponse = {
  ripples: [
    {
      name: 'The name of the ripple.',
      description: 'A description of the ripple.',
      edge: {
        magnitude:
          'a number from zero and one which represents the intensity of this ripple within this scope',
        aspect: 'The aspect of the project which is related to this scope.',
        reason:
          'The reason the aspect of the project is related to this scope.',
      },
    },
  ],
};
const template: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: 'assistant',
  content: JSON.stringify(responseObject, undefined, 2),
};
export default template;