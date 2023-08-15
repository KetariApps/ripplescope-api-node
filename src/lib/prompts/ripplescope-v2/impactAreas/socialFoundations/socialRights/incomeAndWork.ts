import { ImpactArea } from "../../../../../../types.js";

const name = "Income and Work";
const dbName = "income_and_work";
const description =
  "Promoting fair wages, decent working conditions, and opportunities for productive and meaningful employment.";
const stakeholders = "local businesses, labor organizations";
const questions = `What are the current job opportunities and income sources?
How might the initiative promote job creation and income generation?
What is the local legal minimum wage compared to the local sustainable wage in the initiative's region and local community?
To what extent do authorities enforce local minimum wage?
How many and what percentage of the local community are employed by the initiative/project?
How many and what percentage of the local community indirectly benefit financially through the initiative/project activities?
In addition to job creation, what other positive impacts has the initiative/project had on its region and local community, including in community cohesion and structure?
What is the hourly wage in US$ of the lowest-earning employee relative to the local minimum and sustainable wages?
What is the status and extent of worker's benefits for the lowest earners in the initiative/project? For example, does the initiative offer paid time off, health insurance matching, retirement matching, transportation to work, mileage reimbursement, salary adjustments due to inflation, or other benefits?
What percentage of initiative/project inputs are sourced from local businesses or community members? Is compensation for these inputs evaluated on a fair-trade basis?
Does the initiative/project support its employees or members of its communities in gaining access to financial resources, such as opening a bank account or accessing a loan?`;
const context = `Economic justice and sustainability are closely linked. An initiative's approach to wages, sourcing, and worker benefits reflects its commitment to these principles.
In many areas, the gap between legal minimum wage and a living wage is significant, impacting workers and families. Comparing an initiative's wages to local legal and sustainable minimum wages reveals its social and economic impact. Paying only the legal minimum, especially if it's much lower than the sustainable wage, might meet legal standards but not ethical ones. Providing wages closer to or exceeding the sustainable wage invests in employees' well-being and the community's economic health.
Local authorities' enforcement of minimum wage laws reflects the initiative's socio-political context and respect for local governance and workers' rights.
Comparing the lowest-paid employee's hourly wage in US$ to local benchmarks shows the initiative's global commitment to wage equity, especially where the dollar's purchasing power varies.
Worker benefits, including time off, health insurance, retirement support, transportation, and inflation-adjusted salaries, indicate job quality. Offering these benefits, especially to low earners, shows commitment to reducing economic disparities. Helping employees access financial services like bank accounts and loans improves well-being.
Sourcing practices reflect the initiative's impact on the local economy. Using local inputs can boost the regional economy. Fair-trade evaluation emphasizes ethical commerce, ensuring fair compensation for labor and products in the supply chain.`;
const initiatives = `Wage Comparison and Adjustment: Compare local legal minimum wage with the sustainable wage and adjust wages accordingly to ensure fair compensation that meets or exceeds the sustainable wage.
Local Authority Engagement: Collaborate with local authorities to ensure the enforcement of local minimum wage standards and compliance with labor laws.
Community Employment: Monitor the percentage of the local community employed by the initiative/project and strive to maximize local employment opportunities.
Community Impact Assessment: Evaluate the broader positive impacts of the initiative/project on the region and local community, including aspects like community cohesion, infrastructure development, and social structure improvement.
Comprehensive Worker Benefits: Provide comprehensive worker benefits beyond basic wages, including paid time off, health insurance matching, retirement support, transportation assistance, and inflation-adjusted salaries.
Financial Inclusion Support: Assist employees in gaining access to financial resources by facilitating services like opening bank accounts, accessing loans, and financial education.`;
const IncomeAndWork: ImpactArea = {
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default IncomeAndWork;
