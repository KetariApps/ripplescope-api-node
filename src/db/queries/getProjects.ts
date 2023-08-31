import { GraphQLClient } from "graphql-request";
import { gql } from "../../__generated__/gql.js";
import { GetProjectsQueryVariables } from "../../__generated__/graphql.js";

export const getProjects = async (
  client: GraphQLClient,
  variables: GetProjectsQueryVariables
) => {
  const results = await client.request(getProjectsQuery, variables);
  return results;
};
export const getProjectsQuery = gql(`
query GetProjects($where: ProjectWhere, $impactAreasConnectionWhere: ProjectImpactAreasConnectionWhere, $includeLocations: Boolean!, $includeImpactAreasConnection: Boolean!) {
  projects(where: $where) {
    uniqueName
    name
    employees
    problem
    solution
    context
    locations @include(if: $includeLocations) {
      uniqueName
      ...LocationDetails
    }
    impactAreasConnection(where: $impactAreasConnectionWhere) @include(if: $includeImpactAreasConnection) {
      edges {
        aspect
        reason
        score
        node {
          uniqueName
          verified
          ...ImpactAreaDetails
        }
      }
    }
  }
}
`);
