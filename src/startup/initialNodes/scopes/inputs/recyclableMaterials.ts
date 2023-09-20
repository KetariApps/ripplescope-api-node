import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const recyclableMaterials: ScopeCreateInput = {
  verified: true,
  name: 'RECYCLABLE MATERIAL MANAGEMENT',
  brief:
    'Promoting responsible waste management and recycling practices for a sustainable future.',
  basis:
    'This initiative underscores the significance of efficient waste management and recycling practices in achieving ecological sustainability and safeguarding human health. It emphasizes actions aimed at reducing waste generation, promoting recycling, and incorporating recyclable materials into operations.',
  description: `Responsible waste management is pivotal to ecological sustainability and human health. This initiative places waste reduction, recycling practices, and the responsible handling of recyclable materials at its core. It recognizes that the types of waste generated and their potential hazards play a crucial role in responsible operations.
  
      The initiative begins by assessing the types of man-made waste materials, including technological and e-waste, generated through its activities. Special attention is given to materials that may be considered hazardous or harmful to people or the environment. The initiative is committed to addressing and mitigating the environmental and health risks associated with such waste.
  
      To minimize waste generation and reduce environmental footprints, the initiative encourages the extensive use of glass and other recyclable or reusable materials. This forward-thinking approach aims to reduce the creation of non-recyclable waste and promote a circular economy.
  
      The initiative is conscious of the use of single-use plastics and non-biodegradable materials, striving to minimize their presence and advocate for sustainable alternatives. Quantifying the quantity and ratio of recyclable and non-recyclable waste generated per month or year provides essential data for setting and monitoring reduction targets.
  
      Waste reduction is a central theme, and the initiative implements strategies to minimize non-recyclable waste production. Recycling measures and activities are also a priority, ensuring the proper management of recyclable materials and reducing the demand for new resources.
  
      Incorporating waste reduction, reuse, and recycling practices into its operations, the initiative actively supports the circular economy. This approach not only reduces resource consumption but also minimizes the environmental impact associated with waste generation.
  
      Collaborating with specialist organizations or bodies related to waste reduction, reuse, or recycling enhances the initiative's waste management practices. This partnership amplifies the potential to develop advanced waste management solutions and stay at the forefront of sustainable practices.
  
      Initiatives to educate employees, stakeholders, and local communities about waste separation, recycling, and the importance of reducing waste generation refine internal operations and empower communities to join the effort. Continuous evaluation of waste management practices ensures adaptability and efficiency, securing a greener footprint for today and a healthier planet for the future.`,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Initiative/Project Team',
            },
          },
          onCreate: {
            node: {
              name: 'Initiative/Project Team',
              brief:
                'The core team responsible for planning, implementing, and monitoring the waste management and recycling practices.',
              description: `The core team plays a pivotal role in planning, implementing, and monitoring waste management and recycling practices within the initiative.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Employees',
            },
          },
          onCreate: {
            node: {
              name: 'Employees',
              brief:
                'Those working within the initiative who are directly involved in waste reduction, separation, recycling, and other related activities.',
              description: `Employees directly involved in waste reduction, separation, recycling, and related activities are essential to the success of waste management initiatives.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Local Communities',
            },
          },
          onCreate: {
            node: {
              name: 'Local Communities',
              brief:
                "Residents living in the vicinity of the initiative's operations, who are directly impacted by waste management practices and who may benefit from education and awareness campaigns.",
              description: `Local communities living near the initiative's operations are directly impacted by waste management practices and can benefit from education and awareness campaigns.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Customers/Clients',
            },
          },
          onCreate: {
            node: {
              name: 'Customers/Clients',
              brief:
                'Individuals or businesses that interact with the initiative, using its products or services and potentially being influenced by its waste management practices.',
              description: `Customers and clients who interact with the initiative may be influenced by its waste management practices, making them important stakeholders.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Suppliers',
            },
          },
          onCreate: {
            node: {
              name: 'Suppliers',
              brief:
                'Companies or individuals providing materials, products, or services to the initiative, influencing the type and amount of waste generated upstream.',
              description: `Suppliers providing materials, products, or services influence the type and amount of waste generated upstream, making them key stakeholders.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Regulatory Authorities',
            },
          },
          onCreate: {
            node: {
              name: 'Regulatory Authorities',
              brief:
                'Government agencies responsible for enforcing waste management and environmental regulations, ensuring compliance and proper waste disposal.',
              description: `Regulatory authorities enforce waste management and environmental regulations, ensuring compliance and proper waste disposal.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Environmental Organizations',
            },
          },
          onCreate: {
            node: {
              name: 'Environmental Organizations',
              brief:
                'NGOs and advocacy groups focused on environmental conservation, sustainability, and waste reduction.',
              description: `Environmental organizations are essential stakeholders, advocating for environmental conservation, sustainability, and waste reduction.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Waste Management Partners',
            },
          },
          onCreate: {
            node: {
              name: 'Waste Management Partners',
              brief:
                'Organizations or entities collaborating with the initiative on waste collection, recycling, and disposal.',
              description: `Collaboration with waste management partners is essential for effective waste collection, recycling, and disposal.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Investors/Donors',
            },
          },
          onCreate: {
            node: {
              name: 'Investors/Donors',
              brief:
                'Individuals or entities providing financial support to the initiative and who may be interested in its environmental and social impact.',
              description: `Investors and donors providing financial support may have an interest in the initiative's environmental and social impact.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Educational Institutions',
            },
          },
          onCreate: {
            node: {
              name: 'Educational Institutions',
              brief:
                'Schools, colleges, and universities that could collaborate with the initiative on educational programs related to waste management and recycling.',
              description: `Educational institutions can collaborate with the initiative on educational programs related to waste management and recycling.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Media and Public',
            },
          },
          onCreate: {
            node: {
              name: 'Media and Public',
              brief:
                'Journalists, bloggers, and the general public who can influence public perception, awareness, and reputation of the initiative.',
              description: `The media and the general public can influence public perception, awareness, and the reputation of the initiative.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Competitors',
            },
          },
          onCreate: {
            node: {
              name: 'Competitors',
              brief:
                'Other organizations in the same industry or sector who may also be working on waste management and recycling practices, potentially influencing industry standards and practices.',
              description: `Competing organizations in the same industry or sector may influence industry standards and practices related to waste management and recycling.`,
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
                'Municipal authorities and local officials who may collaborate with the initiative on waste management policies and initiatives.',
              description: `Local government authorities and officials may collaborate with the initiative on waste management policies and initiatives.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Health and Safety Organizations',
            },
          },
          onCreate: {
            node: {
              name: 'Health and Safety Organizations',
              brief:
                'Groups concerned with the potential health and safety risks associated with waste handling and disposal.',
              description: `Health and safety organizations are concerned with potential health and safety risks associated with waste handling and disposal.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Research and Innovation Partners',
            },
          },
          onCreate: {
            node: {
              name: 'Research and Innovation Partners',
              brief:
                'Academic institutions, research organizations, and technology providers contributing to the development of innovative waste management solutions.',
              description: `Research and innovation partners, including academic institutions, research organizations, and technology providers, contribute to the development of innovative waste management solutions.`,
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
              'What types of man-made waste material, including technological/e-waste, does the initiative/project create through its activities? Is any of this material considered hazardous or harmful to people or the environment in any way? If so, how, and what efforts are being made to address this?',
            description:
              'This question focuses on the types of waste materials generated by the initiative and any potential hazards associated with them, as well as the efforts in place to address these hazards.',
          },
        },
        {
          node: {
            brief:
              'Does this initiative/project involve the extensive use of glass or other recyclable/reusable materials to reduce the generation of non-recyclable waste?',
            description:
              'This question explores whether the initiative actively promotes the use of recyclable or reusable materials like glass to minimize non-recyclable waste generation.',
          },
        },
        {
          node: {
            brief:
              'Does this initiative/project involve the use of single-use plastics or other non-biodegradable materials? If so, how are efforts made to minimize their use or promote sustainable alternatives?',
            description:
              'This question examines the use of single-use plastics or non-biodegradable materials within the initiative and the strategies in place to minimize their usage or promote sustainable alternatives.',
          },
        },
        {
          node: {
            brief:
              'What is the quantity and ratio of recyclable and non-recyclable waste generated through the initiative/project’s activities per month/year?',
            description:
              'This question seeks to quantify the amount and ratio of recyclable and non-recyclable waste generated by the initiative on a monthly or yearly basis, providing insights into waste management efforts.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project minimize its non-recyclable waste production, and what waste reduction strategies are in place?',
            description:
              'This question focuses on the waste reduction strategies and practices implemented by the initiative to minimize non-recyclable waste production.',
          },
        },
        {
          node: {
            brief:
              'What recycling measures/activities does the initiative/project undertake to ensure proper management of recyclable materials?',
            description:
              'This question explores the recycling measures and activities implemented by the initiative to manage recyclable materials effectively.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project support the circular economy by incorporating waste reduction, reuse, and recycling practices into its operations?',
            description:
              'This question investigates how the initiative actively supports the circular economy by integrating waste reduction, reuse, and recycling practices into its operations.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/project partner with any specialist organizations or bodies related to waste reduction, reuse, or recycling to enhance its waste management practices?',
            description:
              'This question examines potential partnerships with specialist organizations or bodies in the field of waste reduction, reuse, or recycling to improve waste management practices.',
          },
        },
        {
          node: {
            brief:
              'Are there any initiatives to educate employees, stakeholders, and local communities about waste separation, recycling, and the importance of reducing waste generation?',
            description:
              'This question explores educational initiatives aimed at raising awareness about waste separation, recycling, and the significance of reducing waste generation among employees, stakeholders, and local communities.',
          },
        },
        {
          node: {
            brief:
              'How does the initiative/project evaluate and monitor the effectiveness of its waste management practices in reducing both recyclable and non-recyclable waste?',
            description:
              'This question focuses on the methods used by the initiative to assess and monitor the effectiveness of its waste management practices in reducing both recyclable and non-recyclable waste.',
          },
        },
      ],
    },
  },
};
export default recyclableMaterials;
