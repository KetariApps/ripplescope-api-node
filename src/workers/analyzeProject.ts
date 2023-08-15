import { Worker } from "worker_threads";
import {
  AnalysisRequest,
  CategorizationWorkerMessage,
  CategorizeImpactAreasWorkerData,
  WorkerMessageType,
} from "../types.js";

import { v4 as uuid } from "uuid";

export interface AnalyzeProjectProps {
  analysisRequest: AnalysisRequest;
}

const analyzeProject = (props: AnalyzeProjectProps) => {
  const { analysisRequest } = props;
  const processId = uuid();

  const categorizeImpactAreasWorkerData =
    analysisRequest as CategorizeImpactAreasWorkerData;
  const categorizeImpactAreasWorker = new Worker(
    "./build/workers/categorizeImpactAreas.js",
    {
      workerData: categorizeImpactAreasWorkerData,
    }
  );
  categorizeImpactAreasWorker.on("message", (message) =>
    handleCategorizationMessage(message, categorizeImpactAreasWorker, processId)
  );
  categorizeImpactAreasWorker.on("exit", () =>
    categorizeImpactAreasWorker.terminate()
  );
  categorizeImpactAreasWorker.on("error", () =>
    categorizeImpactAreasWorker.terminate()
  );

  return { processId, categorizationWorker: categorizeImpactAreasWorker };
};

export default analyzeProject;

const handleCategorizationMessage = (
  message: CategorizationWorkerMessage,
  worker: Worker,
  id: string
) => {
  switch (message.type) {
    case WorkerMessageType.DONE:
      worker.terminate();
      break;

    case WorkerMessageType.ERROR:
      worker.terminate();
      break;

    default:
      // const { categories } = message;
      console.log(id, message);
      // spawn a new worker to analyze each category
      break;
  }
};
