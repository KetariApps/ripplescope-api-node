import { ProjectWithScopes, RecentlyCreatedProject } from '../types.js';

const stringifyProject = (
  project: ProjectWithScopes | RecentlyCreatedProject,
) =>
  `Project:\n${project.name}\n${project.considerations
    .map((consideration) => `${Object.values(consideration).join('\n')}`)
    .join('\n')}`;

export default stringifyProject;
