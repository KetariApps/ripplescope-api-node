import { UpdateMiscsMutationVariables } from '../../../../../__generated__/graphql.js';

export const rename = (
  id: string,
  name: string,
): UpdateMiscsMutationVariables => ({
  where: {
    id,
  },
  update: {
    name,
  },
});
