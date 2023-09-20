import OpenAI from 'openai';
import {
  stringifyOrganization,
  stringifyScopeEdge,
} from '../../../util/index.js';
import { ConnectedScopeEdge, OrganizationWithScopes } from '../../../types.js';

export default function initializer(
  organization: OrganizationWithScopes,
  scopeEdge: ConnectedScopeEdge,
): OpenAI.Chat.CreateChatCompletionRequestMessage[] {
  const organizationMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyOrganization(organization),
  };
  const scopeMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyScopeEdge(scopeEdge),
  };
  const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content: `Infer the Ripples of this Organization within this Scope.`,
  };
  return [userMessage, organizationMessage, scopeMessage];
}
