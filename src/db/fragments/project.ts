import { gql } from "../../__generated__/gql.js";

export const projectDetailsFragment = gql(`
fragment ProjectDetails on Project {
  name
  employees
  problem
  solution
  context
}
`);
