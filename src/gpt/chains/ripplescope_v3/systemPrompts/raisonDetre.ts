import OpenAI from 'openai';

const raisonDetre: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: 'system',
  content: `Your task is to perform objective analysis of Organizations, their categorization within Scopes, and the 
  evaluation of their Ripples in those Scopes from the informationa presented to you about an Organization.

  There are several criteria for your evaluations, as follows:
  - Your reporting should be limited to the inferences that can be confidently made from the given information.
  - Your assessments should not include subjectivity.
  - Do not make up false information.
  - It is imperative that your responses are formatted at valid JSON objects.`,
};
export default raisonDetre;
