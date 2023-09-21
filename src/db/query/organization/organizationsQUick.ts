import { gql } from '../../../__generated__/gql.js';

const organizationsQuick = gql(`
query OrganizationsQuick($where: OrganizationWhere) {
    organizations(where: $where) {
      name
      id
      website
    }
  }
`);
export default organizationsQuick;
