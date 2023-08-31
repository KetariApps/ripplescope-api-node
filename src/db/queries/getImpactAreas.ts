import { GraphQLClient } from "graphql-request";
import { gql } from "../../__generated__/gql.js";
import { GetImpactAreasQueryVariables } from "../../__generated__/graphql.js";

export const getImpactAreas = async (
  client: GraphQLClient,
  variables: GetImpactAreasQueryVariables
) => {
  const results = await client.request(getImpactAreasQuery, variables);
  return results;
};

// todo: add score to projectsConnection
const getImpactAreasQuery = gql(`
query GetImpactAreas($where: ImpactAreaWhere, $includeDetails: Boolean!) {
    impactAreas(where: $where) {
      uniqueName
      ...ImpactAreaDetails @include (if: $includeDetails)
    }
  }
`);
