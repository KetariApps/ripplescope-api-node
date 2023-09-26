import { exit } from 'process';
import { addConstraints } from './addConstraints.js';
import { insertScopes } from './insertScopes.js';

await addConstraints();
await insertScopes();
exit();
