import { GraphQLClient } from 'graphql-request';
import inferRipples from '../inferRipples/index.js';
import {
  OrganizationRelationInput,
  OrganizationStatusName,
  RipplesSentiment,
  UserInteractionName,
} from '../../../../../__generated__/graphql.js';
import { updateOrganizations } from '../../../../../db/mutation/organization/update.js';

export interface UpdateOrganizationProps {
  processId: string;
  id: string;
  description: string;
  brief: string;
  client: GraphQLClient;
  ripplesResponses: Awaited<ReturnType<typeof inferRipples>>;
}
export default async function updateOrganization({
  processId,
  id,
  description,
  brief,
  client,
  ripplesResponses,
}: UpdateOrganizationProps) {
  const recentlyCompletedStep = OrganizationStatusName.RippleChainDataLinked;
  const nextStep = OrganizationStatusName.RippleChainDone;

  const newRipplesInput: OrganizationRelationInput = {
    ripples: ripplesResponses.map(({ scopeEdge, ripple }) => {
      return {
        edge: {
          aspect: ripple.edge.aspect,
          reason: ripple.edge.reason,
          processId,
        },
        node: {
          name: ripple.name.toLocaleUpperCase(),
          brief: ripple.brief,
          description: ripple.description,
          users: {
            connectOrCreate: [
              {
                onCreate: {
                  node: { email: 'gpt@ripplescope.com' },
                  edge: { type: UserInteractionName.Create },
                },
                where: { node: { email: 'gpt@ripplescope.com' } },
              },
            ],
          },
          scopes: {
            connect: [
              {
                where: {
                  node: {
                    name: scopeEdge.node.name,
                  },
                },
                edge: {
                  processId,
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
  };

  const updateOrganizationsMutation = await client.request(
    updateOrganizations,
    {
      where: { id },
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
      update: { description, brief },
      create: newRipplesInput,
    },
  );

  const updatedOrganization =
    updateOrganizationsMutation.updateOrganizations.organizations[0];
  return updatedOrganization;
}
