import { ImpactArea } from "../../../../../../types.js";

const name = "Peace and Justice";
const dbName = "peace_and_justice";
const description =
  "Promoting peaceful and just societies by addressing conflict, violence, and inequalities through legal and social mechanisms.";
const stakeholders =
  "local leaders, conflict resolution experts, community members";
const questions = `How can we describe the current state of peace and conflict in the community?
How can the initiative contribute to fostering peaceful coexistence and addressing potential conflicts?
What is the status and extent of peace and conflict in the initiative's region? For example, is there systemic peace, isolated violence or conflict, or systemic violence or conflict?
Can local staff access your initiative/project administration HR services to process local claims?
Do confidentiality and privacy clauses apply to local staff under the purview of this initiative/project?
Is the initiative/project affiliated with any particular political party, religious group, or other group or organization that may be viewed, correctly or incorrectly, as harmful in any way to the peace and justice of the initiative's region or local community?`;
const context = `Understanding the intricate peace and conflict dynamics in the initiative's region is vital for its success and community well-being. In peaceful areas, the initiative should support it, while in violent regions, it should prioritize safety and avoid worsening tensions.
Providing equitable access to HR services for local staff is essential. It demonstrates fairness and commitment, as these employees are crucial.Maintaining confidentiality is key for local staff's dignity and safety, especially where information can be weaponized.
Affiliations with political, religious, or other groups can impact the initiative's credibility and reception, affecting its effectiveness and safety.Navigating peace, conflict, and affiliations demonstrates the initiative's commitment to community benefit, regional understanding, and fairness.`;
const initiatives = `Peace and Conflict Awareness: Analyze regional dynamics thoroughly; engage with communities and stakeholders to understand peace initiatives and conflict triggers; train staff on conflict-sensitive approaches.
Access to HR Services: Establish accessible HR services near the project site; inform local staff confidentially; provide language support; implement a feedback mechanism for grievances.
Confidentiality and Privacy: Implement data protection measures; train staff on confidentiality; create safe reporting spaces; develop contingency plans for breaches.
Mitigate Affiliations: Communicate transparently; engage with local leaders; avoid direct involvement in politics or religion; collaborate with reputable local NGOs.
Regional Nuances: Invest in cultural sensitivity training; involve community leaders; prioritize community participation; monitor impact on peace and justice indicators.`;
const PeaceAndJustice: ImpactArea = {
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default PeaceAndJustice;
