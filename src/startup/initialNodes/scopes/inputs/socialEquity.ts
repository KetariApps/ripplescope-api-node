import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const socialEquity: ScopeCreateInput = {
  verified: true,
  name: 'SOCIAL EQUITY AND INCLUSIVITY',
  brief:
    'Promoting social equity, inclusivity, and diversity within the initiative and community.',
  basis:
    'This initiative places a strong emphasis on promoting social equity, inclusivity, and diversity within both the initiative and the broader community it serves.',
  description: `Promoting social equity and inclusivity is a fundamental goal of this initiative. Several key considerations guide its approach:
  
        Assessing the representation of ethnic or religious minorities among staff members is crucial. The initiative strives to create a workforce that mirrors the broader community it serves and actively seeks diverse perspectives.
  
        Diversity in age is appreciated, and the initiative values the varied experiences and viewpoints that different age groups bring. The percentage of staff over 35 reflects the initiative's commitment to age inclusivity.
  
        Language diversity is encouraged, as it fosters multicultural synergies and expands the initiative's reach and understanding. Staff who are not native speakers of the region\'s official language contribute to this diversity.
  
        Ensuring the inclusion and support of staff with registered disabilities is a priority. The initiative has put in place accommodations and accessibility measures to enable every team member to fully participate and contribute.
  
        The existence of a Diversity, Equity, and Inclusion (DEI) group or committee within the initiative underscores its proactive approach to ensure that every voice is heard and considered.
  
        Training programs focused on disability etiquette and cultural sensitivity are implemented to nurture a respectful and informed work environment.
  
        Transparency in sharing diversity and inclusion metrics with the public demonstrates the initiative's commitment to accountability and progress.
  
        Understanding the percentage of geographically secluded community members helps prevent the unintentional oversight or isolation of any population segment.
        `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Community Members',
            },
          },
          onCreate: {
            node: {
              name: 'Community Members',
              brief: 'Members of the local community.',
              description:
                'Engaging with community members is central to promoting social equity and inclusivity.',
            },
          },
        },
        {
          where: {
            node: {
              name: 'Equity Advocates',
            },
          },
          onCreate: {
            node: {
              name: 'Equity Advocates',
              brief: 'Advocates for social equity and inclusivity.',
              description:
                "Collaborating with equity advocates strengthens the initiative's commitment to social equity.",
            },
          },
        },
        {
          where: {
            node: {
              name: 'Local Businesses',
            },
          },
          onCreate: {
            node: {
              name: 'Local Businesses',
              brief: 'Businesses operating within the local community.',
              description:
                'Engaging with local businesses can enhance economic opportunities and inclusivity.',
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
              'What percentage of total staff identifies as an ethnic or religious minority?',
            description:
              'This question assesses the diversity of the workforce in terms of ethnic and religious backgrounds.',
          },
        },
        {
          node: {
            brief:
              'What percentage of the initiative/project staff is over 35 years old?',
            description:
              'This question evaluates the age diversity within the workforce.',
          },
        },
        {
          node: {
            brief:
              "What percentage of the initiative/project staff is not a native speaker of the region's official language?",
            description:
              'This question explores language diversity among staff members.',
          },
        },
        {
          node: {
            brief:
              'What percentage of the initiative/project has a registered disability?',
            description:
              'This question assesses the representation of employees with disabilities.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project have some form of DEI group/committee? If so, what percentage of the total employees and communities-served have their interests represented in the DEI group?',
            description:
              'This question examines the existence and representation of a DEI group or committee.',
          },
        },
        {
          node: {
            brief:
              'Are there specific training and awareness programs implemented to educate employees and team members about disability etiquette and ethnic/cultural sensitivity?',
            description:
              'This question explores the presence of training programs focused on disability etiquette and cultural sensitivity.',
          },
        },
        {
          node: {
            brief:
              'How transparent is the initiative/project in sharing its diversity and inclusion metrics and progress with the public?',
            description:
              'This question assesses the transparency of the initiative in sharing diversity and inclusion metrics.',
          },
        },
        {
          node: {
            brief:
              'What percentage of community members are considered geographically secluded?',
            description:
              'This question helps identify and address the needs of geographically secluded community members.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Representation of Ethnic and Religious Minorities',
            description:
              'Implement inclusive hiring practices to improve the representation of ethnic and religious minorities within the staff.',
            name: 'Representation of Ethnic and Religious Minorities',
          },
        },
        {
          node: {
            brief: 'Diversity in Age',
            description:
              'Create an inclusive hiring process and work environment that values the perspectives of different age groups.',
            name: 'Diversity in Age',
          },
        },
        {
          node: {
            brief: 'Language Diversity',
            description:
              'Encourage language diversity to foster multicultural understanding.',
            name: 'Language Diversity',
          },
        },
      ],
    },
  },
};

export default socialEquity;
