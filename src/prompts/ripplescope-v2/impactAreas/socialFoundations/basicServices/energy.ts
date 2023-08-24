import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../gql/graphql.js";
import { ImpactArea } from "../../../../../types.js";

const name = "Energy";
const dbName = "water";
const description =
  "Ensuring reliable access to clean and affordable energy sources for meeting basic needs and economic activities.";
const stakeholders = "";
const questions = `What is the current energy cost in the initiative's region, and is energy cost or scarcity expected to change there under climate change?
What is the current level of community electrification and social access to energy in the region, and is this expected to change under climate change impacts?
How does the initiative/project support communities in measuring their energy consumption and carbon footprint?
What efforts does the initiative make to promote energy efficiency within the community?
How does the initiative prioritize supporting communities in their transition to clean, renewable energy sources, reducing their reliance on fossil fuels?
Does the initiative assist the community in planning for a transition to clean, low-carbon electrification?
What sources of clean, renewable energy are available for communities in the region, such as solar, wind, hydro, or geothermal energy?
How does the initiative collaborate with local communities and stakeholders to drive energy conservation and responsible energy use?
If households in the community lack electricity, is the initiative collaborating with local authorities or organizations to facilitate the installation and maintenance of electrification services and promote access to clean energy solutions?
What steps does the initiative take to raise awareness about energy conservation and the advantages of transitioning to clean energy sources among community members and stakeholders?
How does the initiative measure and report progress toward its community-focused clean energy goals and commitments?`;
const context = `A community's ability to harness and optimize its energy resources is pivotal in determining its well-being and future growth. In this era of rapidly changing climates and a global push towards sustainability, understanding the energy landscape is more crucial than ever.
The fluctuating energy costs in any region can indicate underlying vulnerabilities, especially as climate change introduces new uncertainties. Alongside the current electrification level, these costs paint a holistic picture of a community's energy security. An initiative's capacity to guide communities in measuring and understanding their energy consumption and carbon footprint becomes a cornerstone in their path to resilience.
Promoting energy efficiency is not just about conservation—it's about empowering communities with the knowledge and tools to make better energy choices. But the true hallmark of sustainability lies in transitioning to renewable energy sources. For any initiative, prioritizing this transition is not just a move away from fossil fuels—it's a stride toward a cleaner, more sustainable future.
Each region holds unique potential for renewable energy, be it solar, wind, or hydro. Understanding this potential and tapping into it is the key. Collaborative efforts, especially with local communities and stakeholders, amplify the impact of these endeavors, making energy conservation a collective mission.
No household should be left in the dark. Initiatives that bridge the electrification gap and foster access to clean energy solutions are truly transformative. By educating communities about the merits of energy conservation and clean energy adoption, an initiative sets the stage for lasting positive change. Periodic measurement and transparent progress reporting further ensure that energy goals align with community aspirations.`;
const initiatives = `Energy Landscape Assessment: Evaluate the region's current energy cost and availability, future scenarios under climate change, and how these impact communities and the initiative's activities. 
Energy Efficiency Promotion: Launch energy efficiency campaigns and workshops within the community. Educate residents about practical ways to reduce energy consumption and lower costs.
Renewable Energy Transition: Support and collaborate with communities in transitioning to clean, renewable energy sources. Offer financial incentives, technical assistance, and education to facilitate this shift.
Identify Renewable Energy Sources: Assess the availability of clean energy sources like solar, wind, hydro, or geothermal energy in the region. Explore feasibility studies for community-scale projects.
Electrification Outreach: Collaborate with local authorities and organizations to facilitate the installation and maintenance of electrification services in households lacking electricity. Promote access to clean energy solutions.`;
const Energy: ImpactArea = {
  impactAreaCategory: ImpactCategoryName.BasicServices,
  doughnutCategory: DoughnutCategoryName.Social,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default Energy;
