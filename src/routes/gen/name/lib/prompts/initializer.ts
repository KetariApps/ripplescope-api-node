import OpenAI from 'openai';
import { CreateOrganizationsMutation } from '../../../../../__generated__/graphql.js';
import stringifyConsideration from '../../../../../gpt/chains/naming/util/stringifyConsideration.js';

export default function initializer(
  consideration: CreateOrganizationsMutation['createOrganizations']['organizations'][0]['considerations'][0],
): OpenAI.Chat.CreateChatCompletionRequestMessage[] {
  const considerationMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyConsideration(consideration),
  };
  const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content: `Name this consideration in one or two words without using the word consideration.`,
  };
  return [considerationMessage, userMessage];
}
