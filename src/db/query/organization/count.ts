import { gql } from '../../../__generated__/gql.js';

export const countOrganizations = gql(`
query CountOrganizations($where: OrganizationWhere) {
    organizationsAggregate(where: $where) {
      count
    }
  }
`);
