import { GraphQLClient } from "graphql-request";
import { gql } from "../../__generated__/gql.js";
import { GetProjectsImpactAreasQueryVariables } from "../../__generated__/graphql.js";

export const getProjectsImpactAreas = async (
  client: GraphQLClient,
  variables: GetProjectsImpactAreasQueryVariables
) => {
  const results = await client.request(getProjectsImpactAreasQuery, variables);
  return results;
};

const getProjectsImpactAreasQuery = gql(`
query GetProjectsImpactAreas($where: ProjectWhere, $impactAreasConnectionWhere: ProjectImpactAreasConnectionWhere, $includeProjectDetails: Boolean!, $includeImpactAreaDetails: Boolean!) {
  projects(where: $where) {
    uniqueName
    ...ProjectDetails @include (if: $includeProjectDetails)
    impactAreasConnection(where: $impactAreasConnectionWhere) {
      edges {
        aspect
        reason
        score
        node {
          uniqueName
          ...ImpactAreaDetails @include (if: $includeImpactAreaDetails)
        }
      }
    }
  }
}
`);
