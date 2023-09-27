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
    content: `Infer any positive or negative Ripples caused by the operations of ${
      organization.name
    } within the scope of ${scopeEdge.node.name.toLocaleLowerCase()}.`,
  };
  return [userMessage, organizationMessage, scopeMessage];
}
