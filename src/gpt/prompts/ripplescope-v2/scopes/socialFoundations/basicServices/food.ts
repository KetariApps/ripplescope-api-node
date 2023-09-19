import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../../__generated__/graphql.js";
import { ImpactArea } from "../../../../../../types.js";

const name = "Food";
const dbName = "food";
const description =
  "Ensuring that everyone has access to sufficient, safe, and nutritious food to maintain a healthy life.";
const stakeholders = "local farmers, food distribution networks";
const questions = `What is the community's current food security? How might the initiative enhance local food production and nutrition?
What is the status and extent of regional and national food security in the initiative's region and community? How does the project/initiative aim to contribute to food security in the area?
What is the status and extent of regional and national nutritional security in the initiative's region and community? How does the project/initiative address nutritional challenges and promote better nutrition among the population?
How many hectares of arable land will this project/initiative require your organization to buy or occupy? How does the project ensure responsible land use to minimize adverse impacts on food production and agricultural activities?
In what ways could your project/initiative positively impact food security and nutritional security in the initiative's region and community? Are there any specific programs or activities focused on enhancing food availability, accessibility, and affordability?
In what ways could your project/initiative negatively impact food or nutritional security in the initiative's region and community? What actions will be taken to mitigate potential adverse effects on food and nutrition?
Does the initiative/project promote sustainable agricultural practices, such as agroecology, permaculture, or organic farming, to enhance food production while preserving the environment?
How does the initiative/project engage with local farmers and food producers to support their livelihoods and strengthen the local food system?
Are there any efforts to incorporate climate-resilient crop varieties and agricultural techniques to adapt to changing environmental conditions and safeguard food security?
Does the initiative/project collaborate with local communities and relevant stakeholders to design and implement food security and nutrition-focused projects that align with their needs and priorities?
How is data collected and monitored to assess the impact of the initiative/project on food security, nutrition, and agricultural practices in the region?`;
const context = `Food and nutritional security are vital considerations when planning an initiative. Food security encompasses food availability, access, utilization, and stability, while nutritional security includes access to nutrient-rich diets. Conducting a thorough assessment of regional food security is essential to understand challenges and opportunities for potential impacts.
The use of arable land by the initiative is a significant concern, as it can affect local food production and security. Converting arable land disrupts agricultural practices, leading to economic difficulties and increased vulnerability to food insecurity for local communities.
The initiative's impact on food and nutritional security can be positive or negative. Negative impacts may arise from changes in land use or resource competition. In such cases, developing and implementing mitigating strategies is crucial to address potential negative effects. 
Assessing the initiative's potential impacts on food and nutritional security ensures it does not unintentionally contribute to food insecurity and offers opportunities to strengthen local food systems and community well-being. By considering these factors, the initiative upholds its commitment to social responsibility and sustainability, positively contributing to community resilience and development.`;
const initiatives = `Collaborate with Local Agriculture: Work with local farmers for sustainable practices, boosting food production.
Prioritize Sustainable Land Use: Preserve arable land, emphasizing local food production.
Provide Diverse Food Sources: Offer nutrient-rich diet options for employees.
Minimize Food Waste: Reduce waste, promote responsible consumption.
Mitigate Negative Impacts: Counteract adverse effects on local food systems.
Engage the Community: Involve locals in food-related decisions.
Educate on Nutrition: Promote healthy eating through awareness programs.
Enhance Food Access: Partner with local suppliers for nutritious options.`;
const Food: ImpactArea = {
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
export default Food;
