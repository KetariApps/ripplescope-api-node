import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const supplyChainsAndSourcing: ScopeCreateInput = {
  verified: true,
  name: 'SUPPLY CHAINS AND SOURCING',
  brief:
    'Supply chain responsibility, including implementing ethical practices, fair labor conditions, and environmental considerations to harmonize economic activities with broader social and environmental goals.',
  basis:
    'It assesses the extent to which supply chain practices align with social justice and environmental sustainability, ensuring that economic activities support rather than undermine these principles.',
  description: `To be a true champion of sustainability, this initiative extends its vision to consider the entirety of a product\'s lifecycle, from its origin to the consumer’s hands. It is grounded in a steadfast commitment to supply chain responsibility, demanding ethical practices, fair labor conditions, and clear environmental considerations at every step.
  
        Holding suppliers to rigorous environmental and social standards is a cornerstone of this initiative. It ensures that all suppliers within its activities adhere to established environmental and social standards, promoting responsible practices and ethical conduct. Furthermore, tracing the source materials used in the initiative's products is a priority. This traceability is not only for transparency but also to guarantee that source materials are sustainably sourced, ethically produced, and do not contribute to deforestation or habitat destruction.
  
        Transportation impacts within the supply chain are minimized through various strategies, such as optimizing transportation routes, using low-carbon modes of transport, and supporting local sourcing. Resource utilization is also a central focus, with efficient water management, reduced energy consumption, and waste reduction practices in place.
  
        The initiative engages in partnerships and collaborations with local communities and indigenous groups to ensure that raw materials are sourced in a manner that respects traditional land use, rights, and cultural values. Additionally, it actively promotes the responsible use of potentially hazardous or harmful materials, such as agrochemicals, fertilizers, and pesticides within the supply chain, with a strong emphasis on sustainable alternatives.
  
        Measuring and tracking progress in terms of sustainable sourcing of inputs is a fundamental aspect of the initiative's commitment. Mechanisms for continuous improvement are in place to ensure that responsible sourcing practices evolve and advance over time. The initiative also invests in and supports the research and development of green technology and sustainable solutions at various points along its supply chain.
  
        Engaging with consumers, stakeholders, and local communities is a core component of the initiative's approach to raise awareness about its commitment to sustainable sourcing, responsible practices, and the positive social and environmental impacts of its activities. Sustainability is viewed as a shared journey for all, and transparency is a key driver of trust and accountability.
        `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Supplier Organizations',
            },
          },
          onCreate: {
            node: {
              name: 'Supplier Organizations',
              brief:
                'Organizations that supply materials and resources to the initiative.',
              description: `Supplier organizations are crucial stakeholders in this initiative, as they play a vital role in ensuring ethical and responsible sourcing practices.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Environmental and Social Standards Organizations',
            },
          },
          onCreate: {
            node: {
              name: 'Environmental and Social Standards Organizations',
              brief:
                'Organizations that set and promote environmental and social standards.',
              description: `Environmental and social standards organizations collaborate with this initiative to ensure that suppliers adhere to established standards.`,
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
              'How does the initiative/project ensure supply chain responsibility, including implementing ethical practices, fair labor conditions, and environmental considerations across its supply chain?',
            description:
              "This question explores the initiative/project's approach to supply chain responsibility and ethical practices.",
          },
        },
        {
          node: {
            brief:
              "Are there established environmental and social standards that suppliers within the initiative's activities must adhere to, promoting responsible practices and ethical conduct?",
            description:
              'This question inquires about the existence of environmental and social standards for suppliers within the initiative.',
          },
        },
        {
          node: {
            brief:
              "What measures are in place to trace the source materials used in the initiative's products, ensuring they are sustainably sourced, ethically produced, and do not contribute to deforestation or habitat destruction?",
            description:
              'This question focuses on traceability and responsible sourcing of materials.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project work to reduce transportation impacts within its supply chain, such as optimizing transportation routes, using low-carbon modes of transport, or supporting local sourcing?',
            description:
              'This question explores strategies to minimize transportation impacts within the supply chain.',
          },
        },
        {
          node: {
            brief:
              'What strategies does the initiative/project employ to minimize resource utilization within its activities, such as efficient water management, reduced energy consumption, and waste reduction?',
            description:
              'This question focuses on resource utilization and sustainability measures.',
          },
        },
        {
          node: {
            brief:
              'Are there partnerships or collaborations with local communities and indigenous groups to ensure that raw materials are sourced in a manner that respects traditional land use, rights, and cultural values?',
            description:
              'This question assesses partnerships with local communities and indigenous groups for responsible sourcing.',
          },
        },
        {
          node: {
            brief:
              "What initiatives are in place to promote the responsible use of potentially hazardous or harmful materials, such as agrochemicals, fertilizers, and pesticides within the initiative's supply chain?",
            description:
              'This question focuses on initiatives for responsible use of hazardous materials.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project measure and track its progress in terms of sustainable sourcing of inputs, and what mechanisms are in place for continuous improvement?',
            description:
              'This question explores measurement, tracking, and continuous improvement mechanisms for sustainable sourcing.',
          },
        },
        {
          node: {
            brief:
              "Are there efforts to engage with consumers, stakeholders, and local communities to raise awareness about the initiative's commitment to sustainable sourcing, responsible practices, and its activities' positive social and environmental impacts?",
            description:
              'This question assesses efforts to engage with various stakeholders for awareness-raising.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project invest in, or otherwise support the research/development of green technology or sustainable solutions at any point along its supply chain?',
            description:
              'This question explores investments in green technology and sustainable solutions within the supply chain.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Ethical Supply Chain Standards',
            description:
              'Set and enforce ethical supply chain standards, including fair labor conditions and environmental considerations.',
            name: 'Ethical Supply Chain Standards',
          },
        },
        {
          node: {
            brief: 'Traceable Source Materials',
            description:
              'Implement traceability measures for source materials, ensuring sustainability and ethical production.',
            name: 'Traceable Source Materials',
          },
        },
        {
          node: {
            brief: 'Reduced Transportation Impact',
            description:
              'Employ strategies to reduce transportation impacts, such as optimizing routes and supporting local sourcing.',
            name: 'Reduced Transportation Impact',
          },
        },
        {
          node: {
            brief: 'Resource Utilization Efficiency',
            description:
              'Focus on resource utilization efficiency, including efficient water management, reduced energy consumption, and waste reduction.',
            name: 'Resource Utilization Efficiency',
          },
        },
      ],
    },
  },
};

export default supplyChainsAndSourcing;
