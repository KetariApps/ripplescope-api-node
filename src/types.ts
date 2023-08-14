import { Worker } from "worker_threads";

export enum WorkerRole {
  "CATEGORIZATION" = "Categorization",
  "ANALYSIS" = "Analysis",
}

export enum RipplescopeProcessStatus {
  "ERROR" = "error",
  "DONE" = "done",
  "CATEGORIZATION" = "categorization",
  "ANALYZED_ALL" = "analyzedAll",
}
export enum WorkerMessageType {
  "ERROR" = "error",
  "DONE" = "done",
  "CATEGORIZATION" = "categorization",
  "CATEGORY_ANALYSIS" = "categoryAnalysis",
}
export type WorkerTuple = [Worker, WorkerRole];
export type WorkerMap = Map<string, WorkerTuple>;

export interface CategorizeImpactCategoriesWorkerData {
  projectInfo: string;
}

export interface ErrorMessage {
  type: WorkerMessageType.ERROR;
}
export interface DoneMessage {
  type: WorkerMessageType.DONE;
}

export interface CategorizationMessage {
  type: WorkerMessageType.CATEGORIZATION;
  categories: string;
}

export type CategorizationWorkerMessage =
  | DoneMessage
  | ErrorMessage
  | CategorizationMessage;

export interface CategoryAnalysisMessage {
  type: WorkerMessageType.CATEGORY_ANALYSIS;
}

export type CategoryAnalysisWorkerMessage =
  | DoneMessage
  | ErrorMessage
  | CategoryAnalysisMessage;

export type WorkerMessage =
  | CategorizationWorkerMessage
  | CategoryAnalysisWorkerMessage;

export interface AnalysisRequest {
  projectInfo: string;
}
