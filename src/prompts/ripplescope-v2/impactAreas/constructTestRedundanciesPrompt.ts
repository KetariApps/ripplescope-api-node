import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";

const constructTestRedundanciesPrompt = (
  existingImpacts: string,
  newImpact: string
): ChatCompletionRequestMessage => ({
  role: ChatCompletionRequestMessageRoleEnum.User,
  content: `Existing Impacts:\n${existingImpacts}\n\nNew Impact:\n${newImpact}\n\n------\n\nreturn "TRUE" if the New Impact is saying something similar to any of the Existing Impacts, else return "FALSE"`,
});
export default constructTestRedundanciesPrompt;
