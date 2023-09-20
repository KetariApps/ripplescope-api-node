import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const foodSecurity: ScopeCreateInput = {
  verified: true,
  name: 'FOOD SECURITY AND NUTRITION',
  brief:
    'Enhancing food security and promoting better nutrition in the community.',
  basis:
    'This initiative focuses on assessing and improving food and nutritional security in the region and community it serves.',
  description: `Food security and nutrition are critical aspects of this initiative, with a focus on enhancing local food production and nutrition. Key considerations include:
  
        - Assessing the status of regional and national food and nutritional security to understand challenges and opportunities.
        - Ensuring responsible land use to minimize adverse impacts on local food production and agricultural activities.
        - Identifying ways to positively impact food security and nutrition, such as enhancing food availability, accessibility, and affordability.
        - Anticipating potential negative impacts and implementing mitigation strategies to safeguard food and nutrition.
        - Promoting sustainable agricultural practices like agroecology, permaculture, or organic farming to enhance food production while preserving the environment.
        - Engaging with local farmers and food producers to support their livelihoods and strengthen the local food system.
        - Incorporating climate-resilient crop varieties and agricultural techniques to adapt to changing environmental conditions.
        - Collaborating with local communities and stakeholders to design and implement organizations aligned with their food security and nutrition needs.
        - Collecting and monitoring data to assess the impact of the initiative on food security, nutrition, and agricultural practices in the region.
        `,
  stakeholders: {
    connectOrCreate: [
      {
        where: {
          node: {
            name: 'Local Farmers',
          },
        },
        onCreate: {
          node: {
            name: 'Local Farmers',
            brief: 'Local agricultural producers and stakeholders.',
            description: `Engaging with local farmers is crucial for promoting sustainable agriculture and enhancing food security.`,
          },
        },
      },
      {
        where: {
          node: {
            name: 'Food Distribution Networks',
          },
        },
        onCreate: {
          node: {
            name: 'Food Distribution Networks',
            brief:
              'Organizations involved in food distribution and supply chains.',
            description: `Collaboration with food distribution networks ensures the efficient delivery of nutritious food to the community.`,
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
              "What is the status and extent of regional and national food security in the initiative's region and community?",
            description:
              'This question assesses the current food security situation in the region and community.',
          },
        },
        {
          node: {
            brief:
              "What is the status and extent of regional and national nutritional security in the initiative's region and community?",
            description:
              'This question evaluates the nutritional security situation in the region and community.',
          },
        },
        {
          node: {
            brief:
              'How many hectares of arable land will this organization/initiative require your organization to buy or occupy?',
            description:
              'This question addresses the land use requirements of the organization and its impact on food production.',
          },
        },
        {
          node: {
            brief:
              "In what ways could your organization/initiative positively impact food security and nutritional security in the initiative's region and community?",
            description:
              'This question explores the positive impacts and programs related to food and nutritional security.',
          },
        },
        {
          node: {
            brief:
              "In what ways could your organization/initiative negatively impact food or nutritional security in the initiative's region and community?",
            description:
              'This question assesses potential negative impacts and mitigation strategies.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/organization promote sustainable agricultural practices?',
            description:
              'This question focuses on the promotion of sustainable agricultural practices.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization engage with local farmers and food producers?',
            description:
              'This question explores the engagement with local agricultural stakeholders.',
          },
        },
        {
          node: {
            brief:
              'Are there any efforts to incorporate climate-resilient crop varieties and agricultural techniques?',
            description:
              'This question addresses climate resilience in agriculture.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/organization collaborate with local communities and relevant stakeholders?',
            description:
              'This question focuses on collaboration with communities for food security and nutrition initiatives.',
          },
        },
        {
          node: {
            brief:
              'How is data collected and monitored to assess the impact of the initiative/organization?',
            description:
              'This question examines the data collection and monitoring processes for impact assessment.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Sustainable Agriculture Promotion',
            description:
              'Promote sustainable agricultural practices to enhance food production while preserving the environment.',
            name: 'Sustainable Agriculture Promotion',
          },
        },
        {
          node: {
            brief: 'Local Farmer Engagement',
            description:
              'Engage with local farmers and food producers to support their livelihoods and strengthen the local food system.',
            name: 'Local Farmer Engagement',
          },
        },
        {
          node: {
            brief: 'Climate-Resilient Agriculture',
            description:
              'Incorporate climate-resilient crop varieties and agricultural techniques to adapt to changing environmental conditions.',
            name: 'Climate-Resilient Agriculture',
          },
        },
      ],
    },
  },
};

export default foodSecurity;
