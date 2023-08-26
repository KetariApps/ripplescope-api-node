import { GraphQLClient } from "graphql-request";
import { CreateProjectMutation } from "../__generated__/graphql.js";
import {
  ProjectCategorizationGPTResponse,
  ProjectCategorizationGPTResponseItem,
} from "../types.js";
import isRedundantImpactArea from "../gpt/isRedundantImpactArea.js";
import { updateProjectImpactAreas } from "./mutations/updateProjectImpactAreas.js";
import dbName from "../helpers/dbName.js";
import { getProjects } from "./queries/getProjects.js";

export const connectImpactAreas = async (
  client: GraphQLClient,
  project: CreateProjectMutation,
  impactAreas: ProjectCategorizationGPTResponse["impactAreas"]
) => {
  const dbProject = await getProjects(client, {
    where: { uniqueName: project.createProjects.projects[0].uniqueName },
    includeImpacts: true,
    includeLocations: false,
  });
  let impactsToLink: ProjectCategorizationGPTResponseItem[] = impactAreas;
  if (dbProject.projects[0].impacts!.length > 0) {
    // project exists and has impact areas -- check for redundancy before linking
    const redundancyTestResults = await Promise.all(
      impactAreas.map(async (ia) => ({
        gptIa: ia,
        result: await isRedundantImpactArea(
          dbProject.projects[0].impacts,
          ia
        ),
      }))
    );
    const uniqueRedundancyTestResults = redundancyTestResults.filter(
      (res) => res.result?.isRedundant === false
    );

    console.log(redundancyTestResults);

    impactsToLink = uniqueRedundancyTestResults.map(({ gptIa }) => gptIa);
  }

  const updateProjectImpactAreasMutation = await updateProjectImpactAreas(
    client,
    {
      where: {
        uniqueName: project.createProjects.projects[0].uniqueName,
      },
      connectOrCreate: {
        impacts: impactsToLink.map((gptResponseItem) => {
          const uniqueName = dbName(gptResponseItem.name);

          return {
            where: {
              node: {
                uniqueName,
              },
            },
            onCreate: {
              edge: {
                aspect: gptResponseItem.aspect,
                reason: gptResponseItem.reason,
                score: Number(gptResponseItem.impactScore),
              },
              node: {
                uniqueName,
                verified: false,
              },
            },
          };
        }),
      },
    }
  );

  return updateProjectImpactAreasMutation;
};
