/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nfragment ImpactAreaDetails on ImpactArea {\n  name\n  description\n  questions\n  context\n}\n": types.ImpactAreaDetailsFragmentDoc,
    "\nfragment LocationDetails on Location {\n    city\n    nation\n    state\n}\n": types.LocationDetailsFragmentDoc,
    "\nfragment ProjectDetails on Project {\n  name\n  employees\n  problem\n  solution\n  context\n}\n": types.ProjectDetailsFragmentDoc,
    "\n  mutation CreateImpactCategories($input: [ImpactCategoryCreateInput!]!) {\n    createImpactCategories(input: $input) {\n      impactCategories {\n        uniqueName\n        name\n        doughnutCategory {\n          uniqueName\n          name\n        }\n      }\n    }\n  }\n": types.CreateImpactCategoriesDocument,
    "\n  mutation CreateProject($input: [ProjectCreateInput!]!) {\n    createProjects(input: $input) {\n      projects {\n        locations {\n          uniqueName\n        }\n        name\n        uniqueName\n        solution\n        problem\n      }\n    }\n  }\n": types.CreateProjectDocument,
    "\n      mutation UpdateProjectImpactAreas($where: ProjectWhere, $connectOrCreate: ProjectConnectOrCreateInput) {\n        updateProjects(where: $where, connectOrCreate: $connectOrCreate) {\n          projects {\n            uniqueName\n          }\n        }\n      }\n": types.UpdateProjectImpactAreasDocument,
    "\nquery GetImpactAreas($where: ImpactAreaWhere, $includeDetails: Boolean!) {\n    impactAreas(where: $where) {\n      uniqueName\n      ...ImpactAreaDetails @include (if: $includeDetails)\n    }\n  }\n": types.GetImpactAreasDocument,
    "\nquery GetProjects($where: ProjectWhere, $impactWhere: ImpactWhere, $includeLocations: Boolean!, $includeImpacts: Boolean!) {\n  projects(where: $where) {\n    uniqueName\n    name\n    employees\n    problem\n    solution\n    context\n    locations @include(if: $includeLocations) {\n      uniqueName\n      ...LocationDetails\n    }\n    impacts(where: $impactWhere) @include(if: $includeImpacts) {\n      verified\n      uniqueName\n      impactableConnection {\n        edges {\n          score\n          reason\n          aspect\n          node {\n            ... on Impact {\n              uniqueName\n              verified\n            }\n            ... on ImpactArea {\n              uniqueName\n              verified\n            }\n          }\n        }\n      }\n    }\n  }\n}\n": types.GetProjectsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment ImpactAreaDetails on ImpactArea {\n  name\n  description\n  questions\n  context\n}\n"): (typeof documents)["\nfragment ImpactAreaDetails on ImpactArea {\n  name\n  description\n  questions\n  context\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment LocationDetails on Location {\n    city\n    nation\n    state\n}\n"): (typeof documents)["\nfragment LocationDetails on Location {\n    city\n    nation\n    state\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment ProjectDetails on Project {\n  name\n  employees\n  problem\n  solution\n  context\n}\n"): (typeof documents)["\nfragment ProjectDetails on Project {\n  name\n  employees\n  problem\n  solution\n  context\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateImpactCategories($input: [ImpactCategoryCreateInput!]!) {\n    createImpactCategories(input: $input) {\n      impactCategories {\n        uniqueName\n        name\n        doughnutCategory {\n          uniqueName\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateImpactCategories($input: [ImpactCategoryCreateInput!]!) {\n    createImpactCategories(input: $input) {\n      impactCategories {\n        uniqueName\n        name\n        doughnutCategory {\n          uniqueName\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateProject($input: [ProjectCreateInput!]!) {\n    createProjects(input: $input) {\n      projects {\n        locations {\n          uniqueName\n        }\n        name\n        uniqueName\n        solution\n        problem\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateProject($input: [ProjectCreateInput!]!) {\n    createProjects(input: $input) {\n      projects {\n        locations {\n          uniqueName\n        }\n        name\n        uniqueName\n        solution\n        problem\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation UpdateProjectImpactAreas($where: ProjectWhere, $connectOrCreate: ProjectConnectOrCreateInput) {\n        updateProjects(where: $where, connectOrCreate: $connectOrCreate) {\n          projects {\n            uniqueName\n          }\n        }\n      }\n"): (typeof documents)["\n      mutation UpdateProjectImpactAreas($where: ProjectWhere, $connectOrCreate: ProjectConnectOrCreateInput) {\n        updateProjects(where: $where, connectOrCreate: $connectOrCreate) {\n          projects {\n            uniqueName\n          }\n        }\n      }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetImpactAreas($where: ImpactAreaWhere, $includeDetails: Boolean!) {\n    impactAreas(where: $where) {\n      uniqueName\n      ...ImpactAreaDetails @include (if: $includeDetails)\n    }\n  }\n"): (typeof documents)["\nquery GetImpactAreas($where: ImpactAreaWhere, $includeDetails: Boolean!) {\n    impactAreas(where: $where) {\n      uniqueName\n      ...ImpactAreaDetails @include (if: $includeDetails)\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetProjects($where: ProjectWhere, $impactWhere: ImpactWhere, $includeLocations: Boolean!, $includeImpacts: Boolean!) {\n  projects(where: $where) {\n    uniqueName\n    name\n    employees\n    problem\n    solution\n    context\n    locations @include(if: $includeLocations) {\n      uniqueName\n      ...LocationDetails\n    }\n    impacts(where: $impactWhere) @include(if: $includeImpacts) {\n      verified\n      uniqueName\n      impactableConnection {\n        edges {\n          score\n          reason\n          aspect\n          node {\n            ... on Impact {\n              uniqueName\n              verified\n            }\n            ... on ImpactArea {\n              uniqueName\n              verified\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetProjects($where: ProjectWhere, $impactWhere: ImpactWhere, $includeLocations: Boolean!, $includeImpacts: Boolean!) {\n  projects(where: $where) {\n    uniqueName\n    name\n    employees\n    problem\n    solution\n    context\n    locations @include(if: $includeLocations) {\n      uniqueName\n      ...LocationDetails\n    }\n    impacts(where: $impactWhere) @include(if: $includeImpacts) {\n      verified\n      uniqueName\n      impactableConnection {\n        edges {\n          score\n          reason\n          aspect\n          node {\n            ... on Impact {\n              uniqueName\n              verified\n            }\n            ... on ImpactArea {\n              uniqueName\n              verified\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;