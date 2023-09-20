import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const energy: ScopeCreateInput = {
  verified: true,
  name: 'COMMUNITY ENERGY ACCESS & AFFORDABILITY',
  brief:
    'Improving energy access, affordability, and sustainability for the community.',
  basis:
    'This initiative aims to address energy access challenges faced by the community and contribute to affordable and reliable energy services while considering the impact of climate change on energy costs and availability.',
  description: `Energy access and affordability are fundamental concerns for this initiative, with a focus on community well-being and sustainability. Several key considerations guide its approach:
  
        The initiative assesses the current energy cost in the region and evaluates the potential changes in energy cost and scarcity under climate change. It also examines the current level of community electrification and social access to energy, considering climate change impacts.
  
        Supporting communities in measuring their energy consumption and carbon footprint is a priority, empowering them to make informed choices and optimize energy use.
  
        Energy efficiency promotion is a cornerstone of this initiative, emphasizing education and practical strategies for reducing energy consumption and costs within the community.
  
        Transitioning to clean, renewable energy sources is a core objective, reducing reliance on fossil fuels and fostering a sustainable energy future. The initiative assists communities in planning for this transition and identifies available renewable energy sources.
  
        Collaboration with local communities and stakeholders drives energy conservation and responsible energy use, fostering a collective mission for sustainability.
  
        Bridging the electrification gap and promoting access to clean energy solutions are transformative actions. The initiative collaborates with local authorities and organizations to ensure that no household lacks access to electricity.
  
        Raising awareness about energy conservation and clean energy advantages among community members and stakeholders is a key strategy. Measuring and reporting progress toward community-focused clean energy goals ensures alignment with community aspirations.
        `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Energy Providers',
            },
          },
          onCreate: {
            node: {
              name: 'Energy Providers',
              brief:
                'Entities responsible for supplying energy services to the community.',
              description: `Engagement with energy providers is crucial to understanding the energy landscape and addressing energy access and affordability challenges.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Community Members',
            },
          },
          onCreate: {
            node: {
              name: 'Community Members',
              brief:
                'Residents of the community affected by energy initiatives.',
              description: `Engaging with community members ensures that the initiative aligns with their energy needs and aspirations.`,
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
              "What is the current energy cost in the initiative's region, and is energy cost or scarcity expected to change there under climate change?",
            description:
              'This question assesses the current and future energy cost and scarcity in the region.',
          },
        },
        {
          node: {
            brief:
              'What is the current level of community electrification and social access to energy in the region, and is this expected to change under climate change impacts?',
            description:
              'This question evaluates the current electrification and social access status and its expected changes under climate change.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization support communities in measuring their energy consumption and carbon footprint?',
            description:
              "This question explores the initiative's support for community energy measurement and carbon footprint assessment.",
          },
        },
        {
          node: {
            brief:
              'What efforts does the initiative make to promote energy efficiency within the community?',
            description:
              "This question focuses on the initiative's efforts to promote energy efficiency within the community.",
          },
        },
        {
          node: {
            brief:
              'How does the initiative prioritize supporting communities in their transition to clean, renewable energy sources, reducing their reliance on fossil fuels?',
            description:
              "This question examines the initiative's prioritization of clean energy transition and fossil fuel reduction.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative assist the community in planning for a transition to clean, low-carbon electrification?',
            description:
              "This question explores the initiative's assistance in planning for clean, low-carbon electrification.",
          },
        },
        {
          node: {
            brief:
              'What sources of clean, renewable energy are available for communities in the region, such as solar, wind, hydro, or geothermal energy?',
            description:
              'This question assesses the availability of clean, renewable energy sources in the region.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative collaborate with local communities and stakeholders to drive energy conservation and responsible energy use?',
            description:
              'This question focuses on the collaboration efforts to promote energy conservation and responsible energy use.',
          },
        },
        {
          node: {
            brief:
              'If households in the community lack electricity, is the initiative collaborating with local authorities or organizations to facilitate the installation and maintenance of electrification services and promote access to clean energy solutions?',
            description:
              "This question assesses the initiative's efforts to address electrification gaps and promote clean energy access.",
          },
        },
        {
          node: {
            brief:
              'What steps does the initiative take to raise awareness about energy conservation and the advantages of transitioning to clean energy sources among community members and stakeholders?',
            description:
              "This question explores the initiative's efforts to raise awareness about energy conservation and clean energy advantages.",
          },
        },
        {
          node: {
            brief:
              'How does the initiative measure and report progress toward its community-focused clean energy goals and commitments?',
            description:
              "This question assesses the initiative's measurement and reporting of progress toward community-focused clean energy goals.",
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Energy Efficiency Workshops',
            description:
              'Conduct energy efficiency workshops within the community to educate residents about reducing energy consumption.',
            name: 'Energy Efficiency Workshops',
          },
        },
        {
          node: {
            brief: 'Renewable Energy Transition Support',
            description:
              'Offer financial incentives and technical assistance to communities transitioning to clean, renewable energy sources.',
            name: 'Renewable Energy Transition Support',
          },
        },
        {
          node: {
            brief: 'Electrification Collaboration',
            description:
              'Collaborate with local authorities and organizations to facilitate electrification in households lacking electricity.',
            name: 'Electrification Collaboration',
          },
        },
      ],
    },
  },
};

export default energy;
