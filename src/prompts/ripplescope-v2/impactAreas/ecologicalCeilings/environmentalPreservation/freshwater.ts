import {
  DoughnutCategory,
  ImpactArea,
  ImpactAreaCategory,
} from "../../../../../types.js";

const name = "Freshwater";
const dbName = "freshwater";
const description =
  "Safeguarding freshwater resources to ensure availability for drinking, sanitation, agriculture, and ecosystems.";
const stakeholders = "water resource authorities, environmental consultants";
const questions = `How can the initiative promote sustainable water practices that align with local water needs?
What is the amount of water the initiative consumes per day?
When water is released from the initiative's site, does it contain additional or fewer components than when it entered the site?
Are any additional substances considered dangerous, according to the country's environmental regulations, or in the absence of such regulations, those of the US EPA?
What is the water consumption classification for this project?
How many Project/Program activities are aimed at improving water quality for consumption?
Does the initiative have any activities focused on flood mitigation or water regulation?
What is the source of water for the initiative, and how does it affect local water availability and sustainability?
How does the initiative/project address water recycling, reuse, or rainwater harvesting to minimize freshwater consumption?
What is the projected water demand and supply for the initiative, and how does it align with the availability of water resources in the region?
Are there any water-efficient technologies or practices implemented to optimize water use and reduce wastage?
How does the initiative/project assess and monitor the impact of its activities on local freshwater levels and water quality?`;
const context = `Water stewardship is integral to any project's sustainable and ethical footprint. The quantity of water consumed daily by an initiative directly correlates to its impact on the environment, especially in water-scarce regions. The purity and composition of water post-utilization are telltale indicators of environmental care; introducing harmful substances could disrupt ecosystems and jeopardize public health.
The project's classification in terms of water consumption lays bare its sustainability quotient, guiding stakeholders in making informed decisions. The initiative showcases its proactive approach towards community welfare and ecological balance by embarking on activities that enhance water quality or tackle flooding.
The origin of the initiative's water supply and its implications for local water sustainability is paramount; tapping into scarce resources can strain local ecosystems and communities. Innovative measures like water recycling, rainwater harvesting, and efficient technologies exhibit a project's commitment to minimizing its freshwater footprint.
Forecasting water demand and supply ensures preparedness and alignment with the region's water abundance. Implementing and monitoring effective water-efficient practices and assessing impacts on local water levels demonstrates a holistic approach to responsible water management.`;
const initiatives = `Source of Water and Sustainability: Evaluate the current and projected water source status under climate change conditions; select initiative sites where freshwater extraction will not harm community supplies in the long or short term; project water demand and align with regional resources.
Assess and Reduce Water Consumption: Measure and track daily water consumption and the project's water consumption classification; implement water-saving technologies such as rainwater harvesting and water recycling to reduce usage.
Monitoring Impact on Freshwater: Establish a monitoring system for informed decisions and corrective actions.
Responsible Water Discharge: Ensure water discharge meets environmental regulations and poses no risks; treat and remove harmful substances to improve water quality for consumption and prevent pollution.
Flood Mitigation and Water Regulation: Engage in flood mitigation and collaborate with authorities and communities to regulate water use responsibly.`;

const Freshwater: ImpactArea = {
  impactAreaCategory: ImpactAreaCategory.ENVIRONMENTAL_PRESERVATION,
  doughnutCategory: DoughnutCategory.ECOLOGICAL_CEILINGS,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default Freshwater;
