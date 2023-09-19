import {
  DoughnutCategoryName,
  ImpactCategoryName,
} from "../../../../../../__generated__/graphql.js";
import { ImpactArea } from "../../../../../../types.js";

const name = "Health";
const dbName = "health";
const description =
  "Ensuring access to quality healthcare services and promoting physical and mental well-being.";
const stakeholders = "health clinics, medical professionals";
const questions = `What are the key health challenges in the community?
How might the initiative contribute to improving health and well-being?
If staff are in need of preventative or emergency health care, what percentage of staff must pay for it out of pocket?  
Does the project/initiative offer any medical insurance or assistance with paying employee medical bills?
Are employees entitled to take paid/unpaid sick leave? If so, what, if any, documentation is provided to qualify for paid or unpaid leave?
How many project/initiative activities invest or drive investments to healthcare infrastructure?
How will this project support local public health?
In terms of workplace conditions, what health and safety equipment is provided? Does this equipment meet nationally or internationally recognized safety requirements? If so, which safety requirements does it meet? 
In terms of workplace conditions, what noise level are employees subjected to during project/initiative activities?
In terms of workplace conditions, what is the average shift length per day, in hours?
Does the initiative/project offer any assistance to pregnant employees or new parents e.g., paid maternity or paternity leave? 
What mental health services does the initiative/project run to support employee well-being and reduce workplace stress?`;
const context = `Employee healthcare is vital for social responsibility. Out-of-pocket healthcare costs can strain staff financially, affecting well-being and job satisfaction. Offering medical insurance or assistance demonstrates a commitment to staff well-being, leading to increased productivity and retention.
Paid and unpaid sick leave is an essential employee benefit and legal right in many countries. Allowing employees to recover without financial stress improves their health and motivation. Transparent criteria and documentation ensure fairness.
Workplace conditions directly impact health and productivity. Adhering to safety standards, including noise levels and shift length, promotes good health and overall well-being. Health services should go beyond physical health and also consider the emotional and mental well-being of those affected by its activities.
Supporting pregnant employees and new parents is crucial. Benefits like paid maternity or paternity leave show empathy and foster a culture of care.
Investing in healthcare infrastructure is another aspect of social responsibility. Such investments benefit employees and the community by improving access to essential healthcare services, reducing disease burden, and enhancing overall quality of life.
An initiative's approach to social responsibility, especially concerning health and well-being, reflects its values and long-term vision. Prioritizing the health and safety of employees and the community is ethically sound and ensures a harmonious and sustainable trajectory for the project's operations.`;
const initiatives = `Healthcare Infrastructure: Build/upgrade health centers and provide equipment for enhanced care.
Mobile Clinics: Support units for remote areas.
Healthcare Professional Training: Invest in skill development programs.
Community Health Programs: Promote preventive healthcare through education.
Maternal and Child Health: Focus on prenatal care and safe childbirth.
Collaborations: Partner with healthcare organizations and local authorities.
Health Impact Assessments: Regularly evaluate initiative effectiveness.`;
const Health: ImpactArea = {
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
export default Health;
