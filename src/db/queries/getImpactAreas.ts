import { GraphQLClient } from "graphql-request";
import { gql } from "../../gql/gql.js";
import { GetImpactAreasQueryVariables } from "../../gql/graphql.js";

export const getImpactAreas = async (
  client: GraphQLClient,
  variables: GetImpactAreasQueryVariables
) => {
  const results = await client.request(getImpactAreasQuery, variables);
  return results;
};

// todo: add score to projectsConnection
const getImpactAreasQuery = gql(`
query GetImpactAreas($where: ImpactAreaWhere) {
    impactAreas(where: $where) {
      name
      description
    }
  }
`);
