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
        ... on Stakeholder {
          name
          stakeholderBreif: brief
        }
        ... on WebDump {
          content
        }
        ... on Geographic {
          brief
        }
        ... on Workers {
          brief
        }
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
            brief
            basis
            description
            considerations {
              ... on Stakeholder {
                name
                brief
                description
              }
              ... on Question {
                brief
                description
              }
              ... on Example {
                brief
                description
              }
            }
          }
        }
      }
    }
  }
}
`);
