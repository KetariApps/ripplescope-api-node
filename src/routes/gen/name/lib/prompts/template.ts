import OpenAI from 'openai';
import { GPT_NameResponse } from '../../../../../gpt/chains/ripplescope_v3/types.js';

const responseObject: GPT_NameResponse = {
  name: 'A one or two word name',
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
