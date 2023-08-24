import { Request, Response } from "express";
import { CategorizationRequest, WorkerMessageType } from "../../types.js";
import { createProject } from "../../db/mutations/createProject.js";
import { connectImpactAreas } from "../../db/mutations/connectImpactAreas.js";
import { GraphQLClient } from "graphql-request";
import { CreateProjectMutation } from "../../gql/graphql.js";
import cateorizeProjectV2 from "../../gpt/categorization/categorizeProjectv2.js";
import { getProjects } from "../../db/queries/getProject.js";
import dbName from "../../helpers/dbName.js";

export default async function categorize(
  req: Request,
  res: Response,
  client: GraphQLClient
) {
  try {
    const categorizationRequest = req.body as CategorizationRequest;
    console.log({ type: "categorization request", categorizationRequest });
    const getProjectsQuery = await getProjects(client, {
      where: {
        uniqueName: dbName(categorizationRequest.project.name),
      },
    });
    if (getProjectsQuery.projects.length === 0) {
      // the project does not exist -- create it
      let createProjectMutation: CreateProjectMutation;
      createProjectMutation = await createProject(client, {
        input: [
          {
            name: categorizationRequest.project.name,
            problem: categorizationRequest.project.problem,
            solution: categorizationRequest.project.solution,
            uniqueName: dbName(categorizationRequest.project.name),
            locations: {
              connectOrCreate: categorizationRequest.project.locations.map(
                (loc) => {
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
                }
              ),
            },
          },
        ],
      });
      console.log({
        type: "CATEGORIZATION",
        message: createProjectMutation,
      });
      const maybeUpdateProjectImpactAreasMutation = cateorizeProjectV2(
        categorizationRequest.project,
        client
      ).then(async (message) => {
        if (message.type === WorkerMessageType.ERROR) {
          console.error({
            type: "ERROR",
            content: message.content,
            message: createProjectMutation,
          });
          return;
        } else {
          console.log({
            type: "CONNECTION",
            message: message,
          });
          return await connectImpactAreas(
            client,
            createProjectMutation,
            message.impactAreas
          );
        }
      });
      res.status(200).json(createProjectMutation);
      res.end(); // End the response
    } else {
      // project does exist already, this is a re-categorization
      console.error("this project already exists", categorizationRequest);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
    res.end(); // Ensure the response is properly terminated
  }
}
