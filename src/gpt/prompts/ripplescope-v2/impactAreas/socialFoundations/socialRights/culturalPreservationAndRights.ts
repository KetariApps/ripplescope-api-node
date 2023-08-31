import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../../__generated__/graphql.js";
import { ImpactArea } from "../../../../../../types.js";

const name = "Cultural Preservation and Rights";
const dbName = "cultural_preservation_and_rights";
const description =
  "Ensuring respect and protection of the rights of indigenous communities, including their ownership of traditional knowledge and cultural expressions.";
const stakeholders =
  "indigenous communities, cultural heritage experts, local historians";
const questions = `How important is cultural preservation and the protection of indigenous rights in the community?
How can the initiative respect and support the cultural heritage and rights of indigenous groups?
How does the initiative/project respect and protect the rights of indigenous communities, including their ownership of traditional knowledge and cultural expressions?
Are there any efforts in place to actively involve and consult with indigenous communities in the planning, implementation, and decision-making processes of the project to ensure their cultural heritage is preserved and respected?
How does the initiative/project identify and safeguard cultural landmarks and sacred sites that hold significance for local communities, including indigenous groups?
Are there specific measures in place to protect and preserve traditional knowledge, practices, and languages of indigenous communities impacted by the project?
What activities does the initiative implement to promote and revitalize local culture, arts, and traditions, ensuring that they are valued and preserved for future generations?
Does the initiative/project collaborate with local cultural institutions, heritage organizations, or tribal authorities to protect and promote cultural heritage and traditions?
How does the initiative/project consider the potential impacts on intangible cultural heritage and identity, and what steps are taken to mitigate negative effects?
Are there any educational or awareness programs in place to inform project stakeholders, employees, and the public about the importance of cultural preservation and indigenous rights?
What measures does the initiative/project take to avoid cultural appropriation or misrepresentation of local cultures and traditions in its activities or promotions?
How does the initiative/project contribute to the economic empowerment and sustainability of local communities, ensuring that cultural heritage preservation aligns with social and economic development goals?`;
const context = `An initiative's approach to Indigenous communities speaks volumes about its respect for cultural diversity and human rights. Recognizing and safeguarding the rights of these communities is not merely a legal or ethical obligation—it preserves the rich tapestry of human heritage that shapes our world.
Active involvement of indigenous groups ensures that projects are molded with a sensitivity that goes beyond mere consultation—it's about partnership. Protection of cultural landmarks and sacred sites signals respect for the emotional and spiritual significance these hold.
Preserving traditional knowledge and practices is a commitment to the intergenerational transfer of wisdom. By promoting local culture and arts, the initiative can plant seeds for future generations to draw inspiration from the past. Collaboration with cultural institutions amplifies the initiative's commitment to cultural respect and sustenance.
Being conscious of intangible cultural impacts ensures that the soul of a community remains undisturbed. Educational programs reinforce the shared responsibility of cultural preservation, creating a community of advocates. Avoiding cultural appropriation is not just about being politically correct—it's about honoring authenticity.
Lastly, intertwining cultural heritage with economic empowerment crafts a narrative where history and progress walk hand in hand, ensuring that as communities advance, they don't leave behind the stories that shaped them.`;
const initiatives = `Involve Indigenous communities: Engage in planning, implementation, and decisions to preserve cultural heritage.
Safeguard Landmarks: Identify and protect cultural landmarks, establish buffer zones.
Partner with Institutions: Collaborate with cultural organizations, tribal authorities, support preservation.
Mitigate Intangible Impact: Address impacts on intangible heritage, assess and integrate mitigation.
Educate Culturally: Implement employee cultural education programs.
Prevent Appropriation: Avoid cultural misrepresentation or appropriation.
Empower Economically: Support community businesses, create culturally aligned income opportunities, ensure fair compensation for traditional knowledge or expressions.`;
const CulturalPreservationAndRights: ImpactArea = {
  impactAreaCategory: ImpactCategoryName.SocialRights,
  doughnutCategory: DoughnutCategoryName.Social,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default CulturalPreservationAndRights;
