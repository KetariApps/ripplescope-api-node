import { GPT_Scope } from '../links/types.js';

const stringifyScope = (scope: GPT_Scope) =>
  `Scope:\n${scope.name}\n${scope.description}`;
export default stringifyScope;
