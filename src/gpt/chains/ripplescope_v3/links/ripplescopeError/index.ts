import { GraphQLClient } from 'graphql-request';
import { updateOrganizations } from '../../../../../db/mutation/organization/update.js';
import { OrganizationStatusName } from '../../../../../__generated__/graphql.js';
import { RecentlyCreatedOrganization } from '../../types.js';

export default async function ripplescopeError(
  organization: RecentlyCreatedOrganization,
  error: any,
  client: GraphQLClient,
) {
  const errorStatus = OrganizationStatusName.RippleChainError;
  const updateOrganizationsMutation = await client.request(
    updateOrganizations,
    {
      where: { id: organization.id },
      connectOrCreate: {
        statuses: [
          {
            where: {
              node: { name: errorStatus },
            },
            onCreate: {
              node: { name: errorStatus },
              edge: { dump: JSON.stringify(error) },
            },
          },
        ],
      },
    },
  );
  const updatedOrganization =
    updateOrganizationsMutation.updateOrganizations.organizations[0];
  return updatedOrganization;
}
