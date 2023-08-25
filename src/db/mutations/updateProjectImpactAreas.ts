import { GraphQLClient } from "graphql-request";
import {
  ProjectConnectOrCreateInput,
  ProjectWhere,
} from "../../__generated__/graphql.js";
import { gql } from "../../__generated__/gql.js";

export const updateProjectImpactAreas = async (
  client: GraphQLClient,
  variables: {
    where: ProjectWhere;
    connectOrCreate: ProjectConnectOrCreateInput;
  }
) => {
  const results = await client.request(
    updateProjectImpactAreasMutation,
    variables
  );
  return results;
};

// todo: add score to projectsConnection
export const updateProjectImpactAreasMutation = gql(`
      mutation UpdateProjectImpactAreas($where: ProjectWhere, $connectOrCreate: ProjectConnectOrCreateInput) {
        updateProjects(where: $where, connectOrCreate: $connectOrCreate) {
          projects {
            uniqueName
            impactAreas {
              uniqueName
            }
          }
        }
      }
`);
