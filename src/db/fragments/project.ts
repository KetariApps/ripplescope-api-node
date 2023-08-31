import { gql } from "../../__generated__/gql.js";

export const projectDetailsFragment = gql(`
fragment ProjectDetails on Project {
  website
  verified
  name
  problem
  solution
  employees
  context
}
`);
