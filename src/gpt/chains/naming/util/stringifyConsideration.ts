import { CreateOrganizationsMutation } from '../../../../__generated__/graphql.js';

const stringifyConsideration = (
  consideration: CreateOrganizationsMutation['createOrganizations']['organizations'][0]['considerations'][0],
) => `Consideration:\n${resolveContent(consideration)?.body}`;

export default stringifyConsideration;

const resolveContent = (
  consideration: CreateOrganizationsMutation['createOrganizations']['organizations'][0]['considerations'][0],
) => {
  if (
    consideration.__typename === 'Geography' ||
    consideration.__typename === 'Team'
  ) {
    return {
      body: consideration.description || consideration.brief,
    };
  } else if (consideration.__typename === 'Misc') {
    return {
      body: consideration.content,
    };
  } else {
    return null;
  }
};
