import { GraphQLClient } from "graphql-request";
import { gql } from "../../gql/gql.js";
import { GetProjectsImpactAreasQueryVariables } from "../../gql/graphql.js";

export const getProjectsImpactAreas = async (
  client: GraphQLClient,
  variables: GetProjectsImpactAreasQueryVariables
) => {
  const results = await client.request(getProjectsImpactAreasQuery, variables);
  return results;
};

// todo: add score to projectsConnection
const getProjectsImpactAreasQuery = gql(`
query GetProjectsImpactAreas($where: ProjectWhere) {
  projects(where: $where) {
    uniqueName
    impactAreasConnection {
      edges {
        aspect
        reason
        score
        node {
          uniqueName
          description
        }
      }
    }
  }
}
`);
