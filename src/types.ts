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

export interface ErrorMessage {
  type: WorkerMessageType.ERROR;
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

export interface AnalysisRequest {
  project: Project;
}

export enum DoughnutCategory {
  "ECOLOGICAL" = "ECOLOGICAL",
  "SOCIAL" = "SOCIAL",
}
export enum ImpactAreaCategory {
  "ATMOSPHERE" = "Atmosphere",
  "CHEMICAL_WASTE_AND_SUPPLY_CHAINS" = "ChemicalWasteAndSupplyChains",
  "ENVIRONMENTAL_PRESERVATION" = "EnvironmentalPreservation",
  "BASIC_SERVICES" = "BasicServices",
  "SOCIAL_OPPORTUNITIES" = "SocialOpportunities",
  "SOCIAL_RIGHTS" = "SocialRights",
}
export interface ImpactArea {
  doughnutCategory: DoughnutCategory;
  impactAreaCategory: ImpactAreaCategory;
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
export interface Project {
  name: string;
  uniqueName?: string;
  nations: string[];
  problem: string;
  solution: string;
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

export interface ProjectToImpactAreaConnectionMutationVariables {
  project_uniqueName: string;
  impactArea_doughnutCategory?: DoughnutCategory | string;
  impactArea_impactAreaCategory?: ImpactAreaCategory | string;
  impactArea_uniqueName?: string;
  impactArea_name?: string;
  impactArea_description?: string;
  // impactArea_stakeholders: string ;
  impactArea_questions?: string;
  impactArea_context?: string;
  // impactArea_initiatives: string ;
  impactArea_verified: boolean;
  edge_aspect: string;
  edge_reason: string;
  edge_score: number;
}
