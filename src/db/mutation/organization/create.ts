import { gql } from '../../../__generated__/gql.js';

export const createOrganizations = gql(`
mutation CreateOrganizations($input: [OrganizationCreateInput!]!) {
    createOrganizations(input: $input) {
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
      }
    }
  }
`);
