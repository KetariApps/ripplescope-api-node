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
  "IMPACT_AREA_ANALYSIS" = "areaAnalysis",
}
export type WorkerTuple = [Worker, WorkerRole];
export type WorkerMap = Map<string, WorkerTuple>;

export interface CategorizeImpactAreasWorkerData {
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
  impactAreas: ProjectCategorizationGPTResponse;
}

export type CategorizationWorkerMessage =
  | DoneMessage
  | ErrorMessage
  | CategorizationMessage;

export interface ImpactAreaAnalysisMessage {
  type: WorkerMessageType.IMPACT_AREA_ANALYSIS;
}

export type ImpactAreaAnalysisWorkerMessage =
  | DoneMessage
  | ErrorMessage
  | ImpactAreaAnalysisMessage;

export type WorkerMessage =
  | CategorizationWorkerMessage
  | ImpactAreaAnalysisWorkerMessage;

export interface AnalysisRequest {
  projectInfo: string;
}

export interface ImpactArea {
  dbName: string;
  name: string;
  description: string;
  stakeholders: string;
  questions: string;
  context: string;
  initiatives: string;
}

export interface ProjectCategorizationGPTResponseItem {
  name: string;
  aspect: string;
  reason: string;
}
export interface ProjectCategorizationGPTResponse {
  impactAreas: ProjectCategorizationGPTResponseItem[];
}
