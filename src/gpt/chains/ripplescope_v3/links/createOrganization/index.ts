import { GraphQLClient } from 'graphql-request';
import { createOrganizations } from '../../../../../db/mutation/organization/create.js';
import { OrganizationCreateInput } from '../../../../../__generated__/graphql.js';
import isWebsiteResponsive from './preflight/isWebsiteResponsive.js';
import isWebsiteInDatabase from './preflight/isWebsiteInDatabase.js';

export default async function createOrganization(
  organizationDetails: OrganizationCreateInput,
  client: GraphQLClient,
) {
  const isWebsiteResponding = isWebsiteResponsive(organizationDetails.website);
  const isNewOrganization = isWebsiteInDatabase(
    organizationDetails.website,
    client,
  );
  try {
    await Promise.all([isWebsiteResponding, isNewOrganization]);
  } catch (error) {
    throw new Error(error as string);
  }
  const createOrganizationsMutation = await client.request(
    createOrganizations,
    {
      input: organizationDetails,
    },
  );
  return createOrganizationsMutation.createOrganizations.organizations[0];
}
