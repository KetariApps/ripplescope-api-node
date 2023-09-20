import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const climateChange: ScopeCreateInput = {
  verified: true,
  name: 'CLIMATE CHANGE',
  brief:
    'Limiting global temperature rise and addressing the impacts of climate change to avoid severe disruptions to ecosystems and human societies.',
  basis:
    'It evaluates efforts to mitigate and adapt to climate change, recognizing its far-reaching implications for both human societies and the environment.',
  description: `Addressing climate change requires a comprehensive approach that encompasses various aspects of energy consumption, transportation, and carbon removal. This initiative is committed to minimizing its environmental impact and actively contributing to a greener planet.
  
        The energy sources used in this initiative are a critical consideration. A significant percentage of energy is derived from renewable sources such as solar panels and wind turbines, emphasizing the importance of eco-friendly energy generation. Transportation methods are chosen with care, aiming to use low-carbon fuels and optimize efficiency in product transport.
  
        Fuel consumption is regularly monitored, and measures are in place to reduce it over time. Sustainable practices like solar power electrification, water purification, and efficient agriculture are integrated into the initiative's activities.
  
        The initiative utilizes Direct Air Capture technology for carbon removal, and its effectiveness and environmental impact are closely monitored and assessed. A substantial amount of CO2 removal is expected over the organization's lifespan, with a focus on accurate measurement and reporting.
  
        Carbon removal and offsets are held to high standards, being real, measurable, permanent, additional, independently verified, and unique. This ensures that the initiative's climate benefits are credible and effective.
  
        Additionally, the initiative seeks to produce renewable solar energy, carbon-neutral fuels, and low-carbon energy while implementing strategies to reduce greenhouse gas emissions. Collaboration with relevant stakeholders and organizations keeps the initiative up-to-date with emerging climate-related technologies and best practices, further enhancing its efforts in minimizing its carbon footprint.
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
                'Companies and organizations involved in providing energy services, including renewable energy.',
              description: `Energy providers play a crucial role in the transition to renewable energy sources. They are vital stakeholders in this initiative, contributing to the development and adoption of sustainable energy solutions.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Renewable Energy Industry',
            },
          },
          onCreate: {
            node: {
              name: 'Renewable Energy Industry',
              brief:
                'Sector focused on the development and promotion of renewable energy technologies.',
              description: `The renewable energy industry is at the forefront of combating climate change. Collaboration with this industry is essential for the successful transition to renewable energy sources.`,
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
              'What percentage of the energy used in this initiative comes from renewable sources, and what are the sources of renewable energy?',
            description:
              "This question assesses the initiative's reliance on renewable energy and the sources of renewable energy used.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative/organization involve air or ground transport, and if so, what efforts are made to use low-carbon fuel and optimize transportation efficiency?',
            description:
              'This question explores the transportation methods used by the initiative and their environmental considerations.',
          },
        },
        {
          node: {
            brief:
              'How is fuel consumption tracked and reduced in the initiative/organization, and what measures are in place to minimize fuel usage over time?',
            description:
              'This question focuses on fuel consumption monitoring and strategies for reducing fuel usage.',
          },
        },
        {
          node: {
            brief:
              'How are sustainable practices integrated into the initiative/organization activities, such as solar power electrification, water purification, and efficient agriculture?',
            description:
              'This question inquires about the implementation of sustainable practices in the initiative.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative use Direct Air Capture technology for carbon removal, and how is its effectiveness and environmental impact monitored and assessed?',
            description:
              'This question explores the use of Direct Air Capture technology and its monitoring and assessment.',
          },
        },
        {
          node: {
            brief:
              "What is the expected amount of CO2 removal over the organization's lifespan, and how is accurate measurement and reporting ensured?",
            description:
              'This question focuses on the estimation, measurement, and reporting of CO2 removal.',
          },
        },
        {
          node: {
            brief:
              'Are the carbon removal/offsets presented under this initiative/organization real, measurable, permanent, additional, independently verified, and unique? Please indicate which characteristics apply.',
            description:
              "This question assesses the credibility and effectiveness of the initiative's carbon removal and offsets.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative include activities related to renewable energy production, carbon-neutral fuel, or low-carbon energy, and how are the environmental benefits and effectiveness of these activities monitored and evaluated?',
            description:
              "This question explores the initiative's involvement in renewable energy and its monitoring and evaluation processes.",
          },
        },
        {
          node: {
            brief:
              'What measures are in place to reduce greenhouse gas emissions associated with the initiative/organization, such as energy-efficient technologies and waste reduction strategies?',
            description:
              "This question addresses the initiative's efforts to reduce greenhouse gas emissions.",
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization collaborate with relevant stakeholders and organizations to stay updated on emerging climate-related technologies and best practices for minimizing its carbon footprint?',
            description:
              "This question explores the initiative's collaboration with stakeholders and organizations for staying informed and adopting best practices.",
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Renewable Energy Utilization',
            description:
              'Use over 50% of energy from renewable sources like solar panels and wind turbines.',
            name: 'Renewable Energy Utilization',
          },
        },
        {
          node: {
            brief: 'Low-Carbon Transport',
            description:
              'Opt for low-carbon fuels and optimize transportation efficiency.',
            name: 'Low-Carbon Transport',
          },
        },
        {
          node: {
            brief: 'Fuel Consumption Reduction',
            description:
              'Monitor and reduce fuel usage through data analysis and eco-driving practices.',
            name: 'Fuel Consumption Reduction',
          },
        },
        {
          node: {
            brief: 'Sustainable Practices Integration',
            description:
              'Incorporate sustainable practices such as solar power electrification, water purification, and efficient agriculture.',
            name: 'Sustainable Practices Integration',
          },
        },
      ],
    },
  },
};

export default climateChange;
