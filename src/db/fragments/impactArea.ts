import { gql } from "../../__generated__/gql.js";

export const impactAreaDetailsFragment = gql(`
fragment ImpactAreaDetails on ImpactArea {
  verified
  name
  description
  questions
  context
}
`);
