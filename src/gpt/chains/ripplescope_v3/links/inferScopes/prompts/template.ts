import OpenAI from 'openai';
import { GPT_ScopesResponse } from '../../../types.js';

const responseObject: GPT_ScopesResponse = {
  scopes: [
    {
      name: 'The name of the scope.',
      description: 'A description of the scope.',
      edge: {
        aspect:
          'The aspect of the organization which is related to this scope.',
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
