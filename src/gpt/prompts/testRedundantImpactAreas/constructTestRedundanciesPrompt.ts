import OpenAI from "openai";

const constructTestRedundanciesPrompt = (
  existingImpacts: string,
  newImpact: string
): OpenAI.Chat.CreateChatCompletionRequestMessage => ({
  role: "user",
  content: `Existing Impacts:\n${existingImpacts}\n\nNew Impact:\n${newImpact}\n\n------\n\nreturn "TRUE" if the New Impact is similar to any of the Existing Impacts, else return "FALSE"`,
});
export default constructTestRedundanciesPrompt;
