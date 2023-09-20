import {
  Project,
  Ripple,
  Scope,
} from '../../../../../__generated__/graphql.js';
import { RippleScopesConnection } from '../../../__generated__/graphql.ts';
import { connectScopes, createProject } from './links/index.ts';

export type RecentlyCreatedProject = Awaited<ReturnType<typeof createProject>>;
export type ProjectWithScopes = Awaited<ReturnType<typeof connectScopes>>;
export type ConnectedScopeEdge =
  ProjectWithScopes['scopesConnection']['edges'][0];

export type GPT_Ripple = Pick<Ripple, 'name' | 'description'> & {
  edge: {
    magnitude: string;
    aspect: string;
    reason: string;
    sentiment: string;
  };
};
export interface GPT_RipplesResponse {
  ripples: Array<GPT_Ripple>;
}

export type GPT_Scope = {
  name: string;
  description: string;
  edge: { aspect: string; reason: string };
};
export interface GPT_ScopesResponse {
  scopes: Array<GPT_Scope>;
}
