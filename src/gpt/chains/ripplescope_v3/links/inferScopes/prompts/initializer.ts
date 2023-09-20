import OpenAI from 'openai';
import stringifyOrganization from '../../../util/stringifyOrganization.js';
import { RecentlyCreatedOrganization } from '../../../types.js';

const initializer = (
  organization: RecentlyCreatedOrganization,
): OpenAI.Chat.CreateChatCompletionRequestMessage => ({
  role: 'user',
  content: `${organization.name}
  
  ${stringifyOrganization(organization)}
  
    -------
  
    Classify this organization to one or more of the provided scopes. Suggest a new scope if it would be completely unique or it refines an existing scope by making it more specific.
  `,
});
export default initializer;
