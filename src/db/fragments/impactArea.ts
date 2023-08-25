import { gql } from "../../__generated__/gql.js";

export const impactAreaDetailsFragment = gql(`
fragment ImpactAreaDetails on ImpactArea {
  name
  description
  questions
  context
}
`);
