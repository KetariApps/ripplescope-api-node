import { GraphQLClient } from 'graphql-request';
import { updateProjects } from '../../../../../db/mutation/project/update.js';
import inferRipples from '../inferRipples/index.js';
import {
  ProjectStatusName,
  RipplesSentiment,
} from '../../../../../__generated__/graphql.js';
import { ProjectWithScopes } from '../../types.js';

export default async function connectRipples(
  project: ProjectWithScopes,
  ripplesResponses: Awaited<ReturnType<typeof inferRipples>>,
  client: GraphQLClient,
) {
  const recentlyCompletedStep = ProjectStatusName.RippleChainRipplesConnected;
  const nextStep = ProjectStatusName.RippleChainDone;
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
    },
    create: {
      ripples: ripplesResponses.map(({ scopeEdge, ripple }) => {
        return {
          edge: { aspect: ripple.edge.aspect, reason: ripple.edge.reason },
          node: {
            name: ripple.name.toLocaleUpperCase(),
            brief: ripple.description,
            scopes: {
              connect: [
                {
                  where: {
                    node: {
                      name: scopeEdge.node.name,
                    },
                  },
                  edge: {
                    magnitude: Number(ripple.edge.magnitude),
                    sentiment:
                      ripple.edge.sentiment.toLocaleUpperCase() as RipplesSentiment,
                  },
                },
              ],
            },
          },
        };
      }),
    },
  });

  const updatedProject = updateProjectsMutation.updateProjects.projects[0];
  return updatedProject;
}
