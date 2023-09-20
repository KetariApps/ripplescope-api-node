import OpenAI from 'openai';
import { stringifyProject, stringifyScopeEdge } from '../../../util/index.js';
import { ConnectedScopeEdge, ProjectWithScopes } from '../../../types.js';

export default function initializer(
  project: ProjectWithScopes,
  scopeEdge: ConnectedScopeEdge,
): OpenAI.Chat.CreateChatCompletionRequestMessage[] {
  const projectMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyProject(project),
  };
  const scopeMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyScopeEdge(scopeEdge),
  };
  const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content: `Infer the Ripples of this Project within this Scope.`,
  };
  return [userMessage, projectMessage, scopeMessage];
}
