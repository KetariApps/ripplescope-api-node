import { RecentlyCreatedProject } from '../links/types.js';

const stringifyProject = (project: RecentlyCreatedProject) =>
  `Project:\n${project.name}\n${project.considerations
    .map(({ details, name }) => `${name}\n${details}`)
    .join('\n')}`;

export default stringifyProject;
