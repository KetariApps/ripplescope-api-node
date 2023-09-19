import { gql } from '../../../__generated__/gql.js';

export const createProjects = gql(`
mutation CreateProjects($input: [ProjectCreateInput!]!) {
    createProjects(input: $input) {
      projects {
        id
        name
        considerations {
          id
          name
          details
        }
      }
    }
  }
`);
