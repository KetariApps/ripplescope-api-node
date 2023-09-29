import { ConnectedScopeEdge } from '../types.js';

const stringifyScopeEdge = ({ aspect, reason, node }: ConnectedScopeEdge) =>
  `Scope:\n${aspect}\n${reason}\n\n${node.name}\n\n${node.brief}\n\n${
    node.basis
  }\n\n${node.description}\n\n${node.stakeholders
    .map(({ name }) => `Stakeholder: ${name}`)
    .join('\n')}\n\n${
    node.considerations.length > 0
      ? node.considerations
          .map((consideration) => `${Object.values(consideration).join('\n')}`)
          .join('\n\n')
      : null
  }`;
export default stringifyScopeEdge;
