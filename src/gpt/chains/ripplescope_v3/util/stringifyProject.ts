import { connectScopes } from '../links/index.js';

const stringifyProject = (project: Awaited<ReturnType<typeof connectScopes>>) =>
  `Project:\n${project.name}\n${project.considerations
    .map(({ details, name }) => `${name}\n${details}`)
    .join('\n')}`;

export default stringifyProject;
