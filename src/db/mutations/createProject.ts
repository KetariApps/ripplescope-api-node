import { GraphQLClient } from "graphql-request";
import { gql } from "../../__generated__/gql.js";
import { ProjectCreateInput } from "../../__generated__/graphql.js";

export const createProject = async (
  client: GraphQLClient,
  variables: {
    input: ProjectCreateInput[];
    includeProjectDetails: boolean;
    includeLocations: boolean;
  }
) => {
  const results = await client.request(createProjectMutation, variables);
  return results;
};

// todo: add score to projectsConnection
const createProjectMutation = gql(`
  mutation CreateProject($input: [ProjectCreateInput!]!, $includeProjectDetails: Boolean!, $includeLocations: Boolean!) {
    createProjects(input: $input) {
      projects {
        uniqueName
        ...ProjectDetails @include (if: $includeProjectDetails)
        locations @include (if: $includeLocations) {
          uniqueName
          ...LocationDetails
        }
      }
    }
  }
`);
