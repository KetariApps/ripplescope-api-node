import { GraphQLClient } from 'graphql-request';
import { createProjects } from '../../../../../db/mutation/project/create.js';
import { ProjectCreateInput } from '../../../../../__generated__/graphql.js';
import { NewProjectInput } from '../types.js';

export default async function createProject(
  projectDetails: NewProjectInput,
  client: GraphQLClient,
) {
  const { name, website, considerations } = projectDetails;
  const input: ProjectCreateInput = {
    name,
    website,
    considerations: {
      create: considerations,
    },
  };
  const createProjectsMutation = await client.request(createProjects, {
    input,
  });
  return createProjectsMutation.createProjects.projects[0];
}
