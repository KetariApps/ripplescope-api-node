import { gql } from '../../../__generated__/gql.js';

export const createScopes = gql(`
mutation CreateScopes($input: [ScopeCreateInput!]!) {
    createScopes(input: $input) {
      scopes {
        id
        name
        description
        basis
      }
    }
  }
`);
