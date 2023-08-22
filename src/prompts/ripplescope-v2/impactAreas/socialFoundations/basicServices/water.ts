import {
  DoughnutCategory,
  ImpactArea,
  ImpactAreaCategory,
} from "../../../../../types.js";

const name = "Water";
const dbName = "water";
const description =
  "Ensuring equitable access to clean and safe drinking water and proper sanitation facilities.";
const stakeholders = `water management agencies, community leaders`;
const questions = `How important is reliable and safe water access for the community? How can the initiative address water-related concerns?
What is the status and extent of water scarcity in the initiative's prevailing ecosystem? Is water scarcity expected to change there under climate change?
What is the current level of clean water access in the region and the community, and how does the initiative address any existing water access challenges?
What is the extent of clean running water access in the region and the community, and how does the initiative contribute to improving or maintaining this access?
If the neighborhood lacks clean drinking water or running water, is the initiative working with the local government or relevant stakeholders to ensure the installation and maintenance of such essential services?
What other actions, if any, is the initiative taking to support clean drinking water in the region and the community, such as water purification or distribution projects?
How does the initiative promote responsible water use among its employees, stakeholders, and the local community to conserve water resources?
Does the initiative incorporate water-efficient technologies or practices to minimize water consumption and waste?
Are there any initiatives or projects aimed at rainwater harvesting, water recycling, or other sustainable water management practices within the initiative's operations?
How does the initiative assess and address potential water pollution or contamination resulting from its activities, ensuring the protection of local water sources and ecosystems?
Does the initiative engage in water conservation education and awareness programs for the community to promote responsible water use and preservation?`;
const context = `The significance of water - its availability, quality, and sustainability - in any project cannot be overstated. Water scarcity and access to clean water pose significant challenges, especially in developing regions, and are expected to worsen with climate change. Therefore, conducting a thorough water scarcity assessment is vital for the initiative to strategize water usage and conservation efforts that align with local needs and realities.
Access to clean water plays a pivotal role in assessing the initiative's social impact. Without it, communities face risks of waterborne diseases and inadequate hygiene, adversely affecting their quality of life. Collaborating with local stakeholders and government to establish and maintain clean water services is crucial for community health and development.
Running water access is essential for sanitation and hygiene, especially in healthcare and food facilities. Lack of it increases the risk of disease spread within the community. The initiative should also support clean drinking water availability through water conservation education, rainwater harvesting, and infrastructure improvements. These actions promote community health, sustainable practices, and long-term development.
Addressing water-related issues is crucial for the initiative's positive social and environmental impact. Integrating water conservation and clean water access efforts into its operations will contribute to a more sustainable and equitable future for the community it serves.`;
const initiatives = `Water Audits and Repair: Identify high consumption areas, and detect and fix leaks promptly.
Efficient Irrigation: Use drip irrigation and rainwater for agriculture.
Water Recycling and Reuse: Treat wastewater for non-potable purposes.
Public Awareness: Raise water conservation awareness in the community.
Water-Efficient Fixtures: Install low-flow faucets and toilets.
Landscape Design: Use native, drought-resistant plants.
Timing of Water Use: Schedule off-peak water-intensive activities.
Water Metering: Monitor usage to target water conservation efforts.`;

const Water: ImpactArea = {
  impactAreaCategory: ImpactAreaCategory.BASIC_SERVICES,
  doughnutCategory: DoughnutCategory.SOCIAL,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};

export default Water;
