import { GraphQLClient } from 'graphql-request';
import { scopes } from '../../../../db/query/scope/scopes.js';
import OpenAI from 'openai';

export default async function getExistingScopes(
  client: GraphQLClient,
): Promise<OpenAI.Chat.CreateChatCompletionRequestMessage | null> {
  const scopesQuery = await client.request(scopes, {});
  if (scopesQuery.scopes.length === 0) {
    return null;
  }
  return {
    role: 'assistant',
    content: scopesQuery.scopes
      .map(({ name, brief }) => `${name}:\n${brief}`)
      .join('\n\n'),
  };
}
