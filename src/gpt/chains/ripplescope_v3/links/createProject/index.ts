import { GraphQLClient } from 'graphql-request';
import { createProjects } from '../../../../../db/mutation/project/create.js';
import { ProjectCreateInput } from '../../../../../__generated__/graphql.js';

export default async function createProject(
  projectDetails: ProjectCreateInput,
  client: GraphQLClient,
) {
  const { name, website, brief, considerations, description } = projectDetails;
  const input: ProjectCreateInput = {
    name,
    website,
    brief,
    description,
    considerations,
  };
  const createProjectsMutation = await client.request(createProjects, {
    input,
  });
  return createProjectsMutation.createProjects.projects[0];
}
