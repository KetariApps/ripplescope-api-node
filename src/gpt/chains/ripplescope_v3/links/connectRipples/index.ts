import { GraphQLClient } from 'graphql-request';
import inferRipples from '../inferRipples/index.js';
import {
  OrganizationStatusName,
  RipplesSentiment,
} from '../../../../../__generated__/graphql.js';
import { OrganizationWithScopes } from '../../types.js';
import { updateOrganizations } from '../../../../../db/mutation/organization/update.js';

export default async function connectRipples(
  processId: string,
  organization: OrganizationWithScopes,
  ripplesResponses: Awaited<ReturnType<typeof inferRipples>>,
  client: GraphQLClient,
) {
  const recentlyCompletedStep =
    OrganizationStatusName.RippleChainRipplesConnected;
  const nextStep = OrganizationStatusName.RippleChainDone;
  const updateOrganizationsMutation = await client.request(
    updateOrganizations,
    {
      where: { id: organization.id },
      connectOrCreate: {
        statuses: [
          {
            where: {
              node: { name: recentlyCompletedStep },
            },
            onCreate: {
              node: { name: recentlyCompletedStep },
              edge: { processId },
            },
          },
          {
            where: {
              node: { name: nextStep },
            },
            onCreate: {
              node: { name: nextStep },
              edge: { processId },
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
    },
  );

  const updatedOrganization =
    updateOrganizationsMutation.updateOrganizations.organizations[0];
  return updatedOrganization;
}
