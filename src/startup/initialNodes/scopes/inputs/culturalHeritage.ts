import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const culturalHeritage: ScopeCreateInput = {
  name: 'CULTURAL PRESERVATION AND HERITAGE',
  brief:
    'Respecting and preserving the cultural heritage and rights of indigenous communities.',
  basis:
    'This initiative focuses on the importance of cultural preservation and the protection of indigenous rights within the community.',
  description: `Cultural preservation and the protection of indigenous rights are central to this initiative, addressing the following key aspects:
  
    - Respecting and protecting the rights of indigenous communities, including their ownership of traditional knowledge and cultural expressions.
    - Actively involving and consulting with indigenous communities in the planning, implementation, and decision-making processes of the project.
    - Identifying and safeguarding cultural landmarks and sacred sites significant to local communities, including indigenous groups.
    - Measures to protect and preserve traditional knowledge, practices, and languages of indigenous communities.
    - Activities promoting and revitalizing local culture, arts, and traditions for future generations.
    - Collaboration with local cultural institutions, heritage organizations, or tribal authorities to protect and promote cultural heritage and traditions.
    - Consideration of potential impacts on intangible cultural heritage and identity.
    - Educational and awareness programs about the importance of cultural preservation and indigenous rights.
    - Avoiding cultural appropriation or misrepresentation.
    - Contribution to the economic empowerment and sustainability of local communities through cultural heritage preservation.
    
    This initiative's approach underscores the respect for cultural diversity, human rights, and the intergenerational transfer of wisdom.`,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Indigenous Communities',
            },
          },
          onCreate: {
            node: {
              name: 'Indigenous Communities',
              brief: 'Local indigenous groups with unique cultural heritage.',
              description: `Recognizing and safeguarding the rights and cultural heritage of indigenous communities is central to this initiative.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Cultural Heritage Experts',
            },
          },
          onCreate: {
            node: {
              name: 'Cultural Heritage Experts',
              brief:
                'Professionals specializing in cultural heritage preservation.',
              description: `Collaboration with cultural heritage experts enhances cultural preservation efforts.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Local Historians',
            },
          },
          onCreate: {
            node: {
              name: 'Local Historians',
              brief: 'Experts in local history and cultural traditions.',
              description: `Engaging local historians contributes to the understanding and preservation of cultural heritage.`,
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
              'How does the initiative/project respect and protect the rights of indigenous communities, including their ownership of traditional knowledge and cultural expressions?',
            description:
              "This question assesses the initiative/project's commitment to indigenous rights and cultural ownership.",
          },
        },
        {
          node: {
            brief:
              'Are there any efforts in place to actively involve and consult with indigenous communities in the planning, implementation, and decision-making processes of the project to ensure their cultural heritage is preserved and respected?',
            description:
              'This question evaluates the level of involvement and consultation with indigenous communities.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project identify and safeguard cultural landmarks and sacred sites that hold significance for local communities, including indigenous groups?',
            description:
              'This question focuses on the protection of cultural landmarks and sacred sites.',
          },
        },
        {
          node: {
            brief:
              'Are there specific measures in place to protect and preserve traditional knowledge, practices, and languages of indigenous communities impacted by the project?',
            description:
              'This question addresses the preservation of traditional knowledge and practices.',
          },
        },
        {
          node: {
            brief:
              'What activities does the initiative implement to promote and revitalize local culture, arts, and traditions, ensuring that they are valued and preserved for future generations?',
            description:
              'This question explores activities promoting local culture and traditions.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project collaborate with local cultural institutions, heritage organizations, or tribal authorities to protect and promote cultural heritage and traditions?',
            description:
              'This question assesses collaboration for cultural heritage protection.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project consider the potential impacts on intangible cultural heritage and identity, and what steps are taken to mitigate negative effects?',
            description:
              'This question examines the mitigation of impacts on cultural heritage and identity.',
          },
        },
        {
          node: {
            brief:
              'Are there any educational or awareness programs in place to inform project stakeholders, employees, and the public about the importance of cultural preservation and indigenous rights?',
            description:
              'This question evaluates educational and awareness programs related to cultural preservation.',
          },
        },
        {
          node: {
            brief:
              'What measures does the initiative/project take to avoid cultural appropriation or misrepresentation of local cultures and traditions in its activities or promotions?',
            description:
              'This question addresses measures to avoid cultural appropriation or misrepresentation.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project contribute to the economic empowerment and sustainability of local communities, ensuring that cultural heritage preservation aligns with social and economic development goals?',
            description:
              "This question explores the initiative/project's contribution to economic empowerment and sustainability through cultural heritage preservation.",
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Collaboration with Indigenous Elders',
            description:
              'Consultation and partnership with indigenous community elders to preserve cultural heritage.',
            name: 'Collaboration with Indigenous Elders',
          },
        },
        {
          node: {
            brief: 'Traditional Knowledge Documentation',
            description:
              'Recording and safeguarding traditional knowledge and practices.',
            name: 'Traditional Knowledge Documentation',
          },
        },
        {
          node: {
            brief: 'Cultural Revitalization Workshops',
            description:
              'Workshops and activities to promote and revitalize local culture, arts, and traditions.',
            name: 'Cultural Revitalization Workshops',
          },
        },
        {
          node: {
            brief: 'Educational Outreach Programs',
            description:
              'Programs to educate stakeholders, employees, and the public about cultural preservation and indigenous rights.',
            name: 'Educational Outreach Programs',
          },
        },
        {
          node: {
            brief: 'Economic Empowerment Initiatives',
            description:
              'Initiatives that contribute to the economic empowerment and sustainability of local communities.',
            name: 'Economic Empowerment Initiatives',
          },
        },
      ],
    },
  },
};

export default culturalHeritage;
