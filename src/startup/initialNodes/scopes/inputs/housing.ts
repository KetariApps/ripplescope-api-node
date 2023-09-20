import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const housing: ScopeCreateInput = {
  verified: true,
  name: 'HOUSING',
  brief:
    'Improving housing conditions for employees and addressing community housing needs.',
  basis:
    'This initiative focuses on ensuring safe, secure, and affordable housing for employees while also addressing the housing situation in the community.',
  description: `Housing is a fundamental concern for this initiative, aiming to provide secure and affordable housing for employees and positively impact the community's housing situation. Several key considerations guide its approach:
  
        The initiative evaluates the land requirements for its construction or implementation and its proximity to the organization site. It assesses the percentage of staff living within specific distances and their housing conditions, ensuring access to basic amenities like electricity and security.
  
        Addressing housing needs includes assisting employees in adapting their homes to withstand extreme weather conditions and managing associated costs. This may involve infrastructure improvements to enhance resilience and reduce expenses.
  
        Emphasizing the hiring of a local workforce is essential to avoid social stratification and gentrification. It fosters community ties, cultural understanding, and local economic contributions. Training and development programs nurture a robust local workforce.
  
        Architectural design and construction practices adhere to green building standards, minimizing environmental impact. The initiative prioritizes affordability and accessibility, collaborating with housing authorities and experts to develop fair and sustainable housing solutions.
  
        Stringent measures are in place to ensure housing construction and maintenance comply with environmental regulations and sustainability principles. Regular inspections and audits monitor compliance.
  
        Community engagement is a cornerstone, involving employees, local communities, and stakeholders to understand housing needs and preferences. The initiative's commitment to hiring and training local staff strengthens its impact and long-term support.
        `,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Local Residents',
            },
          },
          onCreate: {
            node: {
              name: 'Local Residents',
              brief: 'Community members affected by housing improvements.',
              description: `Engagement with local residents is crucial to understanding housing needs and ensuring the initiative's positive impact on the community.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Housing Authorities',
            },
          },
          onCreate: {
            node: {
              name: 'Housing Authorities',
              brief:
                'Government agencies or organizations responsible for housing policies and regulations.',
              description: `Collaboration with housing authorities is essential to navigate housing policies, regulations, and sustainable housing development.`,
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
              'How many hectares of land will this initiative/organization require your organization to buy or occupy for the construction or implementation of responsible housing?',
            description:
              'This question assesses the land requirements for housing construction or implementation.',
          },
        },
        {
          node: {
            brief:
              "What percentage of this initiative/organization's staff lives within 50km of the organization site?",
            description:
              'This question evaluates the proximity of staff to the organization site.',
          },
        },
        {
          node: {
            brief:
              "What percentage of this initiative/organization's staff lives within 10km of the organization site?",
            description:
              'This question further assesses the proximity of staff to the organization site.',
          },
        },
        {
          node: {
            brief:
              'Among the local staff (within 10 km of the organization site), what percentage of employees are securely housed, in homes with electricity and other basic amenities?',
            description:
              'This question examines the housing conditions of local staff.',
          },
        },
        {
          node: {
            brief:
              'If local staff are not currently securely housed, what efforts will be/are being made to offer them safe, secure, affordable housing?',
            description:
              'This question explores efforts to provide secure and affordable housing for local staff.',
          },
        },
        {
          node: {
            brief:
              'If staff are securely housed, what efforts are being made to assist them in adapting their homes to improve resilience to climate/weather-related challenges?',
            description:
              'This question assesses efforts to enhance housing resilience and adapt to climate challenges.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/organization consider architectural design and construction practices that adhere to green building standards and minimize environmental impact?',
            description:
              'This question focuses on eco-friendly architectural and construction practices.',
          },
        },
        {
          node: {
            brief:
              "How does the initiative/organization prioritize affordability and accessibility for the local workforce, ensuring that it doesn't lead to gentrification or displacement of existing communities?",
            description:
              'This question explores affordability and accessibility measures and their impact on local communities.',
          },
        },
        {
          node: {
            brief:
              "What measures are in place to ensure that construction and maintenance relating to the initiative/organization's activities adhere to environmental regulations and sustainability principles?",
            description:
              'This question addresses environmental compliance in construction and maintenance.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/organization actively engage with employees, local communities and stakeholders to address their housing needs and preferences?',
            description:
              'This question assesses the level of engagement with stakeholders to understand housing needs and preferences.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Climate-Resilient Housing Improvement',
            description:
              'Implement measures to improve the resilience of employee housing to climate and weather-related challenges.',
            name: 'Climate-Resilient Housing Improvement',
          },
        },
        {
          node: {
            brief: 'Affordability and Accessibility Collaboration',
            description:
              'Collaborate with housing authorities and experts to prioritize affordability and accessibility in housing initiatives.',
            name: 'Affordability and Accessibility Collaboration',
          },
        },
        {
          node: {
            brief: 'Green Building Practices',
            description:
              'Incorporate green building standards and eco-friendly construction practices in housing design and construction.',
            name: 'Green Building Practices',
          },
        },
      ],
    },
  },
};

export default housing;
