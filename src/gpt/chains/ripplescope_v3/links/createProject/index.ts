import { GraphQLClient } from 'graphql-request';
import { createProjects } from '../../../../../db/mutation/project/create.js';
import { ProjectCreateInput } from '../../../../../__generated__/graphql.js';

export default async function createProject(
  projectDetails: ProjectCreateInput,
  client: GraphQLClient,
) {
  const { name, website, brief, considerations } = projectDetails;
  const input: ProjectCreateInput = {
    name,
    website,
    brief,
    considerations,
  };
  const createProjectsMutation = await client.request(createProjects, {
    input,
  });
  return createProjectsMutation.createProjects.projects[0];
}
