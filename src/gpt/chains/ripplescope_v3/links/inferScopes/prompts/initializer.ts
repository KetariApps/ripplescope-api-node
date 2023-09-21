import OpenAI from 'openai';
import { RecentlyCreatedOrganization } from '../../../types.js';
import { stringifyOrganization } from '../../../util/index.js';

const initializer = (
  organization: RecentlyCreatedOrganization,
): OpenAI.Chat.CreateChatCompletionRequestMessage => ({
  role: 'user',
  content: `${organization.name}
  
  ${stringifyOrganization(organization)}
  
    -------
  
    Classify this organization to any of the provided scopes where its operations have any impact.
  `,
});
export default initializer;
