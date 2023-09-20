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
      solutions {
        id
        brief
        problems {
          id
          brief
          stakeholders {
            id
            name
          }
        }
      }
      considerations {
        ... on Misc {
          content
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
            stakeholders {
              name
              brief
              description
            }
            considerations {
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
