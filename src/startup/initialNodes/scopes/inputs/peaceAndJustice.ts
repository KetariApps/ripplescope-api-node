import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const peaceJustice: ScopeCreateInput = {
  verified: true,
  name: 'PEACE AND JUSTICE',
  brief:
    'Fostering peaceful coexistence and addressing potential conflicts within the community.',
  basis:
    'This initiative focuses on understanding and contributing to the state of peace and conflict in the community.',
  description: `Peace and justice are at the core of this initiative, addressing the following key aspects:
  
    - Evaluating the status and extent of peace and conflict in the initiative's region.
    - Ensuring equitable access to initiative/project administration HR services for local staff.
    - Implementing confidentiality and privacy measures for local staff.
    - Clarifying affiliations or associations with political, religious, or other groups and their potential impact on peace and justice.
    
    This initiative's approach reflects its commitment to fostering peaceful coexistence, addressing conflicts, and upholding justice within the community.`,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Local Leaders',
            },
          },
          onCreate: {
            node: {
              name: 'Local Leaders',
              brief: 'Key figures within the local community.',
              description: `Engaging with local leaders is crucial for peace and justice initiatives.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Conflict Resolution Experts',
            },
          },
          onCreate: {
            node: {
              name: 'Conflict Resolution Experts',
              brief: 'Professionals specializing in conflict resolution.',
              description: `Collaborating with conflict resolution experts enhances conflict-sensitive approaches.`,
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
              brief: 'Residents of the local community.',
              description: `Community members' involvement is critical for understanding and addressing peace and justice issues.`,
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
              "What is the status and extent of peace and conflict in the initiative's region? For example, is there systemic peace, isolated violence or conflict, or systemic violence or conflict?",
            description:
              'This question assesses the peace and conflict landscape in the region.',
          },
        },
        {
          node: {
            brief:
              'Can local staff access your initiative/project administration HR services to process local claims?',
            description:
              'This question evaluates HR service accessibility for local staff.',
          },
        },
        {
          node: {
            brief:
              'Do confidentiality and privacy clauses apply to local staff under the purview of this initiative/project?',
            description:
              'This question addresses data privacy and confidentiality for local staff.',
          },
        },
        {
          node: {
            brief:
              "Is the initiative/project affiliated with any particular political party, religious group, or other group or organization that may be viewed, correctly or incorrectly, as harmful in any way to the peace and justice of the initiative's region or local community?",
            description:
              'This question explores affiliations and their potential impact on peace and justice.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Conflict Sensitivity Training',
            description: 'Train staff on conflict-sensitive approaches.',
            name: 'Conflict Sensitivity Training',
          },
        },
        {
          node: {
            brief: 'Community Engagement Initiatives',
            description:
              'Engage with local leaders and community members to address peace and justice issues.',
            name: 'Community Engagement Initiatives',
          },
        },
        {
          node: {
            brief: 'Affiliation Transparency Measures',
            description:
              'Implement transparency measures regarding affiliations.',
            name: 'Affiliation Transparency Measures',
          },
        },
        {
          node: {
            brief: 'Privacy and Confidentiality Protocols',
            description:
              'Establish protocols for ensuring privacy and confidentiality for local staff.',
            name: 'Privacy and Confidentiality Protocols',
          },
        },
      ],
    },
  },
};

export default peaceJustice;
