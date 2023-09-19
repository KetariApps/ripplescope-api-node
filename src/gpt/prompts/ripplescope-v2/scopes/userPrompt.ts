import OpenAI from 'openai';
import { ProjectDetailsFragment } from '../../../../__generated__/graphql.js';

const userPrompt = (project: ProjectDetailsFragment) => {
  const message: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'user',
    content:
      `COMPANY INFORMATION:\n\nName: ${project.name}\n\n\n` +
      'Using the provided IMPACT AREAS list, return a JSON list of impact areas where the project has a positive or negative impact.' +
      "A project's impact areas may be tangential to the core solution of the project." +
      'As an example of this type of relationship is a project that requires workers. That project has a tangential impact on the local economy, although economic stimulation may not be an expressed purpose of the project.',
  };

  return message;
};
export default userPrompt;
