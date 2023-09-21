import { GraphQLClient } from 'graphql-request';
import { createOrganizations } from '../../../../../db/mutation/organization/create.js';
import { OrganizationCreateInput } from '../../../../../__generated__/graphql.js';
import { countOrganizations } from '../../../../../db/query/organization/count.js';
import parseHostname from '../../../../util/parseHostname.js';

export default async function createOrganization(
  organizationDetails: OrganizationCreateInput,
  client: GraphQLClient,
) {
  const orgHostname = parseHostname(organizationDetails.website);
  const { organizationsAggregate } = await client.request(countOrganizations, {
    where: { website_CONTAINS: orgHostname || organizationDetails.website },
  });
  if (organizationsAggregate.count > 0) {
    throw new Error(
      `Error : DUPLICATE : This organization already exists. ${organizationDetails.name} | ${organizationDetails.website} | ${orgHostname}`,
    );
  }
  const createOrganizationsMutation = await client.request(
    createOrganizations,
    {
      input: organizationDetails,
    },
  );
  return createOrganizationsMutation.createOrganizations.organizations[0];
}
