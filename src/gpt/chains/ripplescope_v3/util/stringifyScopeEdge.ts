import { connectScopes } from '../links/index.js';

const stringifyScopeEdge = (
  scopeEdge: Awaited<
    ReturnType<typeof connectScopes>
  >['scopesConnection']['edges'][0],
) =>
  `Scope:\n${scopeEdge.node.name}\n${scopeEdge.node.description}\n\n${
    scopeEdge.aspect
  }\n${scopeEdge.reason}\n${
    scopeEdge.node.considerations.length > 0
      ? scopeEdge.node.considerations
          .map(({ name, details }) => `${name}\n${details}`)
          .join('\n\n')
      : null
  }`;
export default stringifyScopeEdge;
