import OpenAI from 'openai';
import { RecentlyCreatedProject } from '../../../types.js';

const initializer = (
  project: RecentlyCreatedProject,
): OpenAI.Chat.CreateChatCompletionRequestMessage => ({
  role: 'user',
  content: `${project.name}
  
  ${project.considerations
    .map(({ details, name }) => `${name}\n${details}`)
    .join('\n\n')}
  
    -------
  
    Infer the scopes of this project. Use one of the existing scopes unless a new scope if it would be completely unique or it refines an existing scope by making it more specific.
  `,
});
export default initializer;
