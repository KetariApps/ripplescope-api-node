import {
  DoughnutCategory,
  ImpactArea,
  ImpactAreaCategory,
} from "../../../../../types.js";

const name = "Gender Equity";
const dbName = "gender_equity";
const description =
  "Promoting equal rights and opportunities for all genders, and eliminating discrimination and violence based on gender.";
const stakeholders = "women's association, gender experts, community leaders";
const questions = `How important is gender equality and women's empowerment in the community?
How can the initiative contribute to promoting women's leadership and participation in decision-making?
What is the percentage of total staff that identifies as non-male?
What is the percentage of total staff that identifies as LGBTQI+?
What is the extent to which the project/initiative offers a supportive, open environment of LGBTQI+ and non-male individuals? 
What is the gender representation across different levels of leadership within the initiative/project?
Does the project/program integrate gender equity considerations in its framework? (select all that apply: gender focus in P/P strategy; gender-specific activites; discussion of gender dynamics in P/P framework; gender-specific metrics in M&E strategy)`;
const context = `Creating an inclusive and diverse workforce is a pillar of a socially responsible and effective project or program. Inclusion goes beyond inviting diversity into an organization; it is about making everyone feel valued, heard, and able to be themselves.
Understanding the percentage of total staff that identifies as non-male or LGBTQI+ provides insight into the diversity of the project's workforce. A diverse workforce can bring a wider range of perspectives, experiences, and skills to the project, enriching its approach, creativity, and problem-solving capacity. Moreover, diversity and inclusivity can enhance the organization's reputation and help attract high-quality staff, partnerships, and support.
Beyond representation, it's crucial to assess the extent to which the initiative offers a supportive, open environment for LGBTQI+ and non-male individuals. This involves understanding whether the work culture fosters respect and equal opportunities for everyone, irrespective of their gender identity or sexual orientation. A supportive work environment can enhance job satisfaction, retention, productivity, and ultimately the project's overall success.`;
const initiatives = `Gender-Inclusive Policies: Adopt a range of measures, from equal pay policies to flexible work arrangements for balancing work and family commitments to clear protocols for preventing and addressing sexual harassment.
Gender-Responsive Leadership: Encourage and support women and LGBTQI+ individuals to take on leadership roles within the organization. 
Gender-Specific Activities: Design specific activities to address gender disparities. For example, an agricultural project could involve training women farmers in new technologies and sustainable farming practices.
Gender-Disaggregated Data: Collect and analyze gender-disaggregated M&E data, to assess the project's impact on different genders and make necessary adjustments.
Gender Impact Assessment: Conduct an initial gender impact assessment to help identify potential gender-related challenges and opportunities. 
Promotion of Gender-Sensitive Language and Imagery: Use gender-neutral language and include diverse representations of gender in all communication, marketing, and promotional materials.
Capacity Building on Gender Issues: Offer regular training and workshops to all staff on gender issues, including unconscious bias.`;

const GenderEquity: ImpactArea = {
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
export default GenderEquity;
