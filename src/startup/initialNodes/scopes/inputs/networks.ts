import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const networks: ScopeCreateInput = {
  name: 'NETWORKS',
  brief:
    'Promoting participation in networks of relationships among people who live and work in a particular society, enabling that society to function effectively.',
  basis:
    'The NETWORKS initiative aims to strengthen the social fabric of communities by facilitating participation in networks of relationships among individuals living and working in a particular society. It recognizes that a well-connected society is better equipped to address complex challenges and function effectively. This initiative focuses on fostering collaboration and synergies among various stakeholders, with the overarching goal of enhancing resilience and sustainability in the face of interconnected challenges.',

  considerations: {
    Question: {
      create: [
        {
          node: {
            brief:
              'How can the initiative promote participation in networks among marginalized or underrepresented communities within the society?',
            description:
              "This question addresses strategies to ensure that marginalized or underrepresented communities are actively included in the initiative's efforts to promote network participation.",
          },
        },
        {
          node: {
            brief:
              'What specific challenges or barriers exist in the community that hinder network participation, and how can the initiative address them?',
            description:
              'This question focuses on identifying and overcoming barriers to network participation within the community.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative plan to sustain and expand the networks it helps create or strengthen over the long term?',
            description:
              'This question explores the sustainability and growth strategies for the networks fostered by the initiative.',
          },
        },
      ],
    },
  },
};

export default networks;
