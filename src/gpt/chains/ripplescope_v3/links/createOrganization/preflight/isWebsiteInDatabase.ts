import { GraphQLClient } from 'graphql-request';
import parseHostname from '../../../../../util/parseHostname.js';
import { countOrganizations } from '../../../../../../db/query/organization/count.js';

export default async function isWebsiteInDatabase(
  url: string,
  client: GraphQLClient,
): Promise<boolean> {
  const orgHostname = parseHostname(url);
  const { organizationsAggregate } = await client.request(countOrganizations, {
    where: { website_CONTAINS: orgHostname || url },
  });
  if (organizationsAggregate.count > 0) {
    throw new Error(
      `Error : DUPLICATE : This organization already exists. ${url} | ${orgHostname}`,
    );
  }
  return true;
}
