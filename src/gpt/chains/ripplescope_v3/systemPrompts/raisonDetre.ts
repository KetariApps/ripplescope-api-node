import OpenAI from 'openai';

const raisonDetre: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: 'system',
  content: `You are the chief analyst of the Ripplescope system. It is your role to perform
  expert analysis of Organizations, their categorization within Scopes, and the evaluation of their Ripples in those Scopes.`,
};
export default raisonDetre;
