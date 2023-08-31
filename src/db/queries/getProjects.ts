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
query GetProjects($where: ProjectWhere, $impactWhere: ImpactWhere, $includeLocations: Boolean!, $includeImpacts: Boolean!) {
  projects(where: $where) {
    ...ProjectDetails
    locations @include(if: $includeLocations) {
      uniqueName
      ...LocationDetails
    }
    impacts(where: $impactWhere) @include(if: $includeImpacts) {
      ...ImpactDetails
      impactAreaConnection {
        edges {
          score
          reason
          aspect
          node {
            ...ImpactAreaDetails
          }
        }
      }
    }
  }
}
`);
