import * as dotenv from "dotenv";
// import neo4j, { Driver } from "neo4j-driver";
import { GraphQLClient } from "graphql-request";
import { gql } from "../gql/gql.js";
import ImpactAreas from "../prompts/ripplescope-v2/impactAreas/index.js";
import { DoughnutCategoryName, ImpactCategoryName } from "../gql/graphql.js";
import dbName from "../helpers/dbName.js";
import splitSnakeCase from "../helpers/snakeCaseToCapitalized.js";
import capitalizeWords from "../helpers/capitalizeWords.js";

//// env stuff
dotenv.config();
const { GRAPH_URI } = process.env;

if (GRAPH_URI === undefined) {
  console.error("undefined environment variables");
} else {
  // let driver: Driver;
  const client = new GraphQLClient(GRAPH_URI);
  const createImpactCategoriesMutation = gql(`
  mutation CreateImpactCategories($input: [ImpactCategoryCreateInput!]!) {
    createImpactCategories(input: $input) {
      impactCategories {
        uniqueName
        name
        doughnutCategory {
          uniqueName
          name
        }
      }
    }
  }
`);

  const impactCategories = [
    ...new Set(
      Object.values(ImpactAreas.object).map((ia) =>
        JSON.stringify({ iac: ia.impactAreaCategory, dc: ia.doughnutCategory })
      )
    ),
  ].map(
    (ic) =>
      JSON.parse(ic) as { iac: ImpactCategoryName; dc: DoughnutCategoryName }
  );

  const results = await client.request(createImpactCategoriesMutation, {
    input: impactCategories.map((ic) => {
      const matchedImpactAreas = Object.values(ImpactAreas.object).filter(
        (ia) => ia.impactAreaCategory === ic.iac
      );
      return {
        uniqueName: ic.iac,
        name: capitalizeWords(splitSnakeCase(ic.iac)),
        doughnutCategory: {
          connectOrCreate: {
            where: {
              node: {
                uniqueName: ic.dc,
              },
            },
            onCreate: {
              node: {
                uniqueName: ic.dc,
                name: capitalizeWords(splitSnakeCase(ic.dc)),
              },
            },
          },
        },
        impactAreas: {
          connectOrCreate: matchedImpactAreas.map((ia) => ({
            where: {
              node: {
                uniqueName: dbName(ia.name),
              },
            },
            onCreate: {
              node: {
                verified: true,
                uniqueName: dbName(ia.name),
                questions: ia.questions,
                name: ia.name,
                description: ia.description,
                context: ia.context,
              },
            },
          })),
        },
      };
    }),
  });

  console.log(results);
}
