import { GraphQLClient } from 'graphql-request';
import { updateProjects } from '../../../../../db/mutation/project/update.js';
import {
  CreateProjectsMutation,
  ProjectStatusName,
} from '../../../../../__generated__/graphql.js';
import { GPT_ScopesResponse } from '../../types.js';

export default async function connectScopes(
  project: CreateProjectsMutation['createProjects']['projects'][0],
  scopes: GPT_ScopesResponse['scopes'],
  client: GraphQLClient,
) {
  const recentlyCompletedStep = ProjectStatusName.RippleChainScopesConnected;
  const nextStep = ProjectStatusName.RippleChainRipplesInferring;
  const updateProjectsMutation = await client.request(updateProjects, {
    where: { id: project.id },
    connectOrCreate: {
      statuses: [
        {
          where: {
            node: { name: recentlyCompletedStep },
          },
          onCreate: {
            node: { name: recentlyCompletedStep },
          },
        },
        {
          where: {
            node: { name: nextStep },
          },
          onCreate: {
            node: { name: nextStep },
          },
        },
      ],
      scopes: scopes.map((scope) => ({
        where: {
          node: {
            name: scope.name,
          },
        },
        onCreate: {
          edge: {
            aspect: scope.edge.aspect,
            reason: scope.edge.reason,
          },
          node: {
            name: scope.name,
            description: scope.description,
          },
        },
      })),
    },
  });
  const updatedProject = updateProjectsMutation.updateProjects.projects[0];
  return updatedProject;
}
