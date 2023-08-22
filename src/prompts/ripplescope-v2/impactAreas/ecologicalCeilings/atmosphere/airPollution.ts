import {
  DoughnutCategory,
  ImpactArea,
  ImpactAreaCategory,
} from "../../../../../types.js";

const name = "Air Pollution";
const dbName = "air_pollution";
const description =
  "Reducing harmful air pollutants that can have adverse effects on human health and ecosystems.";
const stakeholders = "environmental agencies, public health experts";
const questions = `How concerned about air quality and emissions is the community?
How can the initiative contribute to improvement?
Does the initiative off-gas any air pollutants? If so, what types of pollutants are emitted, and in what quantities? Are any of the airborne emissions classified as hazardous or harmful in any way? If so, how does the initiative address this problem?
How does the initiative monitor and measure air quality within its operational area, especially in proximity to emission sources?
What measures and technologies are in place to control and reduce air pollution from the initiative's activities?
Has the initiative conducted an air quality impact assessment to understand the potential effects of its operations on local air quality and surrounding communities?
How does the initiative comply with local and national air quality regulations and standards, as well as any international guidelines or agreements?
Are there any measures taken to mitigate the impact of transportation and logistics related to the project on air quality?
Does the initiative implement alternative energy sources or low-emission technologies to minimize its carbon footprint and air pollution contribution?
What are the anticipated short-term and long-term effects of the initiative on local air quality and public health, and how are these addressed in the project's planning and implementation?
Are there any initiatives in place to raise awareness about air quality and pollution among employees, local communities, and stakeholders, promoting responsible practices?
How does the initiative track, report, and address any air quality complaints or concerns raised by the surrounding communities or relevant authorities?`;
const context = `Air quality directly influences the health of ecosystems, communities, and individuals. If an initiative releases air pollutants, especially hazardous ones, it poses a significant risk to the environment and local inhabitants. Monitoring these emissions is essential not only for compliance but for understanding and mitigating potential impacts.
Implementing controls and technologies to curb pollution showcases an initiative's commitment to ecological responsibility. Undertaking an air quality impact assessment further emphasizes proactive measures to gauge and reduce potential harmful effects.
Staying compliant with air quality regulations and international guidelines assures stakeholders of the initiative's dedication to global best practices. Since transportation can also be a significant source of emissions, strategies to mitigate this impact reflect a comprehensive approach to air quality.
Incorporating alternative energy or low-emission solutions reiterates an emphasis on reducing the carbon footprint. By anticipating and addressing both immediate and future impacts on air quality and public health, the initiative prepares for sustainable operations.
Promoting air quality awareness among all involved parties fosters a culture of responsibility. Moreover, actively addressing concerns from the community or authorities not only builds trust but ensures that the project remains accountable and adaptable to emerging air quality challenges.`;
const initiatives = `Air Pollutant Assessment: Identify and quantify emitted air pollutants, including hazardous substances; assess impact on local air quality and nearby communities for short- and long-term effects; inform mitigation strategies with findings.
Air Quality Monitoring: Implement robust monitoring near emission sources; analyze data regularly for trends and issues.
Air Pollution Control Measures: Apply technologies and measures to reduce pollution, like installing exhaust scrubbers; follow best practices to cut emissions.
Compliance with Regulations: Ensure local, national, and international air quality rule adherence.
Transportation Emission Mitigation: Develop steps to limit transport's air quality impact, such as using eco-friendly fleet vehicles; promote green transport.
Air Quality Awareness: Educate employees, communities, and stakeholders about air quality; encourage pollution-reducing behaviors.
Addressing Concerns: Create a system to track, report, and handle air quality complaints; resolve issues promptly.`;

const AirPolution: ImpactArea = {
  impactAreaCategory: ImpactAreaCategory.ATMOSPHERE,
  doughnutCategory: DoughnutCategory.ECOLOGICAL,
  name,
  dbName,
  description,
  stakeholders,
  questions,
  context,
  initiatives,
};
export default AirPolution;
