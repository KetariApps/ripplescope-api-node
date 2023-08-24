import { GraphQLClient } from "graphql-request";
import { gql } from "../../gql/gql.js";
import { GetProjectsQueryVariables } from "../../gql/graphql.js";

export const getProjects = async (
  client: GraphQLClient,
  variables: GetProjectsQueryVariables
) => {
  const results = await client.request(getProjectsQuery, variables);
  return results;
};

// todo: add score to projectsConnection
const getProjectsQuery = gql(`
query GetProjects($where: ProjectWhere) {
  projects(where: $where) {
    uniqueName
  }
}
`);
