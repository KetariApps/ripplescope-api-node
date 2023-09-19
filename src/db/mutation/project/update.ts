import { gql } from '../../../__generated__/gql.js';

export const updateProjects = gql(`
mutation UpdateProjects(
  $where: ProjectWhere,
  $connectOrCreate: ProjectConnectOrCreateInput,
  $create: ProjectRelationInput
  ) {
  updateProjects(
    where: $where,
    create: $create,
    connectOrCreate: $connectOrCreate
    ) {
    projects {
      id
      name
      considerations {
        id
        name
        details
      }
      statuses {
        name
      }
      scopesConnection {
        edges {
          aspect
          reason
          node {
            name
            description
            considerations {
              name
              details
            }
          }
        }
      }
    }
  }
}
`);
