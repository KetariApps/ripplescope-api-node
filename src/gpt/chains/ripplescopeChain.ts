import { GraphQLClient } from "graphql-request";
import { CategorizationRequestProject } from "../../types.js";
import cateorizeProject from "../categorizeProject.js";
import { connectImpactAreas } from "../../db/connectImpactAreas.js";
import { createProject } from "../../db/mutations/createProject.js";
import dbName from "../../helpers/dbName.js";
import analyzeProject, { AnalyzeProjectResult } from "../analyzeProject.js";

export const ripplescopeChain = async (
  project: CategorizationRequestProject,
  client: GraphQLClient
) => {
  try {
    const createProjectMutation = await createProject(
      client,
      createProjectVariables(project)
    );

    console.log({
      type: "CREATE PROJECT",
      status: "DONE",
      message: createProjectMutation,
    });

    const categorizationResponse = await cateorizeProject(project, client);

    console.log({
      type: "CATEGORIZE PROJECT",
      status: "DONE",
      message: categorizationResponse,
    });

    const updateProjectImpactAreasMutation = await connectImpactAreas(
      client,
      createProjectMutation,
      categorizationResponse
    );

    console.log({
      type: "CONNECT PROJECT",
      status: "DONE",
      message: updateProjectImpactAreasMutation,
    });

    const analysis = await analyzeProject(
      updateProjectImpactAreasMutation.updateProjects.projects[0].uniqueName,
      client
    );

    console.log({ type: "ANALYZE PROJECT", status: "DONE", message: analysis });

    const validResults = analysis.filter(
      (res): res is PromiseFulfilledResult<AnalyzeProjectResult> =>
        res.status === "fulfilled"
    );

    console.log(analysis);
  } catch (error) {
    console.error(error);
  }
};

const createProjectVariables = (project: CategorizationRequestProject) => ({
  input: [
    {
      name: project.name,
      problem: project.problem,
      solution: project.solution,
      context: project.context,
      employees: project.employees,
      uniqueName: dbName(project.name),
      locations: {
        connectOrCreate: project.locations.map((loc) => {
          const uniqueName = dbName(
            `${loc.nation}:${loc.state || loc.city}${
              loc.state ? ":" + loc.city : loc.city
            }`
          );
          return {
            onCreate: {
              node: {
                uniqueName,
                state: loc.state,
                nation: loc.nation,
                city: loc.city,
              },
            },
            where: {
              node: {
                uniqueName,
              },
            },
          };
        }),
      },
    },
  ],
});
