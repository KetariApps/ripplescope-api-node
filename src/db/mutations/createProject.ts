import { GraphQLClient } from "graphql-request";
import { gql } from "../../gql/gql.js";
import { ProjectCreateInput } from "../../gql/graphql.js";

export const createProject = async (
  client: GraphQLClient,
  variables: { input: ProjectCreateInput[] }
) => {
  const results = await client.request(createProjectMutation, variables);
  return results;
};

// todo: add score to projectsConnection
const createProjectMutation = gql(`
  mutation CreateProject($input: [ProjectCreateInput!]!) {
    createProjects(input: $input) {
      projects {
        locations {
          uniqueName
        }
        name
        uniqueName
        solution
        problem
      }
    }
  }
`);
