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
    "\nmutation CreateProjects($input: [ProjectCreateInput!]!) {\n    createProjects(input: $input) {\n      projects {\n        id\n        name\n        considerations {\n          ... on Stakeholder {\n            name\n            stakeholderBreif: brief\n          }\n          ... on WebDump {\n            content\n          }\n          ... on Geographic {\n            brief\n          }\n          ... on Workers {\n            brief\n          }\n        }\n      }\n    }\n  }\n": types.CreateProjectsDocument,
    "\nmutation UpdateProjects(\n  $where: ProjectWhere,\n  $connectOrCreate: ProjectConnectOrCreateInput,\n  $create: ProjectRelationInput\n  ) {\n  updateProjects(\n    where: $where,\n    create: $create,\n    connectOrCreate: $connectOrCreate\n    ) {\n    projects {\n      id\n      name\n      considerations {\n        ... on Stakeholder {\n          name\n          stakeholderBreif: brief\n        }\n        ... on WebDump {\n          content\n        }\n        ... on Geographic {\n          brief\n        }\n        ... on Workers {\n          brief\n        }\n      }\n      statuses {\n        name\n      }\n      scopesConnection {\n        edges {\n          aspect\n          reason\n          node {\n            name\n            description\n            considerations {\n              ... on Stakeholder {\n                name\n                brief\n              }\n              ... on Question {\n                id\n                brief\n              }\n              ... on Example {\n                id\n                brief\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n": types.UpdateProjectsDocument,
    "\nmutation CreateScopes($input: [ScopeCreateInput!]!) {\n    createScopes(input: $input) {\n      scopes {\n        id\n        name\n        description\n        basis\n      }\n    }\n  }\n": types.CreateScopesDocument,
    "\nquery CountProjects($where: ProjectWhere) {\n    projectsAggregate(where: $where) {\n      count\n    }\n  }\n": types.CountProjectsDocument,
    "\nquery Scopes($where: ScopeWhere) {\n    scopes(where: $where) {\n      id\n      name\n      description\n      verified\n    }\n  }\n": types.ScopesDocument,
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
export function gql(source: "\nmutation CreateProjects($input: [ProjectCreateInput!]!) {\n    createProjects(input: $input) {\n      projects {\n        id\n        name\n        considerations {\n          ... on Stakeholder {\n            name\n            stakeholderBreif: brief\n          }\n          ... on WebDump {\n            content\n          }\n          ... on Geographic {\n            brief\n          }\n          ... on Workers {\n            brief\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nmutation CreateProjects($input: [ProjectCreateInput!]!) {\n    createProjects(input: $input) {\n      projects {\n        id\n        name\n        considerations {\n          ... on Stakeholder {\n            name\n            stakeholderBreif: brief\n          }\n          ... on WebDump {\n            content\n          }\n          ... on Geographic {\n            brief\n          }\n          ... on Workers {\n            brief\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateProjects(\n  $where: ProjectWhere,\n  $connectOrCreate: ProjectConnectOrCreateInput,\n  $create: ProjectRelationInput\n  ) {\n  updateProjects(\n    where: $where,\n    create: $create,\n    connectOrCreate: $connectOrCreate\n    ) {\n    projects {\n      id\n      name\n      considerations {\n        ... on Stakeholder {\n          name\n          stakeholderBreif: brief\n        }\n        ... on WebDump {\n          content\n        }\n        ... on Geographic {\n          brief\n        }\n        ... on Workers {\n          brief\n        }\n      }\n      statuses {\n        name\n      }\n      scopesConnection {\n        edges {\n          aspect\n          reason\n          node {\n            name\n            description\n            considerations {\n              ... on Stakeholder {\n                name\n                brief\n              }\n              ... on Question {\n                id\n                brief\n              }\n              ... on Example {\n                id\n                brief\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nmutation UpdateProjects(\n  $where: ProjectWhere,\n  $connectOrCreate: ProjectConnectOrCreateInput,\n  $create: ProjectRelationInput\n  ) {\n  updateProjects(\n    where: $where,\n    create: $create,\n    connectOrCreate: $connectOrCreate\n    ) {\n    projects {\n      id\n      name\n      considerations {\n        ... on Stakeholder {\n          name\n          stakeholderBreif: brief\n        }\n        ... on WebDump {\n          content\n        }\n        ... on Geographic {\n          brief\n        }\n        ... on Workers {\n          brief\n        }\n      }\n      statuses {\n        name\n      }\n      scopesConnection {\n        edges {\n          aspect\n          reason\n          node {\n            name\n            description\n            considerations {\n              ... on Stakeholder {\n                name\n                brief\n              }\n              ... on Question {\n                id\n                brief\n              }\n              ... on Example {\n                id\n                brief\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateScopes($input: [ScopeCreateInput!]!) {\n    createScopes(input: $input) {\n      scopes {\n        id\n        name\n        description\n        basis\n      }\n    }\n  }\n"): (typeof documents)["\nmutation CreateScopes($input: [ScopeCreateInput!]!) {\n    createScopes(input: $input) {\n      scopes {\n        id\n        name\n        description\n        basis\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery CountProjects($where: ProjectWhere) {\n    projectsAggregate(where: $where) {\n      count\n    }\n  }\n"): (typeof documents)["\nquery CountProjects($where: ProjectWhere) {\n    projectsAggregate(where: $where) {\n      count\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Scopes($where: ScopeWhere) {\n    scopes(where: $where) {\n      id\n      name\n      description\n      verified\n    }\n  }\n"): (typeof documents)["\nquery Scopes($where: ScopeWhere) {\n    scopes(where: $where) {\n      id\n      name\n      description\n      verified\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;