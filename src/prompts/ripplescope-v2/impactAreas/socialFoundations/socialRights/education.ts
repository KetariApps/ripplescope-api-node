import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../gql/graphql.js";
import { ImpactArea } from "../../../../../types.js";

const name = "Education";
const dbName = "education";
const description =
  "Ensuring access to inclusive and equitable education at all levels to facilitate personal development and a skilled workforce.";
const stakeholders = "local schools, education advocates";
const questions = `How can the initiative enhance educational opportunities and capacity-building efforts, particularly related to climate change and sustainability?
What is the extent of access to education for men and women in the initiative's region and local community?
What are the average education completion rates for men and women in the initiative's region and local community?
Does the initiative sponsor continued education, such as supporting staff going back to school to complete a degree? If so, do they have a guaranteed job with the initiative when they complete their degree?
Does the initiative/project offer any on-the-job training, support certified courses, or other educational or opportunities?
Does the initiative/project offer employees management training, to help them build their skills and work their way up the ladder?
Does this project (directly or indirectly) involve any of the following: establishment of local entities that will hire local staff, support of commercial entities, cooperatives, etc.
Does the initiative/project offer any educational opportunities or benefits for non-employees in the local community? If so, what?
How many non-employee community members does the initiative/project target?
What are the types of training the initiative provides to its staff, and approximately what percentage of total staff receives this training, such as:
- Technology training, e.g., GPS units, mobile phones, laptop/desktop computers, coding/programming, software, etc.
- Finance. Budgeting, accounting, business management, or similar. 
- Health/Wellness. Nutrition, exercise, preventative medicine.
- Social equality. Anti-discrimination, harassment, justice, gender and minority issues
- Ecological. Sustainable management of ecosystems, tree/forest, agriculture, etc. 
- General resume builders. Anything that doesn't fit in the above categories that improves an individuals' future hireability`;
const context = `Education and skill development are vital to the growth of individuals and consequently contribute to the progress of their communities. Their promotion indicates an initiative's dedication to all-encompassing development and sustainability. 
The level of education access in the initiative's region offers insight into the local socio-economic environment. Data on men's and women's education completion rates can reveal gender disparities that can inform strategies to ensure equal opportunities. Recognizing the role of education in combating poverty and social exclusion is crucial. 
An initiative's commitment to ongoing education, particularly for staff, illustrates its investment in human capital. Supporting employees looking to complete their degrees or further their studies encourages long-term growth. A guaranteed job post-completion motivates the employee and allows the initiative to benefit from new skills. 
Providing on-the-job training and educational opportunities helps staff improve their roles, adapt to technological changes, and take on greater responsibilities. Offering management training nurtures leadership development, fostering potential leaders familiar with the initiative's ethos and the community's specifics. 
An initiative's involvement in establishing local groups or supporting commercial entities and cooperatives illustrates its dedication to economic improvement in the region. These activities often lead to local job creation, skill development, and community empowerment. 
Extending educational opportunities to non-employees in the community reflects the initiative's broader vision of societal advancement. It recognizes that community development is not just about immediate gains but also about preparing for the future.
An initiative's emphasis on education and training manifests its commitment to sustainable development for its operations and the broader community. By inculcating a culture of learning and empowerment, it secures its longevity and strengthens the community it operates within.`;
const initiatives = `Employee Training and Development: Provide regular workshops for professional growth.
Scholarships and Education Grants: Offer support for higher education.
Vocational Training Programs: Provide skill-based training centers.
Community Learning Centers: Offer educational resources for residents.
Mentorship and Internship Opportunities: Promote practical experience for students, including STEM initiatives.`;
const Education: ImpactArea = {
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
export default Education;
