import {
  DoughnutCategory,
  ImpactArea,
  ImpactAreaCategory,
} from "../../../../../types.js";

const name = "Networks";
const dbName = "networks";
const description =
  "Fostering social connections and networks that provide support, resources, and opportunities for individuals and communities.";
const stakeholders = "";
const questions = ``;
const context = ``;
const initiatives = ``;

const Networks: ImpactArea = {
  impactAreaCategory: ImpactAreaCategory.SOCIAL_OPPORTUNITIES,
  doughnutCategory: DoughnutCategory.SOCIAL,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default Networks;
