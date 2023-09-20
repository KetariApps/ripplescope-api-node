import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const education: ScopeCreateInput = {
  name: 'EDUCATION',
  brief:
    'Enhancing educational opportunities and capacity-building efforts, particularly related to climate change and sustainability.',
  basis:
    'This initiative focuses on promoting education and skill development to empower individuals and contribute to the progress of the community.',
  description: `Education and capacity-building are fundamental aspects of this initiative, emphasizing the importance of knowledge and skill development. Key considerations include:
  
    - Assessing the extent of education access and completion rates in the initiative's region.
    - Supporting ongoing education, including staff pursuing degrees with guaranteed job prospects.
    - Offering on-the-job training, certified courses, and educational opportunities to enhance skills.
    - Providing management training to nurture leadership development among employees.
    - Involving in the establishment of local entities and supporting economic development.
    - Extending educational benefits to non-employees in the local community.
    - Types of training provided to staff, focusing on technology, finance, health, social equality, ecological sustainability, and general resume-building skills.
    
    This initiative's commitment to education and skill development reflects its dedication to sustainable development for its operations and the broader community.
    `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Local Schools',
            },
          },
          onCreate: {
            node: {
              name: 'Local Schools',
              brief: 'Educational institutions within the community.',
              description: `Collaboration with local schools is essential for enhancing educational opportunities.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Education Advocates',
            },
          },
          onCreate: {
            node: {
              name: 'Education Advocates',
              brief: 'Advocates for educational improvement and access.',
              description: `Engaging with education advocates contributes to the initiative's educational goals.`,
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
              "What is the extent of access to education for men and women in the initiative's region and local community?",
            description:
              'This question assesses the level of education access in the region.',
          },
        },
        {
          node: {
            brief:
              "What are the average education completion rates for men and women in the initiative's region and local community?",
            description:
              'This question evaluates education completion rates and gender disparities.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative sponsor continued education, such as supporting staff going back to school to complete a degree?',
            description:
              "This question explores the initiative's support for staff pursuing higher education.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project offer any on-the-job training, support certified courses, or other educational or opportunities?',
            description:
              'This question addresses on-the-job training and educational support for staff.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project offer employees management training?',
            description:
              'This question focuses on management training for leadership development.',
          },
        },
        {
          node: {
            brief:
              'Does this project (directly or indirectly) involve the establishment of local entities that will hire local staff, support of commercial entities, cooperatives, etc.?',
            description:
              "This question explores the initiative's involvement in local economic development.",
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project offer any educational opportunities or benefits for non-employees in the local community?',
            description:
              'This question examines educational benefits extended to the broader community.',
          },
        },
        {
          node: {
            brief:
              'How many non-employee community members does the initiative/project target?',
            description:
              'This question quantifies the outreach to non-employee community members for educational benefits.',
          },
        },
        {
          node: {
            brief:
              'What are the types of training the initiative provides to its staff, and approximately what percentage of total staff receives this training?',
            description:
              'This question delves into the types of training offered to staff and their coverage.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Professional Workshops',
            description: 'Provide regular workshops for professional growth.',
            name: 'Professional Workshops',
          },
        },
        {
          node: {
            brief: 'Higher Education Support',
            description:
              'Offer support for higher education through scholarships and grants.',
            name: 'Higher Education Support',
          },
        },
        {
          node: {
            brief: 'Skill-Based Training Centers',
            description:
              'Provide vocational training programs for skill development.',
            name: 'Skill-Based Training Centers',
          },
        },
        {
          node: {
            brief: 'Community Learning Centers',
            description:
              'Offer educational resources and facilities for residents.',
            name: 'Community Learning Centers',
          },
        },
        {
          node: {
            brief: 'Mentorship and Internship Programs',
            description:
              'Promote practical experience and skill development for students.',
            name: 'Mentorship and Internship Programs',
          },
        },
      ],
    },
  },
};

export default education;
