import OpenAI from 'openai';
import {
  stringifyOrganization,
  stringifyScopeEdge,
} from '../../../util/index.js';
import { ConnectedScopeEdge, OrganizationWithScopes } from '../../../types.js';

export default function initializer(
  organization: OrganizationWithScopes,
  scopeEdges: ConnectedScopeEdge[],
): OpenAI.Chat.CreateChatCompletionRequestMessage[] {
  const organizationMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyOrganization(organization),
  };
  const scopeMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: scopeEdges.map((edge) => stringifyScopeEdge(edge)).join('\n\n'),
  };
  const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content: `Describe ${organization.name}.`,
  };
  return [userMessage, organizationMessage, scopeMessage];
}
