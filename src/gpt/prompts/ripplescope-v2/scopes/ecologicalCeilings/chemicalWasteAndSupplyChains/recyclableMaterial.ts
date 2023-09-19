import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../../__generated__/graphql.js";
import { ImpactArea } from "../../../../../../types.js";

const name = "Recyclable Materials";
const dbName = "recyclable_materials";
const description =
  "The production of man-made waste material, including technological/e-waste.";
const stakeholders = "";
const questions = `What types of man-made waste material, including technological/e-waste, does the initiative/project create through its activities?
Is any of this material considered hazardous or harmful to people or the environment in any way? If so, how, and what efforts are being made to address this?
Does this initiative/project involve the extensive use of glass or other recyclable/reusable materials to reduce the generation of non-recyclable waste?
Does this initiative/project involve the use of single-use plastics or other non-biodegradable materials? If so, how are efforts made to minimize their use or promote sustainable alternatives?
What is the quantity and ratio of recyclable and non-recyclable waste generated through the initiative/project's activities per month/year?
How does the initiative/project minimize its non-recyclable waste production, and what waste reduction strategies are in place?
What recycling measures/activities does the initiative/project undertake to ensure proper management of recyclable materials?
How does the initiative/project support the circular economy by incorporating waste reduction, reuse, and recycling practices into its operations?
Does the initiative/project partner with any specialist organizations or bodies related to waste reduction, reuse, or recycling to enhance its waste management practices?
Are there any initiatives to educate employees, stakeholders, and local communities about waste separation, recycling, and the importance of reducing waste generation?
How does the initiative/project evaluate and monitor the effectiveness of its waste management practices in reducing both recyclable and non-recyclable waste?`;
const context = `Efficient waste management is pivotal to ecological sustainability and human health. Identifying and addressing the hazardous waste an initiative produces reflects a genuine commitment to responsible operations. Leveraging recyclable materials like glass emphasizes forward-thinking practices aimed at minimizing environmental footprints.
The extensive use of single-use plastics or non-biodegradable materials can have lingering environmental consequences. Responsible initiatives work towards minimizing these materials or advocating sustainable alternatives. Knowing the quantity and ratio of waste types is fundamental for setting and monitoring reduction targets.
By minimizing non-recyclable waste and emphasizing recycling practices, an initiative aligns with the global push towards a circular economy, reducing resource consumption and environmental impact. Collaboration with specialized organizations amplifies the potential to develop advanced waste management practices.
Education on waste management refines internal operations and empowers communities to join the effort. Continuous evaluation of waste management practices ensures adaptability and efficiency, securing a greener footprint for today and a healthier planet for the future.
Identify and Address Hazardous Waste: Conducting waste audits and assessments to identify hazardous waste produced by the initiative. Implementing proper disposal and treatment methods for hazardous materials, in compliance with environmental regulations, ensures responsible waste management.`;
const initiatives = `Utilize Recyclable Materials: Actively source and use recyclable materials in operations and products.
Reduce Single-Use Plastics and Non-Biodegradable Materials: Offer alternatives like reusable containers or biodegradable packaging to customers and employees.
Track Waste Types: Regularly measure and monitor waste generation as a baseline for waste reduction targets.
Foster Circular Economy: Implement closed-loop recycling systems, recycling materials for new products.
Partner with Experts: Collaborate with waste management organizations for advanced practices.
Educate and Train: Provide waste management education to employees, suppliers, and local communities.
Opt for Sustainable Packaging and Design: Use eco-friendly materials, reduce excessive packaging, and design products for easy recycling.
Involve Stakeholders: Engage employees, customers, and communities in waste management efforts.`;

const RecyclableMaterial: ImpactArea = {
  impactAreaCategory: ImpactCategoryName.ChemicalWasteAndSupplyChains,
  doughnutCategory: DoughnutCategoryName.Ecological,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default RecyclableMaterial;
