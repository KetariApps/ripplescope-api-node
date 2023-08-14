import { ChatCompletionRequestMessageRoleEnum } from "openai";

const socialImpacts = `"Basic Services": Access to essential services like sanitation, electricity, and telecommunications that are crucial for a decent standard of living.
"Housing": Ensuring safe, affordable, and adequate housing for all individuals and families.
"Energy": Ensuring reliable access to clean and affordable energy sources for meeting basic needs and economic activities.
"Food": Ensuring that everyone has access to sufficient, safe, and nutritious food to maintain a healthy life.
"Water": Ensuring equitable access to clean and safe drinking water and proper sanitation facilities.
"Social Rights": Protecting and promoting fundamental human rights, including civil, political, economic, social, and cultural rights.
"Health": Ensuring access to quality healthcare services and promoting physical and mental well-being.
"Education": Ensuring access to inclusive and equitable education at all levels to facilitate personal development and a skilled workforce.
"Income & Work": Promoting fair wages, decent working conditions, and opportunities for productive and meaningful employment.
"Peace & Justice": Promoting peaceful and just societies by addressing conflict, violence, and inequalities through legal and social mechanisms.
"Social Opportunities": Ensuring equal opportunities for personal growth, skill development, and social mobility.
"Networks": Fostering social connections and networks that provide support, resources, and opportunities for individuals and communities.
"Gender Equity": Promoting equal rights and opportunities for all genders, and eliminating discrimination and violence based on gender.
"Social Equity": Reducing disparities and ensuring fairness in access to resources and opportunities among different social groups.
"Political Voice & Representation": Ensuring that all individuals have the right to participate in decision-making processes and are represented in political structures.`;

const ecologicalCeilings = `"Preservation": Protecting natural habitats and ecosystems to maintain biodiversity and ecosystem services.
"Biodiversity": Preserving a variety of species and genetic diversity to ensure the resilience of ecosystems and their ability to adapt to changes.
"Land": Avoiding overexploitation and degradation of land resources to maintain soil fertility and support agricultural productivity.
"Freshwater": Safeguarding freshwater resources to ensure availability for drinking, sanitation, agriculture, and ecosystems.
"Atmosphere": Limiting emissions of greenhouse gases and pollutants to maintain a stable and healthy atmosphere.
"Air Pollution": Reducing harmful air pollutants that can have adverse effects on human health and ecosystems.
"Ozone": Protecting the ozone layer in the stratosphere, which shields the Earth from harmful ultraviolet (UV) radiation.
"Climate Change": Limiting global temperature rise and addressing the impacts of climate change to avoid severe disruptions to ecosystems and societies.
"Chemistry": Avoiding the release of harmful chemicals into the environment that can have detrimental effects on ecosystems and human health.
"Oceans": Protecting marine ecosystems and biodiversity, and ensuring sustainable use of ocean resources.
"Chemical Loading": Minimizing the release of toxic substances into the environment to prevent pollution and harm to ecosystems.
"Nitrogen & Phosphorus Loading": Managing nutrient inputs into ecosystems to avoid excessive nutrient enrichment and related environmental problems.`;
// const impactCategoriesV1 = `IMPACT CATEGORIES
// Social foundations
// Basic services
// Housing
// Energy
// Food
// Water
// Social rights
// Health
// Education
// Income & Work
// Peace & Justice
// Social opportunities
// Networks
// Gender Equity
// Social Equity
// Political Voice & Representation
// Ecological ceilings
// Preservation
// Biodiversity
// Land
// Freshwater
// Atmosphere
// Air pollution
// Ozone
// Climate change
// Chemistry
// Oceans
// Chemical loading
// Nitrogen & Phosphorus loading
// `;

const impactCategoriesList = {
  role: ChatCompletionRequestMessageRoleEnum.Assistant,
  content: "IMPACT CATEGORIES:\n\n" + socialImpacts + "\n" + ecologicalCeilings,
};
export default impactCategoriesList;
