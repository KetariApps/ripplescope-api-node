import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../gql/graphql.js";
import { ImpactArea } from "../../../../../types.js";

const name = "Supply Chain";
const dbName = "supply_chain";
const description =
  "Supply chain responsibility, including implementing ethical practices, fair labor conditions, and environmental considerations.";
const stakeholders = "";
const questions = `How does the initiative/project ensure supply chain responsibility, including implementing ethical practices, fair labor conditions, and environmental considerations across its supply chain?
Are there established environmental and social standards that suppliers within the initiative's activities must adhere to, promoting responsible practices and ethical conduct?
What measures are in place to trace the source materials used in the initiative's products, ensuring they are sustainably sourced, ethically produced, and do not contribute to deforestation or habitat destruction?
How does the initiative/project work to reduce transportation impacts within its supply chain, such as optimizing transportation routes, using low-carbon modes of transport, or supporting local sourcing?
What strategies does the initiative/project employ to minimize resource utilization within its activities, such as efficient water management, reduced energy consumption, and waste reduction?
Are there partnerships or collaborations with local communities and indigenous groups to ensure that raw materials are sourced in a manner that respects traditional land use, rights, and cultural values?
What initiatives are in place to promote the responsible use of potentially hazardous or harmful materials, such as agrochemicals, fertilizers, and pesticides within the initiative's supply chain?
How does the initiative/project measure and track its progress in terms of sustainable sourcing of inputs, and what mechanisms are in place for continuous improvement?
Are there efforts to engage with consumers, stakeholders, and local communities to raise awareness about the initiative's commitment to sustainable sourcing, responsible practices, and its activities' positive social and environmental impacts?
Does the initiative/project invest in, or otherwise support the research/development of green technology or sustainable solutions at any point along its supply chain?`;
const context = `To truly champion sustainability, an initiative must extend its vision beyond production and consider the entirety of a product's lifecycle, from its very origin to the consumer's hands. Central to this comprehensive view is the need for an unwavering commitment to supply chain responsibility. This demands a strong emphasis on ethical practices, ensuring fair labor, and clear environmental considerations at every step.
Holding suppliers to rigorous environmental and social standards is a necessity. Every initiative should ensure its suppliers resonate with these standards to build trust and demonstrate genuine commitment. Tracing the roots of source materials is vital, not just for transparency but to guarantee a minimal environmental footprint, ensuring that practices do not contribute to deforestation or ecological harm.
Engaging with local communities and indigenous groups goes beyond sourcing, recognizing and respecting their rights, land use, and cultural heritage. It's also crucial that an initiative takes a proactive stance on potentially harmful materials, focusing on sustainable alternatives. Investing in the development of sustainable solutions or green technologies can bring benefits throughout the supply chain.
Finally, transparency should never be an afterthought. Every initiative should measure its progress in sustainable sourcing and set mechanisms for continuous improvement. Engaging stakeholders, consumers, and local communities can amplify the initiative's positive impact, making sustainability a shared journey for all.`;
const initiatives = `Establish Ethical Supply Chain Standards: Set clear standards for ethical practices, fair labor conditions, and environmental concerns throughout the supply chain; regularly monitor and audit for adherence.
Traceable Source Materials: Implement methods to trace origin of materials, using certifications like Forest Stewardship Council (FSC) for responsible forestry.
Reduce Resource Use and Transportation Impact: Optimize transportation, prioritize low-carbon transport, and support local sourcing to minimize supply chain transportation effects; adopt efficient water management, lower energy consumption, and waste reduction.
Community and Stakeholder Partnerships: Collaborate with local communities, Indigenous groups, and stakeholders to ethically source raw materials, respecting traditional land use, rights, and cultural values.
Responsible Handling of Hazardous Materials: Develop initiatives to ensure responsible use of potentially harmful materials in the supply chain.
Transparent Communication: Communicate transparently about sourcing, supply chain actions, and progress, such as through product labeling, websites, and marketing to inform consumers of responsible options.`;

const SupplyChain: ImpactArea = {
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
export default SupplyChain;
