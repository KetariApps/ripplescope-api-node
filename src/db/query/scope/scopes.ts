import { gql } from '../../../__generated__/gql.js';

export const scopes = gql(`
query Scopes($where: ScopeWhere) {
    scopes(where: $where) {
      name
      brief
      basis
    }
  }
`);
