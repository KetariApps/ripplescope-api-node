import {
  OrganizationWithScopes,
  RecentlyCreatedOrganization,
} from '../types.js';

const stringifyOrganization = ({
  name,
  considerations,
  solutions,
}: OrganizationWithScopes | RecentlyCreatedOrganization) =>
  `Organization:\n${name}\n${solutions
    .map(
      ({ brief, problems }) =>
        `Problem:\n${brief}\n${problems
          .map(
            ({ brief, stakeholders }) =>
              `Solution:\n${brief}\n${stakeholders
                .map(({ name }) => `Stakeholder: ${name}`)
                .join('\n')}`,
          )
          .join('\n')}`,
    )
    .join('\n')}\n${considerations
    .map((consideration) => `${Object.values(consideration).join('\n')}`)
    .join('\n\n')}`;

export default stringifyOrganization;
