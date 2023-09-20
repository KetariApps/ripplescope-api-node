import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const oceans: ScopeCreateInput = {
  name: 'OCEANS',
  brief:
    'The sustainable management and preservation of marine ecosystems and resources.',
  basis:
    'It emphasizes the need to protect and restore the health of oceans, which are vital for biodiversity, climate regulation, fisheries, and numerous other ecological and economic functions.',
  description: `Oceans play a pivotal role in global climate regulation, biodiversity conservation, and food security. This initiative prioritizes the well-being of oceans and coastal communities through a multifaceted approach.
  
        To ensure sustainable interactions with marine ecosystems, the initiative actively assesses and monitors the impact of its activities on ocean ecosystems and marine life. It takes a proactive stance by engaging in activities aimed at restoring or preserving critical marine and coastal habitats, such as coral reefs, mangrove forests, seagrass beds, and coastal wetlands. This underscores its dedication to global biodiversity and the resilience of local communities.
  
        Addressing threats to marine biodiversity is central to the initiative's mission. It tackles challenges like overexploitation of marine resources, habitat destruction, and pollution through responsible practices and eco-friendly waste management systems. The protection of endangered or vulnerable marine species and their habitats from the project's activities is a clear indicator of the initiative's compliance and deep commitment to ecological harmony.
  
        For initiatives involving fishing practices, aquaculture, or other marine resource-related activities, responsible management is essential to avoid depleting vital resources. Equally important is the promotion of resilience in coastal areas, considering the potential impacts of climate change and sea-level rise. This ensures the safety and well-being of coastal communities.
  
        Ocean conservation education is a transformative tool that can turn local communities into active guardians of marine ecosystems. Supporting or using ocean energy systems, such as tidal, wave, or offshore wind energy, can drive innovation without compromising marine health. Engagement with local communities in the sustainable management and conservation of marine resources and ecosystems harnesses collective wisdom and effort, ensuring a sustainable and harmonious coexistence with our oceans.
  
        This initiative takes practical actions to address marine and coastal conservation challenges, promoting sustainability and ethical practices at every stage of its activities.
        `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Coastal Communities',
            },
          },
          onCreate: {
            node: {
              name: 'Coastal Communities',
              brief:
                'Communities residing in coastal areas with a direct connection to marine ecosystems.',
              description: `Coastal communities are vital stakeholders in this initiative, as their well-being is closely intertwined with the health of marine ecosystems.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Marine Scientists',
            },
          },
          onCreate: {
            node: {
              name: 'Marine Scientists',
              brief:
                'Experts and researchers specializing in marine biology and ecosystems.',
              description: `Marine scientists provide valuable insights and expertise to ensure the effectiveness of this initiative in marine and coastal conservation.`,
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
              'How does the initiative/project assess and monitor the impact of its activities on ocean ecosystems and marine life?',
            description:
              "This question explores the initiative/project's approach to assessing and monitoring its impact on ocean ecosystems.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project have activities aimed at restoring or preserving marine and coastal habitats, such as coral reefs, mangrove forests, seagrass beds, or coastal wetlands?',
            description:
              "This question focuses on the initiative/project's efforts to restore or preserve critical marine and coastal habitats.",
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project address potential threats to marine biodiversity, such as overexploitation of marine resources, habitat destruction, or pollution?',
            description:
              "This question examines the initiative/project's strategies for addressing threats to marine biodiversity.",
          },
        },
        {
          node: {
            brief:
              "Does the initiative/project run or support measures to protect endangered or vulnerable marine species and their habitats from the project's activities?",
            description:
              "This question assesses the initiative/project's protection measures for endangered or vulnerable marine species.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project involve fishing practices, aquaculture, harvesting/removal of marine resources, or discharging waste into coastal waters? If so, how does the initiative/project address the potential risk of ocean resource depletion due to its activities, such as extraction, aquaculture, or waste discharge?',
            description:
              "This question explores the initiative/project's engagement in activities that may impact ocean resources and its mitigation efforts.",
          },
        },
        {
          node: {
            brief:
              'How many initiative/project activities are aimed at improving resilience in coastal areas or populations, considering the potential impacts of climate change and sea-level rise?',
            description:
              "This question focuses on the initiative/project's efforts to enhance coastal resilience in the face of climate change and sea-level rise.",
          },
        },
        {
          node: {
            brief:
              'Are there any initiatives to promote ocean conservation education and raise awareness about the importance of protecting marine ecosystems among local communities and stakeholders?',
            description:
              "This question examines the initiative/project's educational initiatives and awareness campaigns related to ocean conservation.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project involve activities that use or promote ocean energy systems (e.g., tidal, wave, or offshore wind energy)? If so, how are potential environmental impacts on marine ecosystems mitigated?',
            description:
              "This question explores the initiative/project's involvement in ocean energy systems and its efforts to mitigate environmental impacts.",
          },
        },
        {
          node: {
            brief:
              'Are there any initiatives in place to engage local communities and stakeholders in the sustainable management and conservation of marine resources and ecosystems?',
            description:
              "This question focuses on the initiative/project's engagement with local communities and stakeholders in marine resource and ecosystem conservation.",
          },
        },
      ],
    },
  },
};

export default oceans;
