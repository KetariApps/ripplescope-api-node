import { Worker } from "worker_threads";
import {
  DoughnutCategoryName,
  ImpactCategoryName,
  NationCode,
} from "./__generated__/graphql.js";

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

export interface ErrorMessage {
  type: WorkerMessageType.ERROR;
  content: string;
}
export interface DoneMessage {
  type: WorkerMessageType.DONE;
}

export interface CategorizationMessage {
  type: WorkerMessageType.CATEGORIZATION;
  impactAreas: ProjectCategorizationGPTResponseItem[];
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

export interface CategorizationRequest {
  project: CategorizationRequestProject;
}

export interface ImpactArea {
  doughnutCategory: DoughnutCategoryName;
  impactAreaCategory: ImpactCategoryName;
  dbName: string;
  name: string;
  description: string;
  stakeholders: string;
  questions: string;
  context: string;
  initiatives: string;
  verified?: boolean;
}

export interface ProjectCategorizationGPTResponseItem {
  name: string;
  aspect: string;
  reason: string;
  impactScore: string;
}
export interface ProjectCategorizationGPTResponse {
  impactAreas: ProjectCategorizationGPTResponseItem[];
}

export interface ProjectAnalysisGPTResponse {
  project: {
    impactArea: {
      benefits: {
        description: string;
        aspect: string;
        reason: string;
        score: string;
      }[];
      hazards: {
        description: string;
        aspect: string;
        reason: string;
        score: string;
      }[];
    };
  };
}
export interface CategorizationRequestLocation {
  city: string;
  nation: NationCode;
  state?: string;
}
export interface CategorizationRequestProject {
  name: string;
  locations: CategorizationRequestLocation[];
  problem: string;
  solution: string;
  context: string;
  employees?: number;
}

export interface AddressesEdge {
  impactArea: string | null;
  aspect: string | null;
  reason: string | null;
}
export interface GetProjectResponse {
  project: string;
  impactAreas: AddressesEdge[];
}
