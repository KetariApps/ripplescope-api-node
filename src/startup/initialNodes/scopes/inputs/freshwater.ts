import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const freshwater: ScopeCreateInput = {
  verified: true,
  name: 'FRESHWATER',
  brief:
    'Safeguarding freshwater resources to ensure availability for drinking, sanitation, agriculture, and ecosystems.',
  basis:
    'It assesses the management and conservation of freshwater resources, highlighting their critical role in supporting human well-being and ecosystem health.',
  description: `Water management is a critical aspect of this initiative, with a primary goal of promoting sustainable water practices that align with local water needs. Several key considerations guide its approach:
  
        The initiative closely monitors its daily water consumption, recognizing that the amount of water used daily directly impacts the environment, especially in regions with water scarcity. It also ensures that water released from its sites does not contain harmful substances that could disrupt ecosystems or violate environmental regulations.
  
        The classification of water consumption provides clarity on the initiative's sustainability and guides decision-making. It actively engages in activities aimed at improving water quality for consumption and addressing flood mitigation or water regulation to protect communities and ecosystems.
  
        The source of water for the initiative is a critical factor in its sustainability. The initiative evaluates the source's impact on local water availability and sustainability, aiming to prevent strain on local ecosystems and communities.
  
        To minimize freshwater consumption, the initiative embraces responsible practices such as water recycling, reuse, and rainwater harvesting. It forecasts water demand and supply to ensure alignment with regional water resources.
  
        Water-efficient technologies and practices are implemented to optimize water use and reduce wastage, demonstrating a commitment to responsible water management. Additionally, the initiative establishes a robust system to assess and monitor the impact of its activities on local freshwater levels and water quality, ensuring a holistic approach to water stewardship.
        `,
  stakeholders: {
    connectOrCreate: [
      {
        where: {
          node: {
            name: 'Water Resource Authorities',
          },
        },
        onCreate: {
          node: {
            name: 'Water Resource Authorities',
            brief:
              'Government agencies responsible for managing and regulating water resources.',
            description: `Collaboration with water resource authorities is crucial to ensure compliance with regulations and sustainable water management practices.`,
          },
        },
      },
      {
        where: {
          node: {
            name: 'Environmental Consultants',
          },
        },
        onCreate: {
          node: {
            name: 'Environmental Consultants',
            brief:
              'Experts in environmental consulting, specializing in water management and sustainability.',
            description: `Environmental consultants provide expertise in water management and sustainability, contributing valuable insights and guidance to the initiative.`,
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
              'What is the amount of water the initiative consumes per day?',
            description:
              'This question assesses the daily water consumption of the initiative.',
          },
        },
        {
          node: {
            brief:
              "When water is released from the initiative's site, does it contain additional or fewer components than when it entered the site?",
            description:
              "This question explores the impact of the initiative's activities on water composition during the process.",
          },
        },
        {
          node: {
            brief:
              "Are any additional substances considered dangerous, according to the country's environmental regulations, or in the absence of such regulations, those of the US EPA?",
            description:
              "This question examines the initiative's compliance with environmental regulations regarding water quality.",
          },
        },
        {
          node: {
            brief:
              'What is the water consumption classification for this organization?',
            description:
              "This question categorizes the initiative's water consumption to assess its sustainability.",
          },
        },
        {
          node: {
            brief:
              'How many Organization/Program activities are aimed at improving water quality for consumption?',
            description:
              "This question measures the initiative's efforts to enhance water quality for consumption.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative have any activities focused on flood mitigation or water regulation?',
            description:
              "This question assesses the initiative's involvement in flood mitigation and water regulation activities.",
          },
        },
        {
          node: {
            brief:
              'What is the source of water for the initiative, and how does it affect local water availability and sustainability?',
            description:
              'This question examines the impact of the water source on local water resources and sustainability.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization address water recycling, reuse, or rainwater harvesting to minimize freshwater consumption?',
            description:
              "This question inquires about the initiative's practices to reduce freshwater consumption through responsible water management.",
          },
        },
        {
          node: {
            brief:
              'What is the organizationed water demand and supply for the initiative, and how does it align with the availability of water resources in the region?',
            description:
              'This question assesses the alignment of water demand and supply with regional water resources.',
          },
        },
        {
          node: {
            brief:
              'Are there any water-efficient technologies or practices implemented to optimize water use and reduce wastage?',
            description:
              "This question explores the initiative's adoption of water-efficient technologies and practices.",
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization assess and monitor the impact of its activities on local freshwater levels and water quality?',
            description:
              "This question focuses on the monitoring and assessment of the initiative's impact on local freshwater resources and quality.",
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Water Quality Enhancement',
            description:
              'Implement activities aimed at improving water quality for consumption.',
            name: 'Water Quality Enhancement',
          },
        },
        {
          node: {
            brief: 'Rainwater Harvesting',
            description:
              'Implement rainwater harvesting systems to minimize freshwater consumption.',
            name: 'Rainwater Harvesting',
          },
        },
        {
          node: {
            brief: 'Water Recycling Practices',
            description:
              'Incorporate water recycling practices to optimize water use and reduce wastage.',
            name: 'Water Recycling Practices',
          },
        },
      ],
    },
  },
};

export default freshwater;
