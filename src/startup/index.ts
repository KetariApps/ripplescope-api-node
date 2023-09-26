import { addConstraints } from './addConstraints.js';
import { insertScopes } from './insertScopes.js';

(async () => {
  try {
    await addConstraints();
    await insertScopes();
  } catch (error) {
    console.error(error);
  }
})();
