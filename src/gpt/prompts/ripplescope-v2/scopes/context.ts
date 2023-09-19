import OpenAI from 'openai';
import { ImpactAreaDetailsFragment } from '../../../../__generated__/graphql.js';

const context = (impactAreas: ImpactAreaDetailsFragment[]) => {
  const impactAreasString = impactAreas
    .map((impactArea) => `"${impactArea.name}": ${impactArea.description}`)
    .join('\n');

  const message: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: 'assistant',
    content: `IMPACT AREAS:\n\n${impactAreasString}`,
  };
  return message;
};

export default context;
