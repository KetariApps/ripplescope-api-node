import OpenAI from 'openai';
import { RecentlyCreatedProject } from '../../types.js';

const initializer = (
  project: RecentlyCreatedProject,
): OpenAI.Chat.CreateChatCompletionRequestMessage => ({
  role: 'user',
  content: `
  ${project.name}
  
  ${project.considerations
    .map(({ details, name }) => `${name}\n${details}`)
    .join('\n\n')}
  
    -------
  
    Infer the scopes of this project.
  `,
});
export default initializer;
