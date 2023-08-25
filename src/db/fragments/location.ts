import { gql } from "../../__generated__/gql.js";

export const locationDetailsFragment = gql(`
fragment LocationDetails on Location {
    city
    nation
    state
}
`);
