import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../../__generated__/graphql.js";
import { ImpactArea } from "../../../../../../types.js";

const name = "Ozone";
const dbName = "ozone";
const description =
  "Protecting the ozone layer in the stratosphere, which shields the Earth from harmful ultraviolet (UV) radiation.";
const stakeholders = "environmental protection agencies, ozone advocates";
const questions = `How important is the protection of the ozone layer viewed by the community?
How can the initiative contribute to preventing ozone depletion?
What is the primary objective of your ozone-related initiative/project, and how does it contribute to environmental and social benefits?
Does this project/program require the use of intensive cooling or a cold chain? If so, please detail the energy sources and their sustainability metrics.
How is ozone generated in your program, and what precautions are taken to minimize its unintentional release into the environment?
What are the potential direct environmental impacts of ozone use in your initiative, both positive and negative?
Are there any byproducts generated from the use of ozone in your program? How are these byproducts managed, and what is their environmental footprint?
How does your program ensure the safety of workers and surrounding communities in relation to ozone exposure?
Have stakeholders, especially local communities, been consulted and engaged in the planning and execution of this ozone-related initiative?
What systems or tools are in place to monitor and measure the environmental and social impacts of your ozone use? Are these findings periodically reviewed and publicly disclosed?
Have you conducted a life cycle analysis to assess the overall environmental impact of your initiative, including raw material sourcing, ozone generation, application, and eventual disposal or decay?
What measures are in place to ensure continuous improvement in environmental and social responsibility as it pertains to ozone use, based on learnings and advancements in technology?`;
const context = `The focus of an ozone-centered initiative should be clear in its goals and the broader benefits it brings to society and the environment. The energy and cooling methods used should be transparent, emphasizing their sustainability. As ozone generation and use have environmental implications, meticulous care in its management is essential.
Understanding direct impacts and byproducts of ozone use is key for gauging the initiative's full environmental impact. Worker and community safety regarding ozone exposure is paramount, and this responsibility extends to involving local communities in the initiative's processes. Transparent monitoring and public disclosure of impacts ensure accountability.
Comprehensive evaluations, like life cycle analyses, offer insights into the entire environmental footprint of an initiative. Lastly, the initiative should be adaptive, constantly evolving based on new information and technological advancements to ensure the responsible use of ozone.`;
const initiatives = `Sustainable Cooling: For intensive cooling or cold chain needs, use sustainable energy sources like solar or wind power to minimize carbon emissions in cooling systems.
Ozone Generation Management: Prevent ozone release during generation with closed-loop systems, proper ventilation, and containment.
Environmental Impact Assessment: Identify direct environmental effects of ozone use, manage byproducts' footprint, and treat them to minimize ecosystem impact.
Worker and Community Safety: Ensure safety via training, protective gear, and protocols for ozone exposure.
Stakeholder Engagement: Involve local communities and stakeholders in ozone initiative planning and execution.
Impact Monitoring: Implement tools to track ozone's environmental and social effects.
Life Cycle Analysis: Assess overall environmental impact from material sourcing to disposal through life cycle analysis.
Continuous Improvement: Ensure ongoing environmental responsibility by learning from experience, adopting new tech, and staying informed.
Public Disclosure: Regularly share progress, findings, and impacts for accountability and trust.`;

const Ozone: ImpactArea = {
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
export default Ozone;
