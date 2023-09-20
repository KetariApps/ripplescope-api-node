import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const chemicalPollution: ScopeCreateInput = {
  verified: true,
  name: 'CHEMICAL POLLUTION',
  brief:
    'The usage or production of herbicides, pesticides, volatile chemicals, organic compounds/pollutants, heavy metal compounds, and radioactive materials.',
  basis:
    'It assesses efforts to mitigate chemical pollution, recognizing its potential to harm ecosystems, human health, and overall well-being.',
  description: `Effective management of hazardous chemicals and pollutants is paramount for environmental sustainability and human well-being. This initiative rigorously assesses its interaction with various chemicals and compounds, including herbicides, pesticides, volatile chemicals, organic compounds/pollutants, heavy metal compounds, and radioactive materials.
  
        The safe handling, storage, and disposal of these substances are non-negotiable principles. Stringent protocols are in place to prevent environmental contamination and protect human health. The initiative closely monitors and assesses the potential environmental and social impacts of using these substances throughout the organization's lifecycle, ensuring that real-world effects align with theoretical assessments.
  
        In line with its commitment to sustainability, the initiative actively explores alternative, more environmentally friendly methods and technologies to reduce the reliance on hazardous chemicals and compounds. It prioritizes the use of safer, non-toxic alternatives whenever feasible.
  
        Education and communication are fundamental aspects of this initiative. Employees, contractors, and local communities receive training and information on proper handling and potential risks associated with these substances.
  
        Additionally, the initiative promotes the adoption of integrated pest management techniques and organic farming practices to reduce the reliance on synthetic chemicals. Waste disposal, particularly concerning hazardous materials, is managed meticulously to prevent pollution of oceans and other sensitive ecosystems.
  
        Collaborations with specialized organizations and experts in chemical management and environmental protection enhance best practices, providing valuable insights and expertise. The initiative also maintains transparency by tracking and reporting on the use and impact of hazardous materials, reinforcing its commitment to environmental and social responsibilities.
        `,
  stakeholders: {
    connectOrCreate: [
      {
        where: {
          node: {
            name: 'Environmental Protection Agencies',
          },
        },
        onCreate: {
          node: {
            name: 'Environmental Protection Agencies',
            brief:
              'Organizations dedicated to protecting the environment and regulating chemical management.',
            description: `Environmental protection agencies play a crucial role in overseeing and regulating chemical management practices. Collaboration with these agencies ensures compliance with environmental protection laws and standards.`,
          },
        },
      },
      {
        where: {
          node: {
            name: 'Chemical Safety Experts',
          },
        },
        onCreate: {
          node: {
            name: 'Chemical Safety Experts',
            brief:
              'Experts in chemical management and safety, specializing in hazardous substance handling.',
            description: `Chemical safety experts bring specialized knowledge in hazardous substance management. Their collaboration enhances safety protocols and risk management.`,
          },
        },
      },
    ],
  },
  considerations: {
    Question: {
      create: [
        {
          node: {
            brief:
              'To what extent does the initiative/organization employ or produce hazardous chemicals and compounds, including herbicides, pesticides, and radioactive materials?',
            description:
              'This question assesses the extent of hazardous chemical usage and production in the initiative.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative ensure the safe handling, storage, and disposal of hazardous materials to prevent environmental contamination and harm to human health?',
            description:
              'This question explores the safety protocols and measures in place for hazardous material management.',
          },
        },
        {
          node: {
            brief:
              'What measures are in place to monitor and assess the potential environmental and social impacts of using hazardous substances throughout the organization’s lifecycle?',
            description:
              'This question focuses on monitoring and assessing the impacts of hazardous substances.',
          },
        },
        {
          node: {
            brief:
              'Are there any alternative, more environmentally friendly methods or technologies considered or implemented to reduce the use of hazardous chemicals and compounds?',
            description:
              'This question inquires about the exploration and implementation of eco-friendly alternatives to hazardous chemicals.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative prioritize the use of safer, non-toxic alternatives to mitigate potential risks associated with hazardous chemicals and compounds?',
            description:
              'This question focuses on the prioritization of non-toxic alternatives over hazardous substances.',
          },
        },
        {
          node: {
            brief:
              'What efforts are made to communicate and educate employees, contractors, and local communities about the proper handling and potential risks of hazardous substances?',
            description:
              "This question explores the initiative's efforts in educating stakeholders about hazardous substance management.",
          },
        },
        {
          node: {
            brief:
              'Are there any initiatives to promote the adoption of integrated pest management techniques or organic farming practices to reduce the reliance on synthetic chemicals?',
            description:
              'This question inquires about initiatives promoting sustainable farming practices.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative manage waste disposal, particularly concerning hazardous materials, to prevent the pollution of oceans and other sensitive ecosystems?',
            description:
              'This question addresses waste disposal practices, especially for hazardous materials.',
          },
        },
        {
          node: {
            brief:
              'Are there any partnerships or collaborations with specialized organizations or experts in chemical management and environmental protection to enhance best practices?',
            description:
              'This question explores collaborations with specialized entities in chemical management and environmental protection.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization track and report on the use and impact of hazardous materials to ensure transparency and accountability for its environmental and social responsibilities?',
            description:
              'This question focuses on tracking and reporting practices related to hazardous material use and impact.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Safe Chemical Handling Protocols',
            description:
              'Implement strict protocols for the safe handling, storage, and disposal of hazardous materials.',
            name: 'Safe Chemical Handling Protocols',
          },
        },
        {
          node: {
            brief: 'Eco-Friendly Alternatives Exploration',
            description:
              'Actively explore and implement environmentally friendly methods to reduce hazardous chemical use.',
            name: 'Eco-Friendly Alternatives Exploration',
          },
        },
        {
          node: {
            brief: 'Education and Training',
            description:
              'Conduct education and training programs for employees, contractors, and local communities on proper hazardous substance handling.',
            name: 'Education and Training',
          },
        },
        {
          node: {
            brief: 'Waste Disposal Best Practices',
            description:
              'Follow best practices for waste disposal, especially concerning hazardous materials, to prevent environmental pollution.',
            name: 'Waste Disposal Best Practices',
          },
        },
      ],
    },
  },
};

export default chemicalPollution;
