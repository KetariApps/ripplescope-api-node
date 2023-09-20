import { GraphQLClient } from 'graphql-request';
import { createOrganizations } from '../../../../../db/mutation/organization/create.js';
import { OrganizationCreateInput } from '../../../../../__generated__/graphql.js';

export default async function createOrganization(
  organizationDetails: OrganizationCreateInput,
  client: GraphQLClient,
) {
  const { name, website, brief, considerations, description } =
    organizationDetails;
  const input: OrganizationCreateInput = {
    name,
    website,
    brief,
    description,
    considerations,
  };
  const createOrganizationsMutation = await client.request(
    createOrganizations,
    {
      input,
    },
  );
  return createOrganizationsMutation.createOrganizations.organizations[0];
}
