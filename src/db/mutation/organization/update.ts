import { gql } from '../../../__generated__/gql.js';

export const updateOrganizations = gql(`
mutation UpdateOrganizations(
  $where: OrganizationWhere,
  $connectOrCreate: OrganizationConnectOrCreateInput,
  $create: OrganizationRelationInput
  ) {
  updateOrganizations(
    where: $where,
    create: $create,
    connectOrCreate: $connectOrCreate
    ) {
    organizations {
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
        ... on Team {
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
