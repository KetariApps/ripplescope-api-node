import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const politicalVoice: ScopeCreateInput = {
  name: 'POLITICAL VOICE AND REPRESENTATION',
  brief:
    'Fostering civic engagement and political participation, particularly among marginalized community members.',
  basis:
    'This initiative aims to strengthen civic engagement and political participation, especially among historically marginalized or underrepresented community members.',
  description: `Promoting greater political voice and representation is at the core of this initiative's mission. Several key considerations guide its approach:
  
        The initiative assesses the status and extent of governance transparency at the national, regional, and local levels. It actively engages with local authorities and civil society organizations to promote transparency and open dialogue.
  
        Grassroots organizations, such as community-run cooperatives, play a vital role in the community's political landscape. The initiative supports these organizations through financial and technical assistance, fostering partnerships to amplify local voices.
  
        A key focus is addressing political representation gaps, particularly for women and minorities at regional and national levels. Leadership training and partnerships are utilized to empower these groups and enhance their participation in political processes.
  
        The initiative is dedicated to addressing power imbalances and ensuring that decision-making processes are democratic and inclusive. Regular dialogue with community members and diverse representatives is established to achieve this goal.
  
        Participatory design techniques and collaboration with community facilitators are central to co-creating solutions that align with community values and needs. The initiative actively involves local leadership and governance in collective initiatives for community development.
  
        Inclusivity is paramount, and the initiative implements measures to ensure the active participation of marginalized or underrepresented groups in decision-making processes. Safe spaces and targeted outreach strategies are utilized to achieve this goal.
        `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Community Leaders',
            },
          },
          onCreate: {
            node: {
              name: 'Community Leaders',
              brief:
                'Leaders within the community who are integral to political engagement.',
              description: `Community leaders are pivotal in driving political engagement and representation within the community. Collaboration with them is essential.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Local Government',
            },
          },
          onCreate: {
            node: {
              name: 'Local Government',
              brief:
                'Local governing bodies that impact political processes at the community level.',
              description: `Engaging with local government entities is crucial for promoting civic engagement and political participation.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Civil Society Organizations',
            },
          },
          onCreate: {
            node: {
              name: 'Civil Society Organizations',
              brief:
                'Non-governmental organizations focused on civil and political engagement.',
              description: `Collaboration with civil society organizations enhances the initiative's efforts to foster political voice and representation.`,
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
              "What is the status and extent of transparency of governance in the initiative's nation, region, and local community?",
            description:
              'This question assesses the level of governance transparency at different levels.',
          },
        },
        {
          node: {
            brief:
              "What is the status, extent, and strength/influence of grassroots organizations in the initiative's community and region?",
            description:
              'This question evaluates the role and impact of grassroots organizations in the political landscape.',
          },
        },
        {
          node: {
            brief:
              'To what extent do women and minorities have a regional and national political voice?',
            description:
              'This question explores the political representation of women and minorities.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project address potential power imbalances between external stakeholders and the local community, and how is the decision-making process designed to be democratic and inclusive?',
            description:
              'This question focuses on addressing power imbalances and promoting inclusive decision-making.',
          },
        },
        {
          node: {
            brief:
              "Has the project worked extensively with community facilitators using participatory design techniques to determine the project's role and presence in the community?",
            description:
              'This question assesses the use of participatory design techniques and community facilitators in project planning.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project engage local leadership and governance (contribution to more than 30% of efforts)?',
            description:
              'This question evaluates the level of engagement with local leadership and governance in project efforts.',
          },
        },
        {
          node: {
            brief:
              "What measures does the initiative/project take to ensure the inclusion and active participation of marginalized or underrepresented groups in decision-making processes related to the project's goals and activities?",
            description:
              'This question addresses measures for the inclusion of marginalized groups in decision-making processes.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Grassroots Empowerment',
            description:
              'Support grassroots organizations with financial and technical assistance to amplify local voices.',
            name: 'Grassroots Empowerment',
          },
        },
        {
          node: {
            brief: 'Women and Minority Representation',
            description:
              'Implement leadership training and partnerships to enhance political representation of women and minorities.',
            name: 'Women and Minority Representation',
          },
        },
        {
          node: {
            brief: 'Inclusive Decision-Making',
            description:
              'Establish inclusive decision-making processes with diverse representatives and regular community dialogue.',
            name: 'Inclusive Decision-Making',
          },
        },
      ],
    },
  },
};

export default politicalVoice;
