import { gql } from '../../../../__generated__/gql.js';

export const updateMiscs = gql(`
mutation UpdateMiscs($where: MiscWhere, $update: MiscUpdateInput) {
  updateMiscs(where: $where, update: $update) {
    miscs {
      name
      id
    }
  }
}
`);
