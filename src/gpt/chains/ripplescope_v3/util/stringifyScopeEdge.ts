import { ConnectedScopeEdge } from '../types.js';

const stringifyScopeEdge = (scopeEdge: ConnectedScopeEdge) =>
  `Scope:\n${scopeEdge.node.name}\n${scopeEdge.node.brief}\n\n${
    scopeEdge.node.basis
  }\n\n${scopeEdge.node.description}\n\n${scopeEdge.aspect}\n${
    scopeEdge.reason
  }\n\n${
    scopeEdge.node.considerations.length > 0
      ? scopeEdge.node.considerations
          .map((consideration) => `${Object.values(consideration).join('\n')}`)
          .join('\n\n')
      : null
  }`;
export default stringifyScopeEdge;
