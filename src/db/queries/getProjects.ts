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
    impacts(where: $impactWhere) @include(if: $includeImpacts) {
      verified
      uniqueName
      impactableConnection {
        edges {
          score
          reason
          aspect
          node {
            ... on Impact {
              uniqueName
              verified
            }
            ... on ImpactArea {
              uniqueName
              verified
            }
          }
        }
      }
    }
  }
}
`);
