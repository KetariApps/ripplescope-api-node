import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const land: ScopeCreateInput = {
  verified: true,
  name: 'LAND',
  brief:
    'Avoiding overexploitation and degradation of land resources to maintain soil fertility and support agricultural productivity.',
  basis:
    'It evaluates land use practices that balance agricultural needs with ecological sustainability, promoting long-term soil fertility and agricultural viability.',
  description: `Land, the foundation of terrestrial ecosystems, plays a critical role in supporting biodiversity, mitigating climate change, and ensuring sustainable livelihoods. This initiative places land conservation and responsible land management at its core, acknowledging their significance in safeguarding ecological health.
  
      Before embarking on any work, the initiative conducts a thorough assessment of the site's status and extent of environmental degradation. The site's condition can range from degraded to natural, with varying degrees of disturbances. Signs of degradation may include soil erosion, bare or compacted soil, absence of natural vegetation, or contaminants in soil or water. Recognizing these symptoms guides the organization's approach to restoration or protection. It also provides insights into the site's potential to support biodiversity, climate resilience, and ecosystem services.
  
      Nearby disturbances, such as heavily trafficked roads, industrial activity, managed agricultural or timberland, or residential areas, can impact local ecosystems. Noise, pollution, and habitat fragmentation resulting from these disturbances can reduce biodiversity and disrupt ecological balance. Understanding these nearby disturbances informs mitigation plans and promotes landscape healing.
  
      Continuous assessment during the initiative's full operation is essential to monitor and address any environmental degradation on the site. This ongoing evaluation determines whether the organization has successfully minimized or inadvertently caused further degradation. It allows for operational adjustments to enhance ecological benefits and reduce harm.
  
      If the organization or program necessitates the acquisition of arable land, this decision comes with implications. Converting such land can disrupt local food systems, potentially leading to food insecurity and biodiversity loss. However, if the organization focuses on ecological restoration, acquiring arable land can contribute to sustainability and support environmental goals.
  
      Overall, this initiative prioritizes an awareness of these factors and their integration into the organization's planning and operation. By doing so, it aims to achieve better environmental outcomes, benefiting both the local ecology and communities while ensuring the overall success of the initiative.
      `,
  stakeholders: {
    connectOrCreate: [
      {
        where: {
          node: {
            name: 'Land Management Agencies',
          },
        },
        onCreate: {
          node: {
            name: 'Land Management Agencies',
            brief:
              'Government or non-governmental agencies responsible for land management and conservation.',
            description: `Land management agencies play a critical role in this initiative, providing guidance and expertise in sustainable land management and conservation.`,
          },
        },
      },
      {
        where: {
          node: {
            name: 'Local Landowners',
          },
        },
        onCreate: {
          node: {
            name: 'Local Landowners',
            brief:
              'Individuals or entities owning land within or adjacent to the initiative site.',
            description: `Local landowners are important stakeholders in this initiative, as their cooperation and involvement are key to land conservation efforts.`,
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
              'What is/was the status and extent of any environmental degradation of the initiative site before work started?',
            description:
              'This question explores the condition and history of the site before organization initiation.',
          },
        },
        {
          node: {
            brief:
              'What is/will be the status and extent of any environmental degradation of the initiative site when the initiative is fully operational?',
            description:
              "This question assesses the site's expected condition during full organization operation.",
          },
        },
        {
          node: {
            brief:
              'Does this organization/program require your organization to buy or occupy [arable] land?',
            description:
              'This question examines the implications of acquiring arable land for the organization or program.',
          },
        },
      ],
    },
  },
};

export default land;
