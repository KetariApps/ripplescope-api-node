import { gql } from '../../../__generated__/gql.js';

export const createOrganizations = gql(`
mutation CreateOrganizations($input: [OrganizationCreateInput!]!) {
    createOrganizations(input: $input) {
      organizations {
        id
        name
        brief
        description
        solutions {
          id
          brief
          description
          problems {
            id
            brief
            description
            stakeholders {
              id
              name
              description
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
          ... on Geography {
            brief
            description
          }
          ... on Team {
            brief
            description
          }
        }
      }
    }
  }
`);
