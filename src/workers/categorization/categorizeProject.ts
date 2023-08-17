import { Worker } from "worker_threads";
import {
  AnalysisRequest,
  CategorizationMessage,
  CategorizationWorkerMessage,
  WorkerMessageType,
} from "../../types.js";

export interface CategorizationMessageHandlerProps {
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

  const categorizeImpactAreasWorkerData = analysisRequest as AnalysisRequest;
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
};

export default categorizeProject;
