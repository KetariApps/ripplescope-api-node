import { Request, Response } from 'express';
import { GraphQLClient } from 'graphql-request';
import { OrganizationCreateInput } from '../../__generated__/graphql.js';
import ripplescopeChain from '../../gpt/chains/ripplescope_v3/index.js';
import { countOrganizations } from '../../db/query/organization/count.js';

export default async function ripplescope(
  req: Request,
  res: Response,
  client: GraphQLClient,
) {
  try {
    const { input } = req.body as
      | { input: OrganizationCreateInput }
      | { input: Array<OrganizationCreateInput> };
    const inputArray = Array.isArray(input) ? input : [input];

    Promise.allSettled(
      inputArray.map(async (organization) => {
        const countOrganizationsQuery = await client.request(
          countOrganizations,
          {
            where: { website: organization.website },
          },
        );
        if (countOrganizationsQuery.organizationsAggregate.count > 0) {
          // organization does exist already, avoid recategorization
          throw new Error(
            `Organization already exists: ${organization.website}`,
          );
        }
        ripplescopeChain(organization);
      }),
    );

    res.status(200).json({
      message: 'Analyzing organizations',
      content: inputArray.map((organization) => organization.website),
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
    res.end();
  }
}
