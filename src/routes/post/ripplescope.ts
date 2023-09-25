import { Request, Response } from 'express';
import { GraphQLClient } from 'graphql-request';
import {
  OrganizationCreateInput,
  OrganizationStatusName,
} from '../../__generated__/graphql.js';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import { createOrganization } from '../../gpt/chains/ripplescope_v3/links/index.js';
import { v4 as uuid } from 'uuid';
import ripplescopeChain from '../../gpt/chains/ripplescope_v3/index.js';

export default async function ripplescope(req: Request, res: Response) {
  const processId = uuid();
  const decorator = `[${processId}]:`;
  try {
    const { input } = req.body as { input: OrganizationCreateInput };
    console.debug(`${decorator} Received request: ${input}`);
    dotenv.config();
    const { GRAPH_URI, OPENAI_API_KEY } = process.env;
    if (GRAPH_URI === undefined)
      throw new Error(`${decorator} GRAPH_URI is undefined`);
    if (OPENAI_API_KEY === undefined)
      throw new Error(`${decorator} OPENAI_API_KEY is undefined`);
    const client = new GraphQLClient(GRAPH_URI);
    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    const inputWithStatus: OrganizationCreateInput = {
      ...input,
      statuses: {
        connectOrCreate: [
          {
            where: {
              node: { name: OrganizationStatusName.RippleChainScopesInferring },
            },
            onCreate: {
              node: { name: OrganizationStatusName.RippleChainScopesInferring },
              edge: { processId },
            },
          },
        ],
      },
    };
    const organization = await createOrganization(inputWithStatus, client);
    console.log(`${decorator} Created organization`);

    ripplescopeChain(processId, organization, openai, client);

    res.status(200).json({
      organization,
      processId,
    });
    res.end();
  } catch (error) {
    console.error(`${decorator} ${error}`);
    res.status(500).json({ error });
    res.end();
  }
}
