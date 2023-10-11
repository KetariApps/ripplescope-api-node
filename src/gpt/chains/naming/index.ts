import OpenAI from 'openai';
import { CreateOrganizationsMutation } from '../../../__generated__/graphql.js';
import { GraphQLClient } from 'graphql-request';
import { nameConsiderations } from './links/index.js';
import { updateMiscs } from '../../../db/mutation/misc/update/query.js';
import { rename } from '../../../db/mutation/misc/update/recipies/rename.js';

export default async function namingChain(
  processId: string,
  organization: CreateOrganizationsMutation['createOrganizations']['organizations'][0],
  openai: OpenAI,
  client: GraphQLClient,
) {
  const decorator = `[${processId}][naming chain]`;
  try {
    console.debug(`${decorator}: Naming any miscellaneous considerations`);
    const namedMiscConsiderations = await nameConsiderations(
      organization.considerations.filter((c) => c.__typename === 'Misc'),
      openai,
    );

    await Promise.allSettled(
      namedMiscConsiderations.map(({ id, name }, i, arr) => {
        console.debug(
          `${decorator}[Considerations][${i + 1} / ${
            arr.length
          }][${id}]: Updating name : ${name}`,
        );
        if (name === undefined) {
          throw new Error('No name was generated');
        }
        return client.request(updateMiscs, rename(id, name));
      }),
    );
  } catch (error) {
    console.error(`${decorator}: ${error}`);
  }
}
