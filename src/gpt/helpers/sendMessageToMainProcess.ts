import { parentPort } from "worker_threads";
import { WorkerMessage } from "../../types.js";
const sendMessageToMainProcess = (message: WorkerMessage) => {
  if (parentPort) {
    parentPort.postMessage(message);
  } else {
    // `parentPort` is null, handle this case accordingly
    console.error("parentPort is not available");
  }
};

export default sendMessageToMainProcess;
