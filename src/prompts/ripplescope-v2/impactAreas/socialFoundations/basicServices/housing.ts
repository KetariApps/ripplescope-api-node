import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../gql/graphql.js";
import { ImpactArea } from "../../../../../types.js";

const name = "Housing";
const dbName = "housing";
const description =
  "Ensuring safe, affordable, and adequate housing for all individuals and families.";
const stakeholders = "";
const questions = `How many hectares of land will this initiative/project require your organization to buy or occupy for the construction or implementation of responsible housing?
What percentage of this initiative/project's staff lives within 50km of the project site?
What percentage of this initiative/project's staff lives within 10km of the project site?
Among the local staff (within 10 km of the project site), what percentage of employees are securely housed, in homes with electricity and other basic amenities?
If local staff are not currently securely housed, what efforts will be/are being made to offer them safe, secure, affordable housing?
If staff are securely housed, what efforts are being made to assist them in adapting their homes to improve resilience to climate/weather-related challenges?
How does the initiative/project consider architectural design and construction practices that adhere to green building standards and minimize environmental impact?
How does the initiative/project prioritize affordability and accessibility for the local workforce, ensuring that it doesn't lead to gentrification or displacement of existing communities?
What measures are in place to ensure that construction and maintenance relating to the initiative/project's activities adhere to environmental regulations and sustainability principles?
Does the initiative/project actively engage with employees, local communities and stakeholders to address their housing needs and preferences?`;
const context = `In developing economy countries and impoverished regions of developed economies, initiatives should prioritize ensuring that all employees have access to safe, secure, and affordable housing that protects them from the elements and provides warmth, light, and a clean, smoke-free area for cooking. In developing-economy regions, many homes may lack basic amenities such as locks on windows and doors, electrification, proper flooring, clean cookstove installations, double-paned windows, insulation, and other essentials.
Once all employees are securely housed, the next priority should be assisting them in adapting their homes to withstand extreme weather conditions and managing the growing costs associated with such weather challenges. This may involve installing heat pumps, water pumps, drought-resistant lawns, solar panels, and other infrastructure to reduce expenses and safeguard homes from damage.
Relying heavily on importing talent instead of hiring locally can impact the local economy and housing situation. Importing over half of your upper-level team may worsen social stratification and gentrification in the medium term. Additionally, it can alienate your initiative from the community, leading to a loss of public trust and goodwill from local government. Hiring local staff brings valuable benefits, including strong community ties and cultural understanding that enhance your work. Invest in training and human resource development to nurture a robust local workforce instead of spending on relocation expenses. Initiatives seeking community support should leverage the insights of their local employees, as lower-level staff often understand community sentiments better. A workforce comprising 75% or more locally-based staff or over 50% locally-based staff in leadership positions provides a competitive advantage through deep community ties. Contributing significantly to the local economy can help gain support from the local or national government for your initiative's work. Emphasize a commitment to the local workforce and community engagement to strengthen your initiative's impact and long-term support.`;
const initiatives = `Proximity and Basic Amenity Assessment: Evaluate the percentage of staff living within 50km and 10km of the project site to understand the commuting distance and potential housing requirements; identify the percentage of local staff within 10km of the project site with secure housing with basic amenities like electricity, locks, and proper flooring.
Climate-Resilient Housing Improvement Plans: Develop plans to offer safe, secure, and affordable housing to local staff lacking secure housing. Collaborate with local authorities, NGOs, or community-based organizations to ensure effective implementation of climate-resilient housing measures.
Affordability and Accessibility: Prioritize affordability and accessibility to ensure that local housing initiatives do not contribute to gentrification or displacement. Work with local housing authorities and experts to develop fair and sustainable housing solutions.
Environmental Compliance: Establish stringent measures to ensure housing construction and maintenance adhere to environmental regulations and sustainability principles. Regular inspections and audits can help monitor compliance.
Community Engagement: Actively engage with employees, local communities, and stakeholders to understand housing needs and preferences. Prioritize hiring and training local staff to create a robust local workforce. Invest in skill development and provide growth opportunities for local talent.`;

const Housing: ImpactArea = {
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
export default Housing;
