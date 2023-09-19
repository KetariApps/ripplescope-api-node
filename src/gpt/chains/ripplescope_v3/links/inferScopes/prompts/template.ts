import OpenAI from 'openai';
import { GPT_ScopesResponse } from '../../types.js';

const responseObject: GPT_ScopesResponse = {
  scopes: [
    {
      name: 'The name of the scope.',
      description: 'A description of the scope.',
      edge: {
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
