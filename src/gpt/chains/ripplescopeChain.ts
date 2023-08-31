import { GraphQLClient } from "graphql-request";
import {
  CategorizationRequestProject,
  ProjectAnalysisGPTResponseItem,
} from "../../types.js";
import categorizeProject from "../categorizeProject.js";
import { createProject } from "../../db/mutations/createProject.js";
import dbName from "../../helpers/dbName.js";
import analyzeProjectImpactArea from "../analyzeProjectImpactArea.js";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import { getImpactAreas } from "../../db/queries/getImpactAreas.js";
import {
  CreateProjectMutation,
  ImpactAreaDetailsFragmentDoc,
  LocationDetailsFragment,
  LocationDetailsFragmentDoc,
  ProjectCreateInput,
  ProjectDetailsFragment,
  ProjectDetailsFragmentDoc,
  ProjectImpactsCreateFieldInput,
  UpdateProjectsMutation,
} from "../../__generated__/graphql.js";
import { useFragment } from "../../__generated__/fragment-masking.js";
import { updateProjects } from "../../db/mutations/updateProject.js";

export const ripplescopeChain = async (
  project: CategorizationRequestProject,
  client: GraphQLClient
) => {
  try {
    //// env stuff
    dotenv.config();
    const { OPENAI_API_KEY } = process.env;
    //// openai stuff
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });

    let createdProject: CreateProjectMutation["createProjects"]["projects"][0];
    let updatedProject: UpdateProjectsMutation["updateProjects"]["projects"][0];
    let updatedProjectDetails: ProjectDetailsFragment;
    let projectLocations: readonly LocationDetailsFragment[];

    // create the project in the database
    const createProjectMutation = await createProject(client, {
      input: createProjectInput(project),
      includeLocations: true,
      includeProjectDetails: true,
    });
    createdProject = createProjectMutation.createProjects.projects[0];
    if (createdProject === undefined) {
      console.log({
        type: "CREATE PROJECT",
        status: "ERROR - could not create project",
        message: createProjectMutation,
      });
      return;
    } else {
      console.log({
        type: "CREATE PROJECT",
        status: "DONE",
        message: createProjectMutation,
      });
    }

    // get the verified impact areas from the database
    const getImpactAreasQuery = await getImpactAreas(client, {
      where: { verified: true },
      includeDetails: true,
    });
    const verifiedImpactAreas = getImpactAreasQuery.impactAreas.map((ia) => ({
      ...ia,
      ...useFragment(ImpactAreaDetailsFragmentDoc, ia),
    }));

    projectLocations = useFragment(
      LocationDetailsFragmentDoc,
      createdProject.locations!
    );

    // categorize the project to the verified impact areas
    const categorizationResponse = await categorizeProject(
      {
        locations: projectLocations,
        ...useFragment(
          ProjectDetailsFragmentDoc,
          createProjectMutation.createProjects.projects[0]
        ),
      },
      verifiedImpactAreas,
      openai
    );
    console.log({
      type: "CATEGORIZE PROJECT",
      status: "DONE",
      message: categorizationResponse,
    });

    // Connect the project to the impact areas that were categorized
    const connectImpactAreasMutation = await updateProjects(client, {
      where: {
        uniqueName: createProjectMutation.createProjects.projects[0].uniqueName,
      },
      includeImpactAreas: true,
      includeImpacts: false,
      includeInfo: false,
      includeLocations: false,
      create: {},
      connectOrCreate: {
        impactAreas: categorizationResponse.map((cr) => ({
          where: {
            node: {
              uniqueName: dbName(cr.name),
            },
          },
          onCreate: {
            edge: {
              description: cr.description,
            },
            node: {
              name: cr.name,
              uniqueName: dbName(cr.name),
              verified: false,
            },
          },
        })),
      },
    });
    updatedProject = connectImpactAreasMutation.updateProjects.projects[0];
    updatedProjectDetails = useFragment(
      ProjectDetailsFragmentDoc,
      updatedProject
    );
    if (updatedProject === undefined) {
      console.log({
        type: "CONNECT IMPACT AREAS TO PROJECT",
        status: "ERROR",
        message: connectImpactAreasMutation,
      });
      return;
    } else if (updatedProject.impactAreasConnection === undefined) {
      console.log({
        type: "CONNECT IMPACT AREAS TO PROJECT",
        status:
          "ERROR - impact areas were not returned from the connection mutation",
        message: connectImpactAreasMutation,
      });
      return;
    } else {
      console.log({
        type: "CONNECT IMPACT AREAS TO PROJECT",
        status: "DONE",
        message: connectImpactAreasMutation,
      });
    }
    const verifiedImpactAreasRelationships =
      updatedProject.impactAreasConnection.edges
        .map((iae) => ({
          description: iae.description,
          node: {
            ...iae.node,
            ...useFragment(ImpactAreaDetailsFragmentDoc, iae.node),
          },
        }))
        .filter((iae) => iae.node.verified === true);

    // perform an analysis on each verified impact area connected to the project
    const updatedProjects = await Promise.allSettled(
      verifiedImpactAreasRelationships.map(async (v_iar) => {
        console.log({
          type: "ANALYZE PROJECT",
          status: "BEGIN",
          impactArea: v_iar,
          project: updatedProject.uniqueName,
        });
        // analyze the benefits and hazards related to the verified impact area
        const analysis = await analyzeProjectImpactArea(
          v_iar.node,
          { ...updatedProjectDetails, locations: projectLocations },
          openai
        );
        console.log({
          type: "ANALYZE PROJECT",
          status: "DONE",
          message: analysis,
        });

        const connectImpactsMutation = await updateProjects(client, {
          where: {
            uniqueName: updatedProject.uniqueName,
          },
          includeImpactAreas: false,
          includeImpacts: true,
          includeInfo: true,
          includeLocations: true,
          connectOrCreate: { impactAreas: [] },
          create: {
            impacts: [
              ...analysis.project.benefits.map((benefit) =>
                createImpactInputFromAnalysisResponseItem(
                  benefit,
                  v_iar.node.uniqueName,
                  "benefit"
                )
              ),
              ...analysis.project.hazards.map((hazard) =>
                createImpactInputFromAnalysisResponseItem(
                  hazard,
                  v_iar.node.uniqueName,
                  "hazard"
                )
              ),
            ],
          },
        });

        return connectImpactsMutation;
      })
    );
    return updatedProjects;
  } catch (error) {
    console.error(error);
  }
};

const createProjectInput = (
  project: CategorizationRequestProject
): ProjectCreateInput[] => [
  {
    context: project.context,
    employees: project.employees,
    uniqueName: dbName(project.name),
    solution: project.solution,
    problem: project.problem,
    verified: false,
    website: project.website,
    name: project.name,
    locations: {
      connectOrCreate: project.locations.map((l) => {
        const uniqueName = dbName(
          `${l.city}:${l.state ? l.state + ":" : ""}${l.nation}`
        );
        return {
          onCreate: {
            node: {
              uniqueName,
              state: l.state,
              nation: l.nation,
              city: l.city,
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
];

const createImpactInputFromAnalysisResponseItem = (
  analysisResponseItem: ProjectAnalysisGPTResponseItem,
  impactAreaUniqueName: string,
  type: "benefit" | "hazard"
): ProjectImpactsCreateFieldInput => {
  const { name, score, reason, aspect } = analysisResponseItem;
  return {
    node: {
      name,
      verified: false,
      impactArea: {
        connect: {
          edge: {
            score: type === "benefit" ? Number(score) : -1 * Number(score),
            reason,
            aspect,
          },
          where: {
            node: {
              uniqueName: impactAreaUniqueName,
            },
          },
        },
      },
    },
  };
};
