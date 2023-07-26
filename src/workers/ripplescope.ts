import { workerData, parentPort } from "worker_threads";
import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import * as dotenv from "dotenv";
import processUserMessage from "../lib/helpers/processUserMessage.js";
import parseGPTBuffer from "../lib/helpers/parseGPTBuffer.js";
import { buildPrompt, ripplescope } from "../lib/prompts/ripplescope.js";
import { global } from "../lib/prompts/global.js";

function postMessage(message: string) {
  if (parentPort) {
    parentPort.postMessage(message);
  } else {
    // `parentPort` is null, handle this case accordingly
    console.error("parentPort is not available");
  }
}

//// env stuff
dotenv.config();
const { OPENAI_API_KEY } = process.env;
//// openai stuff
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export interface RipplescopeWorkerData {
  streamId: string;
  content: string;
}

export interface Analysis {
  body: string;
}

// Retrieve the processId from workerData
const { streamId, content }: RipplescopeWorkerData = workerData;
const { processed: processedContent, tokens: tokenizedContent } =
  processUserMessage(content);

// build the gpt request
const messages: ChatCompletionRequestMessage[] = [
  ...global,
  ...ripplescope,
  buildPrompt(processedContent),
];

// get the response
try {
  await openai
    .createChatCompletion(
      {
        model: "gpt-4",
        messages,
        stream: true,
      },
      { responseType: "stream" }
    )

    .then((response) => {
      // Handle the response stream
      // @ts-expect-error
      response.data.on("data", (chunk: Buffer) => {
        try {
          // Process each chunk of data
          const data = parseGPTBuffer(chunk);
          if (data === undefined) return;
          if ("content" in data.choices[0].delta) {
            const messagePart = data.choices[0].delta.content;

            // send the completed suggestion back to the user

            const event = buildSSEEvent(messagePart);
            postMessage(JSON.stringify(event));
          }
        } catch (error) {
          console.error("Error processing the chunk:", error);
        }
      });

      // @ts-expect-error
      response.data.on("end", () => {
        // emit the done event
        postMessage("done");
      });

      // @ts-expect-error
      response.data.on("error", (error: Error) => {
        // Handle any stream errors
        postMessage("error");
      });
    });
} catch (error) {
  // Handle API request errors
  console.error("An error occurred during OpenAI request", error);
}

function buildSSEEvent(message: string) {
  // construct the event object
  const event = {
    type: "ripplescope",
    message,
  };
  return event;
}
