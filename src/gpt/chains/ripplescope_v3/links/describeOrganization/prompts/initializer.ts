import OpenAI from 'openai';
import { stringifyOrganization } from '../../../util/index.js';
import { ConnectedScopeEdge, OrganizationWithScopes } from '../../../types.js';

export default function initializer(
  organization: OrganizationWithScopes,
): OpenAI.Chat.CreateChatCompletionRequestMessage[] {
  const organizationMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyOrganization(organization),
  };
  const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content: `Describe ${organization.name}.`,
  };
  return [userMessage, organizationMessage];
}
