import { addConstraints } from './addConstraints.js';
import { insertScopes } from './insertScopes.js';

(async () => {
  await addConstraints();
  await insertScopes();
})();
