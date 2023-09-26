import { createScopes } from '../db/mutation/scope/create.js';
import * as dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import {
  airPollution,
  biodiversity,
  chemicalPollution,
  climateChange,
  culturalHeritage,
  education,
  energy,
  food,
  freshwater,
  genderEquity,
  health,
  housing,
  incomeAndWork,
  land,
  networks,
  nitrogenAndPhosphorousLoading,
  oceans,
  ozoneProtection,
  peaceAndJustice,
  politicalVoice,
  recyclableMaterials,
  socialEquity,
  supplyChainsAndSourcing,
  water,
} from './initialNodes/scopes/index.js';
export const insertScopes = async () => {
  try {
    dotenv.config();
    const { GRAPH_URI } = process.env;
    if (GRAPH_URI === undefined) throw new Error('GRAPH_URI is undefined');

    const client = new GraphQLClient(GRAPH_URI);

    // todo: verify scopes don't already exist -- this may run at every container startup

    const scopes = [
      airPollution,
      biodiversity,
      chemicalPollution,
      climateChange,
      culturalHeritage,
      education,
      energy,
      food,
      freshwater,
      genderEquity,
      health,
      housing,
      incomeAndWork,
      land,
      networks,
      nitrogenAndPhosphorousLoading,
      oceans,
      ozoneProtection,
      peaceAndJustice,
      politicalVoice,
      recyclableMaterials,
      socialEquity,
      supplyChainsAndSourcing,
      water,
    ];
    console.log('Creating initial scopes.');
    await Promise.allSettled(
      scopes.map(async (scope, i, arr) => {
        try {
          console.debug(`[${i + 1}/${arr.length}]: Sent`);
          await client.request(createScopes, {
            input: scope,
          });
          console.debug(`[${i + 1}/${arr.length}]: Success`);
        } catch (error) {
          console.debug(`[${i + 1}/${arr.length}]: Failed`);
        }
      }),
    );
    console.log('Created initial scopes.');
    return null;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    console.debug('Inserted Scopes');
    return;
  }
};
