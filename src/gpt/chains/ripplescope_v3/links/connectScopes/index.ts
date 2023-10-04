import { GraphQLClient } from 'graphql-request';
import {
  CreateOrganizationsMutation,
  OrganizationStatusName,
} from '../../../../../__generated__/graphql.js';
import { GPT_ScopesResponse } from '../../types.js';
import { updateOrganizations } from '../../../../../db/mutation/organization/update.js';
import { v4 as uuid } from 'uuid';

export default async function connectScopes(
  processId: string,
  organization: CreateOrganizationsMutation['createOrganizations']['organizations'][0],
  scopes: GPT_ScopesResponse['scopes'],
  client: GraphQLClient,
) {
  const recentlyCompletedStep =
    OrganizationStatusName.RippleChainScopesConnected;
  const nextStep = OrganizationStatusName.RippleChainRipplesInferring;
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
        scopes: scopes.map((scope) => ({
          where: {
            node: {
              name: scope.name?.toUpperCase() || uuid(),
            },
          },
          onCreate: {
            edge: {
              aspect: scope.edge.aspect,
              reason: scope.edge.reason,
              processId,
            },
            node: {
              name: scope.name?.toUpperCase() || uuid(),
              brief: scope.description,
            },
          },
        })),
      },
    },
  );
  const updatedOrganization =
    updateOrganizationsMutation.updateOrganizations.organizations[0];
  return updatedOrganization;
}
