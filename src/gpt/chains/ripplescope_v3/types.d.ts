import {
  Consideration,
  Project,
  Ripple,
  Scope,
} from '../../../../../__generated__/graphql.js';

export type RecentlyCreatedProject = {
  __typename?: 'Project' | undefined;
  id: string;
  name: string;
  considerations: {
    __typename?: 'Consideration' | undefined;
    id: string;
    name?: string | null | undefined;
    details: string;
  }[];
};
export type NewConsideration = Pick<Consideration, 'id' | 'name' | 'details'>;

export type NewProjectInput = Pick<Project, 'name' | 'website'> & {
  considerations: Array<{ node: NewConsideration }>;
};

export type GPT_Ripple = Pick<Ripple, 'name' | 'description'> & {
  edge: { magnitude: string; aspect: string; reason: string };
};
export interface GPT_RipplesResponse {
  ripples: Array<GPT_Ripple>;
}

export type GPT_Scope = Pick<Scope, 'name' | 'description'> & {
  edge: { aspect: string; reason: string };
};
export interface GPT_ScopesResponse {
  scopes: Array<GPT_Scope>;
}
