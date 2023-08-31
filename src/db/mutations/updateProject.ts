import { GraphQLClient } from "graphql-request";
import {
  ProjectConnectOrCreateInput,
  ProjectRelationInput,
  ProjectWhere,
} from "../../__generated__/graphql.js";
import { gql } from "../../__generated__/gql.js";

export const updateProjects = async (
  client: GraphQLClient,
  variables: {
    where: ProjectWhere;
    connectOrCreate: ProjectConnectOrCreateInput;
    create: ProjectRelationInput;
    includeImpacts: boolean;
    includeImpactAreas: boolean;
    includeLocations: boolean;
    includeInfo: boolean;
  }
) => {
  const results = await client.request(updateProjectsMutation, variables);
  return results;
};

// todo: add score to projectsConnection
export const updateProjectsMutation = gql(`
mutation UpdateProjects($where: ProjectWhere, $connectOrCreate: ProjectConnectOrCreateInput, $create: ProjectRelationInput, $includeImpacts: Boolean!, $includeImpactAreas: Boolean!, $includeLocations: Boolean!, $includeInfo: Boolean!) {
  updateProjects(where: $where, connectOrCreate: $connectOrCreate, create: $create) {
    projects {
      uniqueName
      ...ProjectDetails
      impactAreasConnection @include(if: $includeImpactAreas) {
        edges {
          description
          node {
            uniqueName
            ...ImpactAreaDetails
          }
        }
      }
      impactsConnection @include(if: $includeImpacts) {
        edges {
          node {
            ...ImpactDetails
            impactAreaConnection {
              edges {
                score
                reason
                aspect
                node {
                  uniqueName
                  ...ImpactAreaDetails
                }
              }
            }
          }
        }
      }
      locationsConnection @include(if: $includeLocations) {
        edges {
          node {
            uniqueName
            ...LocationDetails
          }
        }
      }
    }
    info @include(if: $includeInfo) {
      nodesCreated
      nodesDeleted
      relationshipsCreated
      relationshipsDeleted
    }
  }
}
`);
