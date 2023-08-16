import {
  DoughnutCategory,
  ImpactArea,
  ImpactAreaCategory,
} from "../../../../../types.js";

const name = "Chemical Pollution";
const dbName = "chemical_pollution";
const description =
  "The usage or production of herbicides, pesticides, volatile chemicals, organic compounds/pollutants, heavy metal compounds, and radioactive materials.";
const stakeholders = "";
const questions = `To what extent does the initiative/project employ or produce herbicides, pesticides, volatile chemicals, organic compounds/pollutants, heavy metal compounds, and radioactive materials?
How does the initiative ensure the safe handling, storage, and disposal of hazardous materials to prevent environmental contamination and harm to human health?
What measures are in place to monitor and assess the potential environmental and social impacts of using these substances throughout the project's lifecycle?
Are there any alternative, more environmentally friendly methods or technologies considered or implemented to reduce the use of hazardous chemicals and compounds?
How does the initiative prioritize the use of safer, non-toxic alternatives to mitigate potential risks associated with herbicides, pesticides, and other hazardous materials?
What efforts are made to communicate and educate employees, contractors, and local communities about the proper handling and potential risks of these substances?
Are there any initiatives to promote the adoption of integrated pest management techniques or organic farming practices to reduce the reliance on synthetic chemicals?
How does the initiative manage waste disposal, particularly concerning hazardous materials, to prevent the pollution of oceans and other sensitive ecosystems?
Are there any partnerships or collaborations with specialized organizations or experts in chemical management and environmental protection to enhance best practices?
How does the initiative/project track and report on the use and impact of hazardous materials to ensure transparency and accountability for its environmental and social responsibilities?`;
const context = `Chemical management is a critical aspect of sustainability, safety, and environmental stewardship. When an initiative interacts with potent substances like herbicides, pesticides, or volatile chemicals, it inherently assumes a significant responsibility. Their potential environmental and health effects make it essential for any project to assess their use and impact meticulously.
The commitment to safe handling, storage, and disposal isn't just procedural—it's a reflection of an initiative's responsibility towards ecosystems and communities. Monitoring these substances throughout a project's lifecycle is paramount to gauge real-world impacts against theoretical assessments.
Adopting environmentally friendly alternatives underscores proactive environmental thinking. Prioritizing non-toxic alternatives further reduces the potential for ecological damage and health risks. Beyond internal measures, equipping and educating employees and communities about these substances is an investment in collective safety.
Initiatives that consider integrated pest management or organic farming not only minimize environmental footprints but also position themselves as pioneers in sustainable practices. Proper waste disposal, especially of hazardous materials, directly protects our oceans and ecosystems, emphasizing the criticality of such actions.
Collaborations with specialized entities bring expertise into the fold, enhancing safety protocols and risk management. Transparently tracking and reporting these interactions solidify an initiative's dedication to its ethical, environmental, and social commitments.`;
const initiatives = `Safe Handling, Storage, Disposal: Follow strict protocols for safe handling, storage, and disposal of hazardous materials to prevent environmental contamination and safeguard human health. This includes using specialized containers, designated storage areas, and adhering to disposal regulations.
Monitoring and Impact Assessment: Regularly monitor and assess the environmental and social impacts of hazardous substances throughout the project's lifecycle.
Alternative Eco-Friendly Methods: Explore and implement environmentally friendly techniques or technologies like integrated pest management or organic farming to reduce hazardous chemical use.
Prioritize Safer Alternatives: Give priority to non-toxic alternatives over hazardous materials like herbicides and pesticides to minimize associated risks.
Education and Communication: Educate employees, contractors, and communities about proper hazardous substance handling and potential risks.
Promote Sustainable Practices: Initiate efforts to promote integrated pest management and organic farming practices.
Partnerships and Expert Collaboration: Collaborate with specialized organizations and experts in chemical management and environmental protection for enhanced best practices.
Transparency and Reporting: Transparently report chemical usage, environmental monitoring results, and safety measures to build stakeholder trust and demonstrate commitment to responsible chemical management.`;

const ChemicalPolution: ImpactArea = {
  impactAreaCategory: ImpactAreaCategory.CHEMICAL_WASTE_AND_SUPPLY_CHAINS,
  doughnutCategory: DoughnutCategory.ECOLOGICAL_CEILINGS,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default ChemicalPolution;
