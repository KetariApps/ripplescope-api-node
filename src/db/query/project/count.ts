import { gql } from '../../../__generated__/gql.js';

export const countProjects = gql(`
query CountProjects($where: ProjectWhere) {
    projectsAggregate(where: $where) {
      count
    }
  }
`);
