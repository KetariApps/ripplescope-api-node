import { GraphQLClient } from 'graphql-request';
import { createOrganizations } from '../../../../../db/mutation/organization/create.js';
import { OrganizationCreateInput } from '../../../../../__generated__/graphql.js';
import isWebsiteResponsive from './preflight/isWebsiteResponsive.js';
import isWebsiteInDatabase from './preflight/isWebsiteInDatabase.js';

export default async function createOrganization(
  organizationInput: OrganizationCreateInput,
  client: GraphQLClient,
) {
  try {
    await isWebsiteResponsive(organizationInput.website);
    await isWebsiteInDatabase(organizationInput.website, client);
  } catch (error) {
    throw new Error(error as string);
  }
  const createOrganizationsMutation = await client.request(
    createOrganizations,
    {
      input: organizationInput,
    },
  );
  return createOrganizationsMutation.createOrganizations.organizations[0];
}
