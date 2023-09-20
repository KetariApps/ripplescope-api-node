import { GraphQLClient } from 'graphql-request';
import { updateProjects } from '../../../../../db/mutation/project/update.js';
import { ProjectStatusName } from '../../../../../__generated__/graphql.js';
import { RecentlyCreatedProject } from '../../types.js';

export default async function ripplescopeError(
  project: RecentlyCreatedProject,
  error: any,
  client: GraphQLClient,
) {
  const errorStatus = ProjectStatusName.RippleChainError;
  const updateProjectsMutation = await client.request(updateProjects, {
    where: { id: project.id },
    connectOrCreate: {
      statuses: [
        {
          where: {
            node: { name: errorStatus },
          },
          onCreate: {
            node: { name: errorStatus },
            edge: { dump: JSON.stringify(error) },
          },
        },
      ],
    },
  });
  const updatedProject = updateProjectsMutation.updateProjects.projects[0];
  return updatedProject;
}
