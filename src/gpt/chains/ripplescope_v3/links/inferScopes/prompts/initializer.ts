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
  
    Return any Scopes in which this Organization's operations causes either positive or negative Ripples, either by the primary operations or secondary effects of the Organization's operations. Use the provided scopes when applicable.
  `,
});
export default initializer;
