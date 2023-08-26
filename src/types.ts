import {
  DoughnutCategoryName,
  Impact,
  ImpactCategoryName,
  Location,
} from "./__generated__/graphql.js";


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
}
export interface ProjectCategorizationGPTResponse {
  impactAreas: ProjectCategorizationGPTResponseItem[];
}
export interface ProjectAnalysisGPTResponse {
  project: {
      benefits: Impact[];
      hazards: Impact[];
  };
}
export interface CategorizationRequestProject {
  name: string;
  locations: Location[];
  problem: string;
  solution: string;
  context: string;
  employees?: number;
}

