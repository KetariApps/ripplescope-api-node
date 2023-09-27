import { stringifyOrganization } from '../../../util/index.js';
import { OrganizationWithScopes } from '../../../types.js';
import OpenAI from 'openai';

export default function initializer(
  organization: OrganizationWithScopes,
): OpenAI.Chat.CreateChatCompletionRequestMessage[] {
  const organizationMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyOrganization(organization),
  };
  const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content: `Summarize ${organization.name} from the given information.`,
  };
  return [userMessage, organizationMessage];
}
