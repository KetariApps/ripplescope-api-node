import { workerData } from "worker_threads";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import sendMessageToMainProcess from "./lib/sendMessageToMainProcess.js";
import { global } from "../lib/prompts/global.js";
import impactCategoriesList from "../lib/prompts/ripplescope-v2/categorizeImpactCategories/impactCategoriesList.js";
import impactCategoriesUserPromptResponseTemplate from "../lib/prompts/ripplescope-v2/categorizeImpactCategories/impactCategoriesReturnTemplate.js";
import impactCategoriesUserPrompt from "../lib/prompts/ripplescope-v2/categorizeImpactCategories/impactCategoriesUserPrompt.js";
import {
  CategorizationWorkerMessage,
  CategorizeImpactCategoriesWorkerData,
  WorkerMessageType,
} from "../types.js";

//// env stuff
dotenv.config();
const { OPENAI_API_KEY } = process.env;
//// openai stuff
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const { projectInfo }: CategorizeImpactCategoriesWorkerData = workerData;
const messages: ChatCompletionRequestMessage[] = [
  ...global,
  impactCategoriesUserPrompt(projectInfo),
  impactCategoriesUserPromptResponseTemplate,
  impactCategoriesList,
];
let categories: string | undefined;
let categoriesJSON: string;
let responseMessage: CategorizationWorkerMessage;

try {
  await openai
    .createChatCompletion({
      model: "gpt-4",
      messages,
      stream: false,
    })
    .catch((error) => console.error(error))

    .then((response) => {
      if (response) {
        categories = response.data.choices[0].message?.content;

        if (categories === undefined) {
          responseMessage = {
            type: WorkerMessageType.ERROR,
          };
          sendMessageToMainProcess(responseMessage);
          return;
        } else {
          responseMessage = {
            type: WorkerMessageType.CATEGORIZATION,
            categories,
          };
          sendMessageToMainProcess(responseMessage);
        }
      }
      // emit the done event

      responseMessage = {
        type: WorkerMessageType.DONE,
      };
      sendMessageToMainProcess(responseMessage);
    });
} catch (error) {
  // Handle API request errors
  console.error("An error occurred while categorizing the project");
  console.error(error);
}
