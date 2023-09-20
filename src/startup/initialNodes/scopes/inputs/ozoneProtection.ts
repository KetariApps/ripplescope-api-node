import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const ozoneProtection: ScopeCreateInput = {
  verified: true,
  name: 'OZONE PROTECTION',
  brief:
    'Protecting the ozone layer and preventing ozone depletion for environmental and social benefits.',
  basis:
    'The initiative aims to safeguard the ozone layer and contribute to environmental and social well-being.',
  description: `The focus of an ozone-centered initiative should be clear in its goals and the broader 
      benefits it brings to society and the environment. The energy and cooling methods used should be transparent, 
      emphasizing their sustainability. As ozone generation and use have environmental implications, meticulous 
      care in its management is essential.

      Understanding direct impacts and byproducts of ozone use is key for gauging the initiative's full environmental 
      impact. Worker and community safety regarding ozone exposure is paramount, and this responsibility extends to 
      involving local communities in the initiative's processes. Transparent monitoring and public disclosure 
      of impacts ensure accountability.
      
      Comprehensive evaluations, like life cycle analyses, offer insights into the entire environmental footprint 
      of an initiative. Lastly, the initiative should be adaptive, constantly evolving based on new information 
      and technological advancements to ensure the responsible use of ozone.
      `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'ENVIRONMENTAL PROTECTION AGENCIES',
            },
          },
          onCreate: {
            node: {
              name: 'ENVIRONMENTAL PROTECTION AGENCIES',
              brief:
                'Organizations dedicated to protecting the environment, including the ozone layer.',
              description: `Environmental protection agencies are organizations committed to safeguarding the environment, 
                with a particular focus on the ozone layer. They advocate for ozone layer protection, enforce regulations, 
                and collaborate with other stakeholders to prevent ozone depletion.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'OZONE ADVOCATES',
            },
          },
          onCreate: {
            node: {
              name: 'OZONE ADVOCATES',
              brief: `Advocates and experts dedicated to ozone layer preservation.`,
              description:
                'Ozone advocates are individuals and groups with expertise in ozone layer preservation. They play a crucial role in raising awareness, advocating for policies, and supporting initiatives to prevent ozone depletion.',
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
              'How important is the protection of the ozone layer viewed by the community? How can the initiative contribute to preventing ozone depletion?',
            description:
              "This question assesses the community's perception of ozone layer protection and how the initiative contributes to preventing ozone depletion.",
          },
        },
        {
          node: {
            brief:
              'What is the primary objective of your ozone-related initiative/organization, and how does it contribute to environmental and social benefits?',
            description:
              'This question aims to understand the primary goals of the ozone-related initiative and how it benefits the environment and society.',
          },
        },
        {
          node: {
            brief:
              'Does this organization/program require the use of intensive cooling or a cold chain? If so, please detail the energy sources and their sustainability metrics.',
            description:
              'This question inquires about the cooling requirements of the initiative and the sustainability metrics of the energy sources used.',
          },
        },
        {
          node: {
            brief:
              'How is ozone generated in your program, and what precautions are taken to minimize its unintentional release into the environment?',
            description:
              'This question explores the methods of ozone generation and safety precautions to prevent unintentional releases.',
          },
        },
        {
          node: {
            brief:
              'What are the potential direct environmental impacts of ozone use in your initiative, both positive and negative?',
            description:
              'This question seeks to understand the direct environmental effects of ozone use, including both positive and negative impacts.',
          },
        },
        {
          node: {
            brief:
              'Are there any byproducts generated from the use of ozone in your program? How are these byproducts managed, and what is their environmental footprint?',
            description:
              'This question addresses the management of byproducts generated from ozone use and their environmental impact.',
          },
        },
        {
          node: {
            brief:
              'How does your program ensure the safety of workers and surrounding communities in relation to ozone exposure?',
            description:
              'This question focuses on safety measures in place to protect workers and communities from ozone exposure.',
          },
        },
        {
          node: {
            brief:
              'Have stakeholders, especially local communities, been consulted and engaged in the planning and execution of this ozone-related initiative?',
            description:
              'This question assesses the involvement of stakeholders, particularly local communities, in the initiative.',
          },
        },
        {
          node: {
            brief:
              'What systems or tools are in place to monitor and measure the environmental and social impacts of your ozone use? Are these findings periodically reviewed and publicly disclosed?',
            description:
              'This question inquires about the monitoring and disclosure mechanisms for environmental and social impacts related to ozone use.',
          },
        },
        {
          node: {
            brief:
              'Have you conducted a life cycle analysis to assess the overall environmental impact of your initiative, including raw material sourcing, ozone generation, application, and eventual disposal or decay?',
            description:
              'This question focuses on conducting a life cycle analysis to evaluate the full environmental impact of the initiative.',
          },
        },
        {
          node: {
            brief:
              'What measures are in place to ensure continuous improvement in environmental and social responsibility as it pertains to ozone use, based on learnings and advancements in technology?',
            description:
              'This question addresses continuous improvement in environmental and social responsibility related to ozone use.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Sustainable Cooling',
            description:
              'Use sustainable energy sources for intensive cooling to minimize carbon emissions.',
            name: 'Sustainable Cooling',
          },
        },
        {
          node: {
            brief: 'Ozone Generation Management',
            description:
              'Prevent ozone release during generation with closed-loop systems, proper ventilation, and containment.',
            name: 'Ozone Generation Management',
          },
        },
        {
          node: {
            brief: 'Environmental Impact Assessment',
            description:
              'Identify and manage direct environmental effects of ozone use, including byproduct treatment.',
            name: 'Environmental Impact Assessment',
          },
        },
        {
          node: {
            brief: 'Worker and Community Safety',
            description:
              'Implement safety protocols, training, and protective measures for ozone exposure.',
            name: 'Worker and Community Safety',
          },
        },
      ],
    },
  },
};

export default ozoneProtection;
