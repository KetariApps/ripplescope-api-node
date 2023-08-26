import OpenAI from "openai";
import * as dotenv from "dotenv";
import { GraphQLClient } from "graphql-request";
import { getProjects } from "../db/queries/getProjects.js";
import analysis from "./prompts/analysis/index.js";
import { ImpactAreaDetailsFragment } from "../__generated__/graphql.js";
import { ProjectAnalysisGPTResponse } from "../types.js";
import getJSONString from "../helpers/getJSONString.js";
import _ from "lodash";

export type AnalyzeProjectResult = ProjectAnalysisGPTResponse & {
  project: {
    impactArea: {
      uniqueName: string;
    };
  };
};
export default async function analyzeProject(
  uniqueName: string,
  client: GraphQLClient,
  openai: OpenAI
): Promise<PromiseSettledResult<AnalyzeProjectResult>[]> {

  const { projects } = await getProjects(client, {
    where: {
      uniqueName,
    },
    includeImpactAreasConnection: true,
    includeLocations: true,
  });

  const gptAnalysisResults = await Promise.allSettled(
    projects[0].impactAreasConnection!.edges.map(async (edge) => {
      const impactAreaFragment = edge.node as ImpactAreaDetailsFragment;
      const {
        userMessage,
        projectContextMessage,
        impactAreaContextMessage,
        responseTemplateMessage,
      } = analysis;
      const messages = [
        userMessage,
        projectContextMessage(projects[0]),
        impactAreaContextMessage(impactAreaFragment),
        responseTemplateMessage,
      ];
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
      });
      if (response) {
        const projectAnalysisGPTResponseString =
          response.choices[0].message?.content;
        const projectAnalysisGPTResponse = getJSONString(
          projectAnalysisGPTResponseString
        ) as ProjectAnalysisGPTResponse | undefined;

        if (projectAnalysisGPTResponse === undefined) {
          throw new Error("error parsing GPT response");
        } else {
          const projectAnalysis = _.merge(projectAnalysisGPTResponse, {
            project: { impactArea: { uniqueName: edge.node.uniqueName } },
          });
          return projectAnalysis;
        }
      } else {
        throw new Error("error analyzing project with GPT");
      }
    })
  );

  //   const results = gptAnalysisResults.filter((res): res is  => res. === "fulfilled")

  return gptAnalysisResults;
}
