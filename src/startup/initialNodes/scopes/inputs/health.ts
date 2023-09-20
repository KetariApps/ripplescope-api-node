import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const health: ScopeCreateInput = {
  name: 'HEALTH AND WELL-BEING',
  brief: 'Improving health and well-being for employees and the community.',
  basis:
    'This initiative prioritizes employee and community health, demonstrating a commitment to social responsibility.',
  description: `Health and well-being are foundational to this initiative, addressing key health challenges in the community. Key considerations include:
  
    - Assessing employee healthcare costs and offering medical insurance or assistance.
    - Providing paid/unpaid sick leave with clear qualification criteria.
    - Investing in healthcare infrastructure and supporting local public health.
    - Ensuring workplace conditions meet safety standards and promoting well-being.
    - Offering support to pregnant employees and new parents.
    - Providing mental health services to reduce workplace stress.
    
    This initiative's approach reflects its values and long-term vision, emphasizing the well-being of employees and the community.`,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Health Clinics',
            },
          },
          onCreate: {
            node: {
              name: 'Health Clinics',
              brief: 'Local healthcare facilities.',
              description: `Collaboration with health clinics is vital for promoting health and well-being.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Medical Professionals',
            },
          },
          onCreate: {
            node: {
              name: 'Medical Professionals',
              brief: 'Healthcare experts and practitioners.',
              description: `Engaging with medical professionals contributes to the initiative's healthcare goals.`,
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
              'If staff are in need of preventative or emergency health care, what percentage of staff must pay for it out of pocket?',
            description: 'This question assesses employee healthcare costs.',
          },
        },
        {
          node: {
            brief:
              'Does the project/initiative offer any medical insurance or assistance with paying employee medical bills?',
            description:
              'This question examines healthcare support for employees.',
          },
        },
        {
          node: {
            brief:
              'Are employees entitled to take paid/unpaid sick leave? If so, what, if any, documentation is provided to qualify for paid or unpaid leave?',
            description:
              'This question explores sick leave policies and qualification criteria.',
          },
        },
        {
          node: {
            brief:
              'How many project/initiative activities invest or drive investments to healthcare infrastructure?',
            description:
              'This question assesses investments in healthcare infrastructure.',
          },
        },
        {
          node: {
            brief: 'How will this project support local public health?',
            description:
              "This question focuses on the initiative's impact on public health.",
          },
        },
        {
          node: {
            brief:
              'In terms of workplace conditions, what health and safety equipment is provided? Does this equipment meet nationally or internationally recognized safety requirements? If so, which safety requirements does it meet?',
            description:
              'This question addresses workplace safety equipment and standards.',
          },
        },
        {
          node: {
            brief:
              'In terms of workplace conditions, what noise level are employees subjected to during project/initiative activities?',
            description:
              'This question assesses noise levels in the workplace.',
          },
        },
        {
          node: {
            brief:
              'In terms of workplace conditions, what is the average shift length per day, in hours?',
            description:
              'This question evaluates average shift lengths for employee well-being.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project offer any assistance to pregnant employees or new parents, e.g., paid maternity or paternity leave?',
            description:
              'This question addresses support for pregnant employees and new parents.',
          },
        },
        {
          node: {
            brief:
              'What mental health services does the initiative/project run to support employee well-being and reduce workplace stress?',
            description:
              'This question focuses on mental health support for employees.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Healthcare Infrastructure Investment',
            description: 'Invest in healthcare facilities and equipment.',
            name: 'Healthcare Infrastructure Investment',
          },
        },
        {
          node: {
            brief: 'Community Health Programs',
            description:
              'Promote community health through education and awareness.',
            name: 'Community Health Programs',
          },
        },
        {
          node: {
            brief: 'Safety Equipment Compliance',
            description:
              'Provide safety equipment meeting recognized standards.',
            name: 'Safety Equipment Compliance',
          },
        },
        {
          node: {
            brief: 'Mental Health Support Services',
            description:
              'Offer mental health services for employee well-being.',
            name: 'Mental Health Support Services',
          },
        },
      ],
    },
  },
};

export default health;
