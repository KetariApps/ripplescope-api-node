import {
  DoughnutCategory,
  ImpactArea,
  ImpactAreaCategory,
} from "../../../../../types.js";

const name = "Land";
const dbName = "land";
const description =
  "Avoiding overexploitation and degradation of land resources to maintain soil fertility and support agricultural productivity.";
const stakeholders = "land management agencies, local landowners";
const questions = `what are the key land use challenges?
How can the initiative's planning and restoration efforts align with local priorities?
What is/was the status and extent of any environmental degradation of the initiative site before work started? A site might be classified as one of the following: degraded / built infrastructure / healthy agriculture or timberland / natural state with disturbances nearby / natural state with no significant disturbances nearby. Symptoms of degradation often include soil erosion, bare soil, compacted soil, absence of natural vegetation, contaminants in soil or water, bleaching, etc. Disturbances might include heavily trafficked roads, industry, managed agricultural/timberland, or residential areas.
What is/will be the status and extent of any environmental degradation of the initiative site when the initiative is fully operational? 
Does this project/program require your organization to buy or occupy [arable] land? `;
const context = `Understanding an initiative site's current condition and history before starting work is vital for evaluating its environmental impact. A site may range from degraded to natural, with varying disturbances. This condition affects both the project's execution and its ecological consequence.
Identifying degradation signs like soil erosion, compacted soil, vegetation loss, or contamination is crucial. These elements reveal the site's ecological health, guiding its restoration or protection approach. They also hint at the site's biodiversity support, climate change resilience, and ecosystem service potential.
Nearby disturbances, like heavy traffic, industry, or residential areas, can harm local ecosystems. Noise, pollution, and habitat fragmentation from these disturbances can decrease biodiversity and disrupt ecological balance. Recognizing these disturbances helps design mitigation plans and promotes landscape healing.
Once a project is underway, it's essential to consistently assess any environmental harm on the site. This evaluation determines if the initiative has minimized or inadvertently caused further degradation. Continuous assessment facilitates operational adjustments to enhance the project's ecological benefits.
If an initiative involves acquiring arable land, it brings key issues. Converting such land can disrupt local food systems, causing food insecurity and biodiversity loss. However, if the project focuses on ecological restoration, acquiring this land can boost sustainability and support environmental goals.
Overall, being aware of these factors and incorporating them into the project's planning and operation can lead to better environmental outcomes, benefiting the local ecology and communities and the initiative's overall success.`;
const initiatives = `Conduct an Ecological Survey: Employ scientists or a consulting firm to assess species, soil, water, and land history.
Develop a Sustainable Land Use Plan: Prioritize building on degraded land, reducing the initiative's impact on habitats.
Apply Low-Impact Operational Measures: Invest in technology to minimize pollution, schedule work to avoid disturbing wildlife, and set up buffer zones.
Implement Land Restoration Projects: Allocate budget and experts for soil remediation, native plant revegetation, and restoring natural water flows.
Institute Regular Environmental Audits: Schedule independent audits to track impact and suggest improvements.
Create Community Outreach Programs: Involve locals in conservation efforts.
Form Partnerships with Conservation Organizations: Collaborate with conservation groups for advice and support.`;

const Land: ImpactArea = {
  impactAreaCategory: ImpactAreaCategory.ENVIRONMENTAL_PRESERVATION,
  doughnutCategory: DoughnutCategory.ECOLOGICAL,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default Land;
