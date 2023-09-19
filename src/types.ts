import {
  DoughnutCategoryName,
  ImpactCategoryName,
  ProjectDetailsFragment,
} from './__generated__/graphql.js';

export type CategorizationRequestProject = ProjectDetailsFragment;
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
  description: string;
}
export interface ProjectCategorizationGPTResponse {
  impactAreas: ProjectCategorizationGPTResponseItem[];
}
export interface ProjectAnalysisGPTResponseItem {
  name: string;
  reason: string;
  aspect: string;
  score: string;
}
export interface ProjectAnalysisGPTResponse {
  project: {
    benefits: ProjectAnalysisGPTResponseItem[];
    hazards: ProjectAnalysisGPTResponseItem[];
  };
}
