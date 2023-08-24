import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../gql/graphql.js";
import { ImpactArea } from "../../../../../types.js";

const name = "Oceans";
const dbName = "oceans";
const description = "";
const stakeholders = "";
const context = ``;
const questions = ``;
const initiatives = ``;

const Oceans: ImpactArea = {
  impactAreaCategory: ImpactCategoryName.EnvironmentalPreservation,
  doughnutCategory: DoughnutCategoryName.Ecological,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default Oceans;
