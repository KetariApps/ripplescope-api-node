import OpenAI from 'openai';
import { RecentlyCreatedOrganization } from '../../../types.js';
import { stringifyOrganization } from '../../../util/index.js';
import { ScopesQuery } from '../../../../../../__generated__/graphql.js';

const initializer = (
  organization: RecentlyCreatedOrganization,
  scopesQuery: ScopesQuery,
): OpenAI.Chat.CreateChatCompletionRequestMessage[] => {
  const organizationMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyOrganization(organization),
  };
  const scopesMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: scopesQuery.scopes
      .map(({ name, brief }) => `${name}:\n${brief}`)
      .join('\n\n'),
  };
  const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content: `From the provided details of this organization and the provided information about scopes, tag this Organization with 
    any of the provided scopes in which its operations causes either positive or negative Ripples, either as an obvious result of 
    the primary operations or a non-obvious result of some effect of the Organization's operations. Scoped may be non-obvious, but must always 
    be inferred from the provided information about the organization. If, and only if, no scopes exist to classify the Organization, 
    a new scope may be proposed, provided they compliment the existing list of scopes and meet the defined criteria for a Scope.`,
  };
  return [organizationMessage, scopesMessage, userMessage];
};
export default initializer;
