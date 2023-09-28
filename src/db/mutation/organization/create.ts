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
            __typename
            content
            id
          }
          ... on WebDump {
            __typename
            content
            id
          }
          ... on Geography {
            __typename
            brief
            description
            id
          }
          ... on Team {
            __typename
            brief
            description
            id
          }
        }
      }
    }
  }
`);
