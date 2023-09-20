import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const genderEquity: ScopeCreateInput = {
  verified: true,
  name: 'GENDER EQUITY',
  brief:
    "Promoting gender equality and women's empowerment within the community and the initiative.",
  basis:
    "This initiative places a strong emphasis on promoting gender equality and women's empowerment within both the community and the initiative itself.",
  description: `Promoting gender equity is a fundamental goal of this initiative. Several key considerations guide its approach:
  
        Understanding the importance of gender equality and women\'s empowerment in the community is paramount. The initiative assesses the significance of these aspects and explores how it can contribute to promoting women\'s leadership and participation in decision-making processes.
  
        Assessing the representation of non-male and LGBTQI+ individuals within the initiative\'s workforce is a crucial step in creating a diverse and inclusive environment. The initiative recognizes the value of diverse perspectives and experiences.
  
        Fostering a supportive, open environment for LGBTQI+ and non-male individuals is central to the initiative\'s values. A workplace that respects and offers equal opportunities to all, regardless of gender identity or sexual orientation, enhances overall productivity and well-being.
  
        The gender representation across different levels of leadership within the initiative is assessed to ensure equitable access to leadership roles. Encouraging and supporting women and LGBTQI+ individuals in leadership positions is a key focus.
  
        Integrating gender equity considerations within the framework of the organization/program is vital. This includes gender-focused strategies, gender-specific activities, discussions of gender dynamics, and gender-specific metrics in the monitoring and evaluation strategy.
        `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: "Women's Association",
            },
          },
          onCreate: {
            node: {
              name: "Women's Association",
              brief:
                "An organization focused on women's issues and empowerment.",
              description: `Collaboration with women's associations is essential to advance gender equality and women's empowerment.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Gender Experts',
            },
          },
          onCreate: {
            node: {
              name: 'Gender Experts',
              brief: 'Experts in gender-related issues and equity.',
              description: `Engaging gender experts enhances the initiative's capacity to promote gender equity effectively.`,
            },
          },
        },
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
                'Leaders within the community who support gender equity initiatives.',
              description: `Collaboration with community leaders committed to gender equity is vital for organization success.`,
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
              'What is the percentage of total staff that identifies as non-male?',
            description:
              'This question assesses the diversity of the workforce in terms of gender identity.',
          },
        },
        {
          node: {
            brief:
              'What is the percentage of total staff that identifies as LGBTQI+?',
            description:
              'This question evaluates the LGBTQI+ representation within the workforce.',
          },
        },
        {
          node: {
            brief:
              'What is the extent to which the organization/initiative offers a supportive, open environment for LGBTQI+ and non-male individuals?',
            description:
              'This question explores the inclusivity and supportiveness of the work environment for diverse gender identities and orientations.',
          },
        },
        {
          node: {
            brief:
              'What is the gender representation across different levels of leadership within the initiative/organization?',
            description:
              'This question assesses the gender balance in leadership positions within the initiative.',
          },
        },
        {
          node: {
            brief:
              'Does the organization/program integrate gender equity considerations in its framework?',
            description:
              'This question examines the incorporation of gender equity within the organization or program.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Gender-Inclusive Policies',
            description:
              'Implement gender-inclusive policies, including equal pay, flexible work arrangements, and protocols for preventing sexual harassment.',
            name: 'Gender-Inclusive Policies',
          },
        },
        {
          node: {
            brief: 'Gender-Responsive Leadership',
            description:
              'Encourage and support women and LGBTQI+ individuals to take on leadership roles within the organization.',
            name: 'Gender-Responsive Leadership',
          },
        },
        {
          node: {
            brief: 'Gender-Specific Activities',
            description:
              'Design specific activities to address gender disparities and empower women and LGBTQI+ individuals.',
            name: 'Gender-Specific Activities',
          },
        },
      ],
    },
  },
};

export default genderEquity;
