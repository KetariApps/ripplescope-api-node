import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../../__generated__/graphql.js";
import { ImpactArea } from "../../../../../../types.js";
const name = "Climate Change";
const dbName = "climate_change";
const description =
  "Limiting global temperature rise and addressing the impacts of climate change to avoid severe disruptions to ecosystems and societies.";
const stakeholders = "energy providers, renewable energy industry";
const questions = `What are the opportunities and challenges in transitioning to renewable energy?
How can the initiative facilitate this transition?
What is the energy consumption classification for the initiative/project, and what percentage of the energy used is derived from renewable sources?
Does the initiative/project require the use of air or ground transport? If so, do those methods of transport use low-carbon fuel? Additionally, what is the weight of the products transported, and are efforts made to optimize transportation efficiency?
What is the average monthly fuel usage for initiative/project activities, and are measures in place to track and reduce fuel consumption over time?
How many initiative/project activities employ sustainable practices such as solar power electrification, water purification, hydroponic and polybag agriculture, water hydrant and well development, and fire response?
Does this project use Direct Air Capture technology for carbon removal? If so, how is its effectiveness and environmental impact monitored and assessed?
How many tons of CO2 are expected to be removed from the air over the project's lifespan, and what mechanisms are in place to ensure accurate measurement and reporting?
The carbon removal/offsets presented under this initiative/project are: real, measurable/quantifiable, permanent, additional, independently verified, and unique. Please indicate which of these characteristics apply.
Does the initiative/project include activities aimed at producing renewable solar energy, carbon-neutral or near-carbon-neutral synthetic fuel, or other forms of low-carbon energy? If so, how are the environmental benefits and effectiveness of these activities monitored and evaluated?
Are there measures in place to reduce greenhouse gas emissions associated with the initiative/project, such as energy-efficient technologies, waste reduction strategies, and sustainable land use practices?
How does the initiative/project collaborate with relevant stakeholders and organizations to stay updated on emerging climate-related technologies and best practices for minimizing its carbon footprint?`;
const context = `The energy choices an initiative makes have broad implications for the environment. Determining where the energy comes from, particularly the fraction from renewable sources, is vital for gauging its eco-friendliness. The way products are transported, the weight moved, and the efforts to make this transport efficient play crucial roles in environmental impact.
Regularly checking fuel use and pushing for reductions can lower the initiative's carbon footprint. Incorporating sustainable practices through green energy or innovative agricultural techniques signals a commitment to environmental stewardship. If Direct Air Capture technology is used, its efficiency and broader implications are crucial to ensure real climate benefits.
Accurate measurement and reporting of CO2 removal demonstrate transparency and commitment. The real test of an initiative's green credentials is whether its carbon offsets meet stringent standards. Exploring renewable energy options and emphasizing GHG reduction further emphasizes this dedication. Finally, collaboration is key. By working with experts and staying updated on the latest technologies, an initiative can ensure it's truly working towards a greener future.`;
const initiatives = `Renewable Energy Usage: Use a significant portion (over 50%) of energy from renewable sources like solar panels and wind turbines to power activities.
Low-Carbon Transport: Opt for low-carbon fuels and lighter shipments for air or ground transport to minimize carbon emissions.
Fuel Consumption Tracking and Reduction: Track and decrease fuel usage by monitoring data and promoting eco-driving practices.
Direct Air Capture Technology: Monitor effectiveness and environmental impact of Direct Air Capture carbon removal technology.
Accurate Carbon Removal Measurement: Ensure precise measurement and reporting of CO2 removal, using reliable data collection techniques and transparent reporting.
Carbon Removal/Offsets Characteristics: Present genuine, measurable, permanent, additional, verified, and unique carbon removal/offsets.
Collaboration for Best Practices and Improvement: Collaborate with stakeholders, stay updated on climate-related technologies, conduct energy audits, analyze data, and adapt strategies.`;

const ClimateChange: ImpactArea = {
  impactAreaCategory: ImpactCategoryName.Atmosphere,
  doughnutCategory: DoughnutCategoryName.Ecological,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default ClimateChange;
