import OpenAI from 'openai';
import { ProjectCategorizationGPTResponse } from '../../../../types.js';

const returnObject: ProjectCategorizationGPTResponse = {
  impactAreas: [
    {
      name: 'The impact area name from the list of impact areas.',
      description:
        'A brief description of the relationship between the project and this impact area.',
    },
  ],
};
const responseTemplate: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: 'assistant',
  content:
    'The JSON object should match this template:\n\n' +
    JSON.stringify(returnObject),
};

export default responseTemplate;
