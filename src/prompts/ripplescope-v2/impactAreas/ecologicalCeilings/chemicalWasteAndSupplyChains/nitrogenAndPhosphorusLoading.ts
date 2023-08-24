import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../gql/graphql.js";
import { ImpactArea } from "../../../../../types.js";

const name = "Nitrogen and Phosphorus Loading";
const dbName = "nitrogen_and_phosphorous_loading";
const description =
  "Managing nutrient inputs into ecosystems to avoid excessive nutrient enrichment and related environmental problems.";
const stakeholders = "";
const questions = `What is the extent to which the initiative employs synthetic fertilizer in its activities, and what is the annual or periodic usage volume?
How does the initiative ensure the proper and responsible application of synthetic fertilizer to minimize negative environmental impacts, such as water pollution and soil degradation?
Are there any efforts in place to monitor and measure the amount of synthetic fertilizer used, as well as its potential runoff and impact on nearby water bodies or ecosystems?
Does the initiative provide training or support to farmers or stakeholders on the appropriate and sustainable use of synthetic fertilizers to promote soil health and reduce ecological risks?
How does the use of synthetic fertilizer align with the initiative's broader sustainability goals and commitment to environmental stewardship?
Are there any initiatives or research projects exploring alternatives to synthetic fertilizers that could reduce environmental impacts while maintaining productivity?
What steps are taken to ensure the accessibility and affordability of sustainable fertilization practices for small-scale farmers or economically disadvantaged communities?
How does the initiative engage with local communities and stakeholders to raise awareness about the potential environmental and health effects of synthetic fertilizer use?
Is there any consideration given to the sourcing of synthetic fertilizers, such as looking for suppliers with responsible manufacturing practices and reduced environmental impacts?
How does the initiative address the potential social and economic consequences of synthetic fertilizer use, such as impacts on local livelihoods or food security?`;
const context = `Using synthetic fertilizers in any initiative brings to light a balance between productivity and environmental responsibility. While enhancing crop yield, their application can inadvertently lead to environmental challenges, such as water pollution and soil degradation. Therefore, an initiative's approach to synthetic fertilizer usage reflects its commitment to agriculture and the environment.
Monitoring the amount and impact of synthetic fertilizers is not merely a metric—it's a proactive step in gauging and mitigating potential harm to ecosystems. Training farmers amplifies the ripple effect of responsible usage, ensuring that the knowledge trickles down to where it's needed most.
Aligning fertilizer use with sustainability goals provides a holistic view of an initiative's environmental ethos. Research into alternatives signifies foresight, signaling a willingness to adapt and reduce environmental footprints. By ensuring the accessibility of sustainable practices, the initiative demonstrates an inclusive approach, empowering small-scale farmers and vulnerable communities.
Engaging local stakeholders is a bridge-building exercise, fostering trust and shared knowledge. A discerning eye towards sourcing reflects an initiative's broader consideration for global ecological impacts, extending responsibility beyond immediate operations. Addressing the socio-economic implications ensures that advancements in agricultural practices don't compromise community welfare or food security, cementing the initiative's role as a conscientious stakeholder.`;
const initiatives = `Proper Application: Implement synthetic fertilizer responsibly, minimizing environmental impacts through precise usage and best practices.
Monitoring Usage: Measure fertilizer amounts and potential runoff via water quality tests and soil analysis.
Training and Support: Provide sustainable synthetic fertilizer guidance to farmers and stakeholders.
Sustainability Goals: Align fertilizer use with broader goals, set reduction targets, and explore alternatives.
Accessibility and Affordability: Ensure access to affordable sustainable fertilization for small-scale farmers and disadvantaged communities.
Engaging Local Communities: Raise awareness about fertilizer's environmental and health effects among communities.
Responsible Sourcing: Source fertilizers from environmentally responsible suppliers.
Addressing Socio-Economic Consequences: Assess and mitigate fertilizer's impact on livelihoods and food security.`;

const NitrogenAndPhosphorusLoading: ImpactArea = {
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
export default NitrogenAndPhosphorusLoading;
