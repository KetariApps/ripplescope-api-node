import { workerData } from "worker_threads";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import sendMessageToMainProcess from "../helpers/sendMessageToMainProcess.js";
import { global } from "../../prompts/global.js";
import ImpactAreas from "../../prompts/ripplescope-v2/impactAreas/index.js";
import {
  CategorizationWorkerMessage,
  AnalysisRequest,
  ProjectCategorizationGPTResponse,
  WorkerMessageType,
} from "../../types.js";
import getJSONString from "../../helpers/getJSONString.js";

//// env stuff
dotenv.config();
const { OPENAI_API_KEY } = process.env;
//// openai stuff
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const { project }: AnalysisRequest = workerData;
const messages: ChatCompletionRequestMessage[] = [
  ...global,
  ImpactAreas.userPrompt(project),
  ImpactAreas.userPromptResponseTemplate,
  ImpactAreas.list,
];
let impactAreasGPTResponseString: string | undefined;
let impactAreaMatches: ProjectCategorizationGPTResponse | undefined;
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
        impactAreasGPTResponseString =
          response.data.choices[0].message?.content;
        impactAreaMatches = getJSONString(impactAreasGPTResponseString) as
          | ProjectCategorizationGPTResponse
          | undefined;

        if (impactAreaMatches === undefined) {
          responseMessage = {
            type: WorkerMessageType.ERROR,
          };
          sendMessageToMainProcess(responseMessage);
          return;
        } else {
          responseMessage = {
            type: WorkerMessageType.CATEGORIZATION,
            impactAreas: impactAreaMatches.impactAreas,
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
