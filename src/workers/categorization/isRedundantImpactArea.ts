import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import ImpactAreas from "../../prompts/ripplescope-v2/impactAreas/index.js";

export default async function isRedundantImpactArea(
  existingImpacts: string,
  newImpact: string
) {
  //// env stuff
  dotenv.config();
  const { OPENAI_API_KEY } = process.env;
  //// openai stuff
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const messages: ChatCompletionRequestMessage[] = [
    ImpactAreas.constructTestRedundanciesPrompt(existingImpacts, newImpact),
  ];
  return openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    })
    .catch((error) => console.error(error))
    .then((response) => {
      if (response) {
        const isRedundant = response.data.choices[0].message?.content;
        if (isRedundant === undefined) return undefined;
        if (isRedundant.toLocaleUpperCase().includes("TRUE")) {
          return true;
        }
        if (isRedundant.toLocaleUpperCase().includes("FALSE")) {
          return false;
        }
      }
    });
}
