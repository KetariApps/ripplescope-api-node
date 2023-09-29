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
    "\nmutation UpdateMiscs($where: MiscWhere, $update: MiscUpdateInput) {\n  updateMiscs(where: $where, update: $update) {\n    miscs {\n      name\n      id\n    }\n  }\n}\n": types.UpdateMiscsDocument,
    "\nmutation CreateOrganizations($input: [OrganizationCreateInput!]!) {\n    createOrganizations(input: $input) {\n      organizations {\n        id\n        name\n        brief\n        description\n        solutions {\n          id\n          brief\n          description\n          problems {\n            id\n            brief\n            description\n            stakeholders {\n              id\n              name\n              description\n            }\n          }\n        }\n        considerations {\n          ... on Misc {\n            __typename\n            content\n            id\n          }\n          ... on WebDump {\n            __typename\n            content\n            id\n          }\n          ... on Geography {\n            __typename\n            brief\n            description\n            id\n          }\n          ... on Team {\n            __typename\n            brief\n            description\n            id\n          }\n        }\n      }\n    }\n  }\n": types.CreateOrganizationsDocument,
    "\nmutation UpdateOrganizations(\n  $where: OrganizationWhere,\n  $connectOrCreate: OrganizationConnectOrCreateInput,\n  $create: OrganizationRelationInput,\n  $update: OrganizationUpdateInput\n  ) {\n  updateOrganizations(\n    where: $where,\n    create: $create,\n    connectOrCreate: $connectOrCreate,\n    update: $update\n    ) {\n    organizations {\n      id\n      name\n      brief\n      description\n      solutions {\n        id\n        brief\n        problems {\n          id\n          brief\n          stakeholders {\n            id\n            name\n          }\n        }\n      }\n      considerations {\n        ... on Misc {\n          content\n        }\n        ... on WebDump {\n          content\n        }\n        ... on Geography {\n          brief\n        }\n        ... on Team {\n          brief\n        }\n      }\n      statuses {\n        name\n      }\n      scopesConnection {\n        edges {\n          aspect\n          reason\n          node {\n            name\n            brief\n            basis\n            description\n            stakeholders {\n              name\n              brief\n              description\n            }\n            considerations {\n              ... on Question {\n                brief\n                description\n              }\n              ... on Example {\n                brief\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n": types.UpdateOrganizationsDocument,
    "\nmutation CreateScopes($input: [ScopeCreateInput!]!) {\n    createScopes(input: $input) {\n      scopes {\n        id\n        name\n        description\n        basis\n      }\n    }\n  }\n": types.CreateScopesDocument,
    "\nquery CountOrganizations($where: OrganizationWhere) {\n    organizationsAggregate(where: $where) {\n      count\n    }\n  }\n": types.CountOrganizationsDocument,
    "\nquery OrganizationsQuick($where: OrganizationWhere) {\n    organizations(where: $where) {\n      name\n      id\n      website\n    }\n  }\n": types.OrganizationsQuickDocument,
    "\nquery Scopes($where: ScopeWhere) {\n    scopes(where: $where) {\n      name\n      brief\n      basis\n    }\n  }\n": types.ScopesDocument,
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
export function gql(source: "\nmutation UpdateMiscs($where: MiscWhere, $update: MiscUpdateInput) {\n  updateMiscs(where: $where, update: $update) {\n    miscs {\n      name\n      id\n    }\n  }\n}\n"): (typeof documents)["\nmutation UpdateMiscs($where: MiscWhere, $update: MiscUpdateInput) {\n  updateMiscs(where: $where, update: $update) {\n    miscs {\n      name\n      id\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateOrganizations($input: [OrganizationCreateInput!]!) {\n    createOrganizations(input: $input) {\n      organizations {\n        id\n        name\n        brief\n        description\n        solutions {\n          id\n          brief\n          description\n          problems {\n            id\n            brief\n            description\n            stakeholders {\n              id\n              name\n              description\n            }\n          }\n        }\n        considerations {\n          ... on Misc {\n            __typename\n            content\n            id\n          }\n          ... on WebDump {\n            __typename\n            content\n            id\n          }\n          ... on Geography {\n            __typename\n            brief\n            description\n            id\n          }\n          ... on Team {\n            __typename\n            brief\n            description\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nmutation CreateOrganizations($input: [OrganizationCreateInput!]!) {\n    createOrganizations(input: $input) {\n      organizations {\n        id\n        name\n        brief\n        description\n        solutions {\n          id\n          brief\n          description\n          problems {\n            id\n            brief\n            description\n            stakeholders {\n              id\n              name\n              description\n            }\n          }\n        }\n        considerations {\n          ... on Misc {\n            __typename\n            content\n            id\n          }\n          ... on WebDump {\n            __typename\n            content\n            id\n          }\n          ... on Geography {\n            __typename\n            brief\n            description\n            id\n          }\n          ... on Team {\n            __typename\n            brief\n            description\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateOrganizations(\n  $where: OrganizationWhere,\n  $connectOrCreate: OrganizationConnectOrCreateInput,\n  $create: OrganizationRelationInput,\n  $update: OrganizationUpdateInput\n  ) {\n  updateOrganizations(\n    where: $where,\n    create: $create,\n    connectOrCreate: $connectOrCreate,\n    update: $update\n    ) {\n    organizations {\n      id\n      name\n      brief\n      description\n      solutions {\n        id\n        brief\n        problems {\n          id\n          brief\n          stakeholders {\n            id\n            name\n          }\n        }\n      }\n      considerations {\n        ... on Misc {\n          content\n        }\n        ... on WebDump {\n          content\n        }\n        ... on Geography {\n          brief\n        }\n        ... on Team {\n          brief\n        }\n      }\n      statuses {\n        name\n      }\n      scopesConnection {\n        edges {\n          aspect\n          reason\n          node {\n            name\n            brief\n            basis\n            description\n            stakeholders {\n              name\n              brief\n              description\n            }\n            considerations {\n              ... on Question {\n                brief\n                description\n              }\n              ... on Example {\n                brief\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nmutation UpdateOrganizations(\n  $where: OrganizationWhere,\n  $connectOrCreate: OrganizationConnectOrCreateInput,\n  $create: OrganizationRelationInput,\n  $update: OrganizationUpdateInput\n  ) {\n  updateOrganizations(\n    where: $where,\n    create: $create,\n    connectOrCreate: $connectOrCreate,\n    update: $update\n    ) {\n    organizations {\n      id\n      name\n      brief\n      description\n      solutions {\n        id\n        brief\n        problems {\n          id\n          brief\n          stakeholders {\n            id\n            name\n          }\n        }\n      }\n      considerations {\n        ... on Misc {\n          content\n        }\n        ... on WebDump {\n          content\n        }\n        ... on Geography {\n          brief\n        }\n        ... on Team {\n          brief\n        }\n      }\n      statuses {\n        name\n      }\n      scopesConnection {\n        edges {\n          aspect\n          reason\n          node {\n            name\n            brief\n            basis\n            description\n            stakeholders {\n              name\n              brief\n              description\n            }\n            considerations {\n              ... on Question {\n                brief\n                description\n              }\n              ... on Example {\n                brief\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateScopes($input: [ScopeCreateInput!]!) {\n    createScopes(input: $input) {\n      scopes {\n        id\n        name\n        description\n        basis\n      }\n    }\n  }\n"): (typeof documents)["\nmutation CreateScopes($input: [ScopeCreateInput!]!) {\n    createScopes(input: $input) {\n      scopes {\n        id\n        name\n        description\n        basis\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery CountOrganizations($where: OrganizationWhere) {\n    organizationsAggregate(where: $where) {\n      count\n    }\n  }\n"): (typeof documents)["\nquery CountOrganizations($where: OrganizationWhere) {\n    organizationsAggregate(where: $where) {\n      count\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery OrganizationsQuick($where: OrganizationWhere) {\n    organizations(where: $where) {\n      name\n      id\n      website\n    }\n  }\n"): (typeof documents)["\nquery OrganizationsQuick($where: OrganizationWhere) {\n    organizations(where: $where) {\n      name\n      id\n      website\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Scopes($where: ScopeWhere) {\n    scopes(where: $where) {\n      name\n      brief\n      basis\n    }\n  }\n"): (typeof documents)["\nquery Scopes($where: ScopeWhere) {\n    scopes(where: $where) {\n      name\n      brief\n      basis\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;