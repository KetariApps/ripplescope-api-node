import OpenAI from 'openai';
import { GPT_DescriptionResponse } from '../../../types.js';

const responseObject: GPT_DescriptionResponse = {
  description: 'A wholistic description of the organization in paragraph form',
  brief: 'A short summary of the organization. No more than two sentences.',
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
