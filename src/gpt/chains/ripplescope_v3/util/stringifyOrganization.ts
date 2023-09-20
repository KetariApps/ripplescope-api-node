import {
  OrganizationWithScopes,
  RecentlyCreatedOrganization,
} from '../types.js';

const stringifyOrganization = (
  organization: OrganizationWithScopes | RecentlyCreatedOrganization,
) =>
  `Organization:\n${organization.name}\n${organization.considerations
    .map((consideration) => `${Object.values(consideration).join('\n')}`)
    .join('\n\n')}`;

export default stringifyOrganization;
