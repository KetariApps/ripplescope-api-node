import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const airPollution: ScopeCreateInput = {
  name: 'AIR POLLUTION',
  brief:
    'Reducing harmful air pollutants that can have adverse effects on human health and ecosystems.',
  basis:
    'It examines measures to reduce air pollution recognizing its impact on public health and ecological integrity.',
  description: `Air quality directly influences the health of ecosystems, communities, and individuals. 
  If an initiative releases air pollutants, especially hazardous ones, it poses a significant risk to 
  the environment and local inhabitants. Monitoring these emissions is essential not only for compliance 
  but for understanding and mitigating potential impacts.

    Implementing controls and technologies to curb pollution showcases an initiative\'s commitment to 
    ecological responsibility. Undertaking an air quality impact assessment further emphasizes proactive 
    measures to gauge and reduce potential harmful effects.
    
    Staying compliant with air quality regulations and international guidelines assures stakeholders 
    of the initiative's dedication to global best practices. Since transportation can also be a significant 
    source of emissions, strategies to mitigate this impact reflect a comprehensive approach to air quality.
    
    Incorporating alternative energy or low-emission solutions reiterates an emphasis on reducing the carbon 
    footprint. By anticipating and addressing both immediate and future impacts on air quality and public health, 
    the initiative prepares for sustainable operations.
    
    Promoting air quality awareness among all involved parties fosters a culture of responsibility. Moreover, 
    actively addressing concerns from the community or authorities not only builds trust but ensures that 
    the project remains accountable and adaptable to emerging air quality challenges.
    `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'ENVIRONMENTAL AGENCIES',
            },
          },
          onCreate: {
            node: {
              name: 'ENVIRONMENTAL AGENCIES',
              brief:
                'Organizations that advocate for environmental conservation.',
              description: `Environmental agencies are organizations that play a crucial role in the protection, 
              management, and regulation of environmental resources and issues. They serve as stakeholders by 
              advocating for environmental conservation, setting and enforcing environmental policies and standards, 
              conducting research, and often acting as intermediaries between government, industry, and the public to 
              ensure sustainable and responsible environmental practices.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'PUBLIC HEALTH EXPERTS',
            },
          },
          onCreate: {
            node: {
              name: 'PUBLIC HEALTH EXPERTS',
              brief: `Experts who possess specialized knowledge and expertise in the field of public health.",
              description: "They play a crucial role in shaping and influencing policies, programs, and initiatives 
              aimed at safeguarding and improving the health of communities and populations. Public health experts 
              contribute by conducting research, providing evidence-based recommendations, and guiding strategies to 
              address public health challenges such as disease prevention, health promotion, healthcare access, and health equity. 
              Their insights and guidance are instrumental in making informed decisions and implementing effective 
              interventions to protect and enhance the well-being of societies.`,
            },
          },
        },
      ],
    },
    Question: {
      create: [
        {
          node: {
            brief:
              'Does the initiative off-gas any air pollutants? If so, what types of pollutants are emitted, and in what quantities?',
            description:
              'This question aims to assess the direct emissions of air pollutants from the initiative and understand the potential environmental impact.',
          },
        },
        {
          node: {
            brief:
              'Are any of the airborne emissions classified as hazardous or harmful in any way? If so, how does the initiative address this problem?',
            description:
              'This question seeks to determine if there are harmful emissions and how the initiative plans to mitigate their impact.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative monitor and measure air quality within its operational area, especially in proximity to emission sources?',
            description:
              'This question focuses on the monitoring and measurement practices in place to ensure compliance with air quality standards and regulations.',
          },
        },
        {
          node: {
            brief:
              "What measures and technologies are in place to control and reduce air pollution from the initiative's activities?",
            description:
              'This question explores the mitigation strategies and technologies employed by the initiative to reduce air pollution.',
          },
        },
        {
          node: {
            brief:
              'Has the initiative conducted an air quality impact assessment to understand the potential effects of its operations on local air quality and surrounding communities?',
            description:
              'This question assesses whether the initiative has conducted impact assessments to evaluate its effects on local air quality and communities.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative comply with local and national air quality regulations and standards, as well as any international guidelines or agreements?',
            description:
              "This question seeks to understand the initiative's commitment to regulatory compliance and adherence to air quality standards.",
          },
        },
        {
          node: {
            brief:
              'Are there any measures taken to mitigate the impact of transportation and logistics related to the project on air quality?',
            description:
              'This question explores how the initiative addresses the air quality impact of its transportation and logistics activities.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative implement alternative energy sources or low-emission technologies to minimize its carbon footprint and air pollution contribution?',
            description:
              'This question assesses whether the initiative uses cleaner technologies and energy sources to reduce its environmental footprint.',
          },
        },
        {
          node: {
            brief:
              "What are the anticipated short-term and long-term effects of the initiative on local air quality and public health, and how are these addressed in the project's planning and implementation?",
            description:
              'This question focuses on understanding the expected impact of the initiative on air quality and public health and how it is addressed in planning.',
          },
        },
        {
          node: {
            brief:
              'Are there any initiatives in place to raise awareness about air quality and pollution among employees, local communities, and stakeholders, promoting responsible practices?',
            description:
              'This question explores whether the initiative promotes awareness and responsible practices related to air quality among various stakeholders.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative track, report, and address any air quality complaints or concerns raised by the surrounding communities or relevant authorities?',
            description:
              "This question assesses the initiative's responsiveness to air quality complaints and concerns from communities and authorities.",
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Conduct Air Pollutant Assessment',
            description:
              'Identify and quantify emitted air pollutants, including hazardous substances; assess impact on local air quality and nearby communities for short- and long-term effects; inform mitigation strategies with findings.',
            name: 'Air Pollutant Assessment',
          },
        },
        {
          node: {
            brief: 'Implement Air Quality Monitoring',
            description:
              'Implement robust monitoring near emission sources; analyze data regularly for trends and issues.',
            name: 'Air Quality Monitoring',
          },
        },
        {
          node: {
            brief: 'Apply Air Pollution Control Measures',
            description:
              'Apply technologies and measures to reduce pollution, like installing exhaust scrubbers; follow best practices to cut emissions.',
            name: 'Air Pollution Control Measures',
          },
        },
        {
          node: {
            brief: 'Ensure Compliance with Regulations',
            description:
              'Ensure local, national, and international air quality rule adherence.',
            name: 'Compliance with Regulations',
          },
        },
        {
          node: {
            brief: 'Mitigate Transportation Emissions',
            description:
              "Develop steps to limit transport's air quality impact, such as using eco-friendly fleet vehicles; promote green transport.",
            name: 'Transportation Emission Mitigation',
          },
        },
        {
          node: {
            brief: 'Promote Air Quality Awareness',
            description:
              'Educate employees, communities, and stakeholders about air quality; encourage pollution-reducing behaviors.',
            name: 'Air Quality Awareness',
          },
        },
        {
          node: {
            brief: 'Address Air Quality Concerns',
            description:
              'Create a system to track, report, and handle air quality complaints; resolve issues promptly.',
            name: 'Addressing Concerns',
          },
        },
      ],
    },
  },
};
export default airPollution;
