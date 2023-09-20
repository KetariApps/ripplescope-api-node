import { gql } from '../../../__generated__/gql.js';

export const createOrganizations = gql(`
mutation CreateOrganizations($input: [OrganizationCreateInput!]!) {
    createOrganizations(input: $input) {
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
      }
    }
  }
`);
