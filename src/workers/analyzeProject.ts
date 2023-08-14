import { Worker } from "worker_threads";
import {
  AnalysisRequest,
  CategorizationWorkerMessage,
  CategorizeImpactCategoriesWorkerData,
  WorkerMessageType,
} from "../types.js";

import { v4 as uuid } from "uuid";

export interface AnalyzeProjectProps {
  analysisRequest: AnalysisRequest;
}

const analyzeProject = (props: AnalyzeProjectProps) => {
  const { analysisRequest } = props;
  const processId = uuid();

  const categorizeImpactCategoriesWorkerData =
    analysisRequest as CategorizeImpactCategoriesWorkerData;
  const categorizeImpactCategoriesWorker = new Worker(
    "./build/workers/categorizeImpactCategories.js",
    {
      workerData: categorizeImpactCategoriesWorkerData,
    }
  );
  categorizeImpactCategoriesWorker.on("message", (message) =>
    handleCategorizationMessage(
      message,
      categorizeImpactCategoriesWorker,
      processId
    )
  );
  categorizeImpactCategoriesWorker.on("exit", () =>
    categorizeImpactCategoriesWorker.terminate()
  );
  categorizeImpactCategoriesWorker.on("error", () =>
    categorizeImpactCategoriesWorker.terminate()
  );

  return { processId, categorizationWorker: categorizeImpactCategoriesWorker };
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
