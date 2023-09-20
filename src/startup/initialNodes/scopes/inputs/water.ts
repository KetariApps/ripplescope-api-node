import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const waterQualityInitiative: ScopeCreateInput = {
  name: 'WATER ACCESS & QUALITY',
  brief:
    'Ensuring reliable, safe, and sustainable water access while addressing water-related challenges in the community.',
  basis:
    'This initiative recognizes the paramount importance of reliable and safe water access for communities. It seeks to address water-related concerns by conducting thorough assessments and implementing strategic actions.',
  description: `Access to reliable, clean, and safe water is fundamental to community well-being. This initiative focuses on several key areas:
  
        Water Scarcity Assessment: The initiative assesses the status and extent of water scarcity in the prevailing ecosystem, considering potential changes under climate change scenarios.
  
        Clean Water Access: It evaluates the current level of clean water access in the region and the community, addressing existing challenges.
  
        Running Water Access: The initiative contributes to improving or maintaining clean running water access in the region and the community, recognizing its significance for sanitation and hygiene.
  
        Collaboration for Clean Water: In areas lacking clean drinking water or running water, the initiative collaborates with local government and stakeholders to ensure the installation and maintenance of essential services.
  
        Water Purification and Distribution: The initiative may undertake water purification or distribution projects to enhance clean water availability.
  
        Responsible Water Use: Promoting responsible water use is a priority, extending to employees, stakeholders, and the local community, with the aim of conserving water resources.
  
        Water-Efficient Practices: The initiative incorporates water-efficient technologies and practices to minimize consumption and waste.
  
        Sustainable Water Management: Initiatives and projects related to rainwater harvesting, water recycling, and sustainable water management practices are considered integral to responsible water use.
  
        Water Pollution Prevention: Assessing and addressing potential water pollution or contamination resulting from its activities is a key concern, ensuring the protection of local water sources and ecosystems.
  
        Community Education: Engaging in water conservation education and awareness programs for the community promotes responsible water use and preservation.
        `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Water Management Agencies',
            },
          },
          onCreate: {
            node: {
              name: 'Water Management Agencies',
              brief:
                'Entities responsible for managing water resources in the region.',
              description: `Collaboration with water management agencies is crucial for addressing water scarcity and quality challenges.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Community Leaders',
            },
          },
          onCreate: {
            node: {
              name: 'Community Leaders',
              brief: 'Local leaders representing community interests.',
              description: `Engaging with community leaders ensures alignment with local water-related concerns and priorities.`,
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
              "What is the status and extent of water scarcity in the initiative's prevailing ecosystem? Is water scarcity expected to change there under climate change?",
            description:
              'This question assesses the current water scarcity situation and its potential changes due to climate change.',
          },
        },
        {
          node: {
            brief:
              'What is the current level of clean water access in the region and the community, and how does the initiative address any existing water access challenges?',
            description:
              'This question evaluates the current clean water access status and initiatives to address access challenges.',
          },
        },
        {
          node: {
            brief:
              'What is the extent of clean running water access in the region and the community, and how does the initiative contribute to improving or maintaining this access?',
            description:
              "This question focuses on clean running water access and the initiative's contributions to its improvement or maintenance.",
          },
        },
        {
          node: {
            brief:
              'If the neighborhood lacks clean drinking water or running water, is the initiative working with the local government or relevant stakeholders to ensure the installation and maintenance of such essential services?',
            description:
              "This question assesses the initiative's collaboration with authorities to address water access gaps.",
          },
        },
        {
          node: {
            brief:
              'What other actions, if any, is the initiative taking to support clean drinking water in the region and the community, such as water purification or distribution projects?',
            description:
              'This question explores additional actions taken by the initiative to support clean drinking water access.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative promote responsible water use among its employees, stakeholders, and the local community to conserve water resources?',
            description:
              'This question focuses on the promotion of responsible water use and conservation efforts.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative incorporate water-efficient technologies or practices to minimize water consumption and waste?',
            description:
              'This question examines the integration of water-efficient technologies and practices within the initiative.',
          },
        },
        {
          node: {
            brief:
              "Are there any initiatives or projects aimed at rainwater harvesting, water recycling, or other sustainable water management practices within the initiative's operations?",
            description:
              'This question assesses the presence of initiatives or projects related to sustainable water management.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative assess and address potential water pollution or contamination resulting from its activities, ensuring the protection of local water sources and ecosystems?',
            description:
              'This question focuses on water pollution assessment and mitigation measures.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative engage in water conservation education and awareness programs for the community to promote responsible water use and preservation?',
            description:
              "This question assesses the initiative's efforts in community water conservation education.",
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Clean Water Access Project',
            description:
              'Initiate a clean water access project to address water access challenges in the community.',
            name: 'Clean Water Access Project',
          },
        },
        {
          node: {
            brief: 'Water Conservation Workshops',
            description:
              'Conduct water conservation workshops to educate employees, stakeholders, and the local community on responsible water use.',
            name: 'Water Conservation Workshops',
          },
        },
        {
          node: {
            brief: 'Water Pollution Monitoring',
            description:
              'Implement a water pollution monitoring program to assess and mitigate potential pollution or contamination.',
            name: 'Water Pollution Monitoring',
          },
        },
      ],
    },
  },
};

export default waterQualityInitiative;
