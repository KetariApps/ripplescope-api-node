import OpenAI from 'openai';
import { stringifyProject, stringifyScope } from '../../../util/index.js';
import { GPT_Scope, RecentlyCreatedProject } from '../../types.js';

export default function initializer(
  project: RecentlyCreatedProject,
  scope: GPT_Scope,
): OpenAI.Chat.CreateChatCompletionRequestMessage[] {
  const projectMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyProject(project),
  };
  const scopeMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: stringifyScope(scope),
  };
  const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content: `Infer the Ripples of this Project within this Scope.`,
  };
  return [userMessage, projectMessage, scopeMessage];
}
