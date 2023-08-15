import { Worker } from "worker_threads";
import { v4 as uuid } from "uuid";
import {
  AnalysisRequest,
  CategorizationMessage,
  CategorizationWorkerMessage,
  CategorizeImpactAreasWorkerData,
  WorkerMessageType,
} from "../../types.js";

export interface CategorizationMessageHandlerProps {
  processId: string;
  message: CategorizationMessage;
}
export interface CategorizeProjectProps {
  analysisRequest: AnalysisRequest;
  categorizationMessageHandler: (
    props: CategorizationMessageHandlerProps
  ) => any;
}

const categorizeProject = (props: CategorizeProjectProps) => {
  const { analysisRequest, categorizationMessageHandler } = props;
  const processId = uuid();

  const categorizeImpactAreasWorkerData =
    analysisRequest as CategorizeImpactAreasWorkerData;
  const categorizeImpactAreasWorker = new Worker(
    "./build/workers/categorization/worker.js",
    {
      workerData: categorizeImpactAreasWorkerData,
    }
  );
  categorizeImpactAreasWorker.on(
    "message",
    (message: CategorizationWorkerMessage) => {
      switch (message.type) {
        case WorkerMessageType.DONE:
          categorizeImpactAreasWorker.terminate();
          break;

        case WorkerMessageType.ERROR:
          categorizeImpactAreasWorker.terminate();
          break;

        default:
          const payload: CategorizationMessageHandlerProps = {
            processId,
            message,
          };
          categorizationMessageHandler(payload);
          break;
      }
    }
  );
  categorizeImpactAreasWorker.on("exit", () =>
    categorizeImpactAreasWorker.terminate()
  );
  categorizeImpactAreasWorker.on("error", () =>
    categorizeImpactAreasWorker.terminate()
  );

  return { processId, categorizationWorker: categorizeImpactAreasWorker };
};

export default categorizeProject;
