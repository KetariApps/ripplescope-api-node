import OpenAI from 'openai';
import stringifyProject from '../../../util/stringifyProject.js';
import { RecentlyCreatedProject } from '../../../types.js';

const initializer = (
  project: RecentlyCreatedProject,
): OpenAI.Chat.CreateChatCompletionRequestMessage => ({
  role: 'user',
  content: `${project.name}
  
  ${stringifyProject(project)}
  
    -------
  
    Classify this project to one or more of the provided scopes. Suggest a new scope if it would be completely unique or it refines an existing scope by making it more specific.
  `,
});
export default initializer;
