import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const biodiversity: ScopeCreateInput = {
  verified: true,
  name: 'BIODIVERSITY',
  brief:
    'Preserving a variety of species and genetic diversity to ensure the resilience of ecosystems and their ability to adapt to changes.',
  basis:
    'It gauges the efforts to protect and enhance biodiversity, recognizing its vital role in ecosystem health and long-term human well-being.',
  description: `Biodiversity, the rich tapestry of life on our planet, is facing unprecedented threats. As ecosystems are disrupted and species vanish, the urgency of biodiversity conservation has never been greater. This initiative places biodiversity and ecosystem health at its core, recognizing their central role in sustaining life on Earth.
  
      The initiative begins by understanding the natural ecosystem types that exist in its primary areas of activity. By identifying and valuing these ecosystems, it lays the foundation for responsible engagement.
  
      Organizations within this initiative encompass a wide array of activities aimed at biodiversity conservation and ecosystem restoration. These may include reforestation and tree planting efforts, conservation of native crop and animal species, reserve management, and extensive conservation education initiatives. Each action is a step towards the preservation of local ecosystems and their vitality.
  
      Tree removal and establishment have significant implications for biodiversity and carbon sequestration. Understanding the number of trees affected and the species they represent helps assess the initiative's environmental impact. Similarly, for marine environments, such as coral reefs, the initiative considers the potential effects on marine biodiversity and the well-being of local communities.
  
      Reintroducing threatened species to their natural habitats is a key strategy to prevent species loss and enhance biodiversity. Protecting various ecosystems, including wetlands, dams, mangroves, dry forests, and cloud forests, is essential for both biodiversity preservation and the livelihoods of local communities.
  
      This initiative places a strong emphasis on providing ecosystem services and alternative activities to timber production, contributing to sustainable forest management and reduced deforestation. These measures ensure that long-term sustainability and harmonious coexistence with the natural environment are achieved.
  
      Monitoring and assessing changes in biodiversity over time are vital to measure the organization's effectiveness and adapt strategies accordingly. Additionally, active engagement with local communities in biodiversity conservation efforts raises awareness about the importance of protecting local ecosystems and fosters a sense of collective responsibility.
  
      Addressing potential indirect impacts on biodiversity, such as pollution, habitat fragmentation, and changes in local water bodies, is integral to the initiative's holistic approach to biodiversity conservation. By doing so, the initiative strives for a sustainable future where biodiversity thrives alongside human progress.
      `,
  stakeholders: {
    connectOrCreate: [
      {
        where: {
          node: {
            name: 'Environmental NGOs',
          },
        },
        onCreate: {
          node: {
            name: 'Environmental NGOs',
            brief:
              'Non-governmental organizations dedicated to environmental protection and conservation.',
            description: `Environmental NGOs play a pivotal role in this initiative, bringing expertise and advocacy to biodiversity conservation efforts.`,
          },
        },
      },
      {
        where: {
          node: {
            name: 'Conservation Experts',
          },
        },
        onCreate: {
          node: {
            name: 'Conservation Experts',
            brief:
              'Experts with deep knowledge in biodiversity conservation and ecosystem management.',
            description: `Conservation experts provide valuable insights and guidance to ensure the success of biodiversity conservation actions within this initiative.`,
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
              "What natural ecosystem type exists in the initiative's primary areas of activity?",
            description:
              "This question explores the types of ecosystems present in the initiative's primary areas of operation.",
          },
        },
        {
          node: {
            brief:
              'Does this initiative/organization involve or require reforestation/tree planting, ecosystem conservation, promotion of native crop/animal species, reserve management, conservation education, or similar?',
            description:
              "This question assesses the initiative/organization's involvement in activities related to biodiversity conservation and ecosystem health.",
          },
        },
        {
          node: {
            brief:
              'Approximately how many trees will be removed during the organization duration, and how many species will be represented by the trees removed?',
            description:
              'This question examines the impact of tree removal on biodiversity and species representation.',
          },
        },
        {
          node: {
            brief:
              'Approximately how many trees will be established during the organization, and how many species will be represented by the trees added?',
            description:
              "This question assesses the initiative/organization's efforts to restore tree populations and enhance biodiversity.",
          },
        },
        {
          node: {
            brief:
              'Approximately how many coral reefs or other marine environments will be removed for the purposes of this organization/program?',
            description:
              'This question explores the potential impact of the initiative/organization on marine environments.',
          },
        },
        {
          node: {
            brief:
              "How many threatened species are at risk due to the initiative/organization's activities?",
            description:
              "This question assesses the risk to threatened species as a result of the initiative/organization's activities.",
          },
        },
        {
          node: {
            brief:
              'How many threatened species could be reintroduced once operations are underway, or once operations have ceased?',
            description:
              "This question examines the potential for reintroducing threatened species as part of the initiative/organization's activities.",
          },
        },
        {
          node: {
            brief:
              'What activities are aimed at diversification of ecosystems?',
            description:
              "This question focuses on the initiative/organization's efforts to enhance ecosystem diversity.",
          },
        },
        {
          node: {
            brief:
              'How many initiative/organization activities are aimed at the protection or restoration of natural forests at risk of land conversion, natural forest at risk of fires, wildlife, swamps, flooded forests, dry forests, cloud forests, paramo, or other threatened ecosystems?',
            description:
              "This question assesses the initiative/organization's actions for the protection and restoration of threatened ecosystems.",
          },
        },
        {
          node: {
            brief:
              'Do any of the initiative/organization activities provide ecosystem services for timber and non-timber forest products or alternative activities to timber production?',
            description:
              "This question explores the initiative/organization's provision of ecosystem services and alternatives to timber production.",
          },
        },
        {
          node: {
            brief:
              'What measures does the initiative/organization have in place to mitigate the impact on endangered or threatened species within its operational area?',
            description:
              'This question examines the mitigation measures in place to protect endangered or threatened species.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization promote sustainable land-use practices that protect biodiversity, such as habitat restoration, buffer zones, or wildlife corridors?',
            description:
              "This question explores the initiative/organization's promotion of sustainable land-use practices for biodiversity conservation.",
          },
        },
        {
          node: {
            brief:
              "What efforts are made to monitor and assess the changes in biodiversity over time as a result of the organization's activities?",
            description:
              "This question examines the initiative/organization's monitoring and assessment efforts related to biodiversity changes.",
          },
        },
        {
          node: {
            brief:
              'Are there any initiatives in place to engage local communities in biodiversity conservation efforts and raise awareness about the importance of protecting local ecosystems?',
            description:
              'This question focuses on initiatives aimed at involving local communities in biodiversity conservation and awareness-raising activities.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization address potential indirect impacts on biodiversity, such as pollution, habitat fragmentation, or changes in local water bodies?',
            description:
              "This question explores the initiative/organization's approach to mitigating indirect impacts on biodiversity.",
          },
        },
      ],
    },
  },
};

export default biodiversity;
