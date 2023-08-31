import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../../__generated__/graphql.js";
import { ImpactArea } from "../../../../../../types.js";

const name = "Biodiversity";
const dbName = "biodiversity";
const description =
  "Preserving a variety of species and genetic diversity to ensure the resilience of ecosystems and their ability to adapt to changes.";
const stakeholders = "environmental NGOs, conservation experts";
const questions = `How is the state of local biodiversity and ecosystem health?
How might the initiative contribute to their preservation?
What natural ecosystem type exists in the initiative's primary areas of activity?
Does this initiative/project involve or require reforestation/tree planting, ecosystem conservation, promotion of native crop/animal species, reserve management, conservation education, or similar?
Approximately how many trees will be removed during the project duration, and how many species will be represented by the trees removed?
Approximately how many trees will be established during the project, and how many species will be represented by the trees added?
Approximately how many coral reefs or other marine environments will be removed for the purposes of this project/program?
How many threatened species are at risk due to the initiative/project's activities?
How many threatened species could be reintroduced once operations are underway, or once operations have ceased?
What activities are aimed at diversification of ecosystems?
How many initiative/project activities are aimed at the protection or restoration of natural forests at risk of land conversion, natural forest at risk of fires, wildlife, swamps, flooded forests, dry forests, cloud forests, paramo, or other threatened ecosystems?
Do any of the initiative/project activities provide ecosystem services for timber and non-timber forest products or alternative activities to timber production?
What measures does the initiative/project have in place to mitigate the impact on endangered or threatened species within its operational area?
How does the initiative/project promote sustainable land-use practices that protect biodiversity, such as habitat restoration, buffer zones, or wildlife corridors?
What efforts are made to monitor and assess the changes in biodiversity over time as a result of the project's activities?
Are there any initiatives in place to engage local communities in biodiversity conservation efforts and raise awareness about the importance of protecting local ecosystems?
How does the initiative/project address potential indirect impacts on biodiversity, such as pollution, habitat fragmentation, or changes in local water bodies?`;
const context = `The environmental impact of any project is critical in the face of the climate crisis and biodiversity loss. Initiatives must not only mitigate negative effects but also restore and conserve the natural world. This can be achieved through reforestation, ecosystem conservation, promotion of native species, reserve management, and conservation education.
Tree removal or addition significantly affects local ecosystems, altering biodiversity and carbon sequestration. Understanding these changes helps assess the project's impact. Similarly, considering the effects on marine ecosystems, like coral reefs, is vital for marine biodiversity and local communities.
Reintroducing threatened species to their habitats enhances biodiversity and ecological resilience, preventing species loss. The high rate of species extinction makes this crucial. Protecting ecosystems such as wetlands, dams, and mangroves is essential for biodiversity preservation, water purification, carbon sequestration, and local communities' livelihoods.
Projects providing ecosystem services and alternatives to timber production are vital for sustainable forest management and reducing deforestation. These considerations ensure long-term sustainability and harmony with the natural environment.
Assessing and addressing the environmental impacts of a project or program is not just good ethics; it is a good strategy. Understanding the ways in which your initiative interacts with the natural world will allow you to anticipate challenges, mitigate risks, and maximize positive impacts, leading to greater overall success in your endeavors.`;
const initiatives = `Biodiversity Impact Assessment: Conducting an assessment helps identify potential impacts on local flora, fauna, and ecosystems during the planning phase.
Biodiversity Conservation Strategies: Preserve natural habitats, minimize land usage, and avoid harmful activities like deforestation and excessive water use. Consider setting up 'no-go' zones for important or vulnerable habitats.
Native Species Planting: Prioritize native plants in landscaping and reforestation efforts to support local biodiversity and ecosystem balance.
Ecological Restoration: Implement restoration plans for damaged habitats, including re-planting native species and restoring water bodies.
Biodiversity Monitoring: Regularly monitor biodiversity to track the initiative's impact and make informed adjustments.
Education and Advocacy: Raise awareness among employees, partners, and the community about biodiversity conservation.
Collaboration with Conservation Organizations: Partner with conservation groups to better understand and mitigate biodiversity impacts.
Sustainable Resource Use: Ensure responsible sourcing, waste reduction, and energy minimization to protect biodiversity.`;

const Biodiversity: ImpactArea = {
  impactAreaCategory: ImpactCategoryName.EnvironmentalPreservation,
  doughnutCategory: DoughnutCategoryName.Ecological,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default Biodiversity;
