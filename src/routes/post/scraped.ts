import { Request, Response } from 'express';
import { GraphQLClient } from 'graphql-request';
import {
  OrganizationCreateInput,
  OrganizationStatusName,
} from '../../__generated__/graphql.js';
import * as dotenv from 'dotenv';
import { createOrganization } from '../../gpt/chains/ripplescope_v3/links/index.js';
import { v4 as uuid } from 'uuid';
import ripplescopeChain from '../../gpt/chains/ripplescope_v3/index.js';
import parseScrapedData, {
  ParseScrapedDataProps,
} from '../../gpt/util/parseScrapedData.js';
import OpenAI from 'openai';
import { namingChain } from '../../gpt/chains/index.js';

export default async function scraped(req: Request, res: Response) {
  const processId = uuid();
  const decorator = `[${processId}]:`;
  try {
    dotenv.config();
    const { GRAPH_URI, OPENAI_API_KEY } = process.env;
    if (GRAPH_URI === undefined)
      throw new Error(`${decorator} GRAPH_URI is undefined`);
    if (OPENAI_API_KEY === undefined)
      throw new Error(`${decorator} OPENAI_API_KEY is undefined`);
    const client = new GraphQLClient(GRAPH_URI);
    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

    const data = req.body as ParseScrapedDataProps;
    const parsedInput = parseScrapedData(data);
    console.log(parsedInput);

    const inputWithStatus: OrganizationCreateInput = {
      ...parsedInput,
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

    /**
     * It might be good to push these chains to a stream that can be subscribed to in the UI.
     * Currently we accomplish this by polling for connections in the database, which seems more robust,
     * but maybe it'as not necessary.
     * Or perhaps the two methods could work together.
     */
    /**
     * Any naming of user-entered data can happen entirely independently of the ripplescope analysis chain
     */
    console.debug(`[${processId}]: Naming any unnammed user entries`);
    namingChain(processId, organization, openai, client);

    console.debug(`[${processId}]: Kicking of the ripplescope chain`);
    ripplescopeChain(processId, organization, openai, client);

    res.status(200).json({
      organization,
      processId,
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
    res.end();
  }
}
