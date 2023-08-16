import {
  DoughnutCategory,
  ImpactArea,
  ImpactAreaCategory,
} from "../../../../../types.js";

const name = "Social Equity";
const dbName = "social_equity";
const description =
  "Reducing disparities and ensuring fairness in access to resources and opportunities among different social groups.";
const stakeholders = "community members, equity advocates, local businesses";
const questions = `How can the initiative address socioeconomic disparities and promote inclusivity in terms of economic opportunities, access to resources, and social services?
What percentage of total staff identifies as an ethnic or religious minority?
What percentage of the initiative/project staff is over 35 years old?
What percentage of the initiative/project staff is not a native speaker of the region's official language?
What percentage of the initiative/project has a registered disability?
What accommodations and accessibility measures does the initiative/project have in place to ensure that employees and participants with disabilities can fully participate and contribute?
Does the initiative/project have some form of DEI group/committee? If so, what percentage of the total employees and communities-served have their interests represented in the DEI group? 
Are there specific training and awareness programs implemented to educate employees and team members about disability etiquette and ethnic/cultural sensitivity?
How transparent is the initiative/project in sharing its diversity and inclusion metrics and progress with the public?
What percentage of community members are considered geographically secluded? `;
const context = `Ensuring social equity in any initiative is paramount. These metrics measure the initiative's commitment to inclusive representation and its dedication to fostering an environment of respect, understanding, and equal opportunity.
Considering the representation of ethnic or religious minorities within the staff gives insight into the initiative's inclusivity and how it mirrors the broader community it serves. As indicated by the percentage of staff over 35, diversity in age speaks to the initiative's appreciation for the varied experiences and perspectives that different age groups bring.
Language diversity, highlighted by staff who are not native speakers of the region's official language, can broaden the initiative's reach and understanding, fostering multicultural synergies. Equally, understanding the percentage of staff with a registered disability underscores an initiative's commitment to breaking barriers and championing all talents.
It's not just about representation; it's about enabling everyone to contribute fully. The accommodations and accessibility measures in place indicate how the initiative actively supports and values every team member, ensuring that physical or sensory challenges are not obstacles.
A DEI (Diversity, Equity, Inclusion) group or committee's existence and its representation highlight the initiative's proactive approach to ensure every voice is heard and considered. Implementing training programs for disability etiquette and cultural sensitivity signals an active effort to nurture a respectful and informed work environment.
Transparency in sharing diversity metrics underscores the initiative's commitment to accountability, letting the public see its progress and dedication. Lastly, understanding the percentage of geographically secluded community members helps ensure the initiative does not unintentionally overlook or isolate any population segment.`;
const initiatives = `Representation of Ethnic and Religious Minorities: Track the percentage of staff identifying as ethnic or religious minorities; implement inclusive hiring practices to improve representation to target levels.
Diversity in Age: Assess the percentage of staff over 35 to ensure diverse age representation; create an inclusive hiring process and work environment that values the perspectives of different age groups.
Language Diversity: Determine the percentage of staff not native speakers of the official language; encourage language diversity to foster multicultural understanding.
Inclusion of Employees with Disabilities: Collect data on the percentage of staff with registered disabilities; provide accessibility measures for full participation.
DEI Group/Committee: If not present, establish a Diversity, Equity, and Inclusion (DEI) group/committee to ensure representation from diverse employee and community segments.
Training on Disability Etiquette and Cultural Sensitivity: Educate employees on disability etiquette, cultural sensitivity, and inclusivity.
Transparency in Sharing Diversity Metrics: Publicly share diversity and inclusion metrics and progress to demonstrate commitment to accountability and improvement.`;

const SocialEquity: ImpactArea = {
  impactAreaCategory: ImpactAreaCategory.SOCIAL_OPPORTUNITIES,
  doughnutCategory: DoughnutCategory.SOCIAL_FOUNDATIONS,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default SocialEquity;
