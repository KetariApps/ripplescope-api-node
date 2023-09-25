import { GraphQLClient } from 'graphql-request';
import { OrganizationStatusName } from '../../../../../__generated__/graphql.js';
import { RecentlyCreatedOrganization } from '../../types.js';
import { updateOrganizations } from '../../../../../db/mutation/organization/update.js';

export default async function ripplescopeError(
  processId: string,
  organization: RecentlyCreatedOrganization,
  error: any,
  client: GraphQLClient,
) {
  try {
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
                edge: { dump: JSON.stringify(error), processId },
              },
            },
          ],
        },
      },
    );
    const updatedOrganization =
      updateOrganizationsMutation.updateOrganizations.organizations[0];
    return updatedOrganization;
  } catch (error) {
    console.error(`[${processId}]: Error: ${error}`);
  }
}
