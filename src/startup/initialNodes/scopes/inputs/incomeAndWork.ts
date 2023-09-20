import { ScopeCreateInput } from '../../../../__generated__/graphql.js';

const incomeWork: ScopeCreateInput = {
  verified: true,
  name: 'INCOME AND WORK',
  brief:
    'Promoting job creation and income generation while ensuring fair wages and worker benefits.',
  basis:
    'This initiative focuses on economic justice and sustainability, aiming to create job opportunities and income sources.',
  description: `Income and work are central to this initiative, addressing the following key aspects:
  
    - Comparing local minimum wage to the sustainable wage.
    - Assessing the enforcement of local minimum wage laws.
    - Evaluating the percentage of the local community employed directly or indirectly by the initiative.
    - Examining the impacts of the initiative on the region and local community, including community cohesion and economic structure.
    - Analyzing wage levels of the lowest-earning employee relative to local benchmarks.
    - Investigating worker benefits, such as paid time off, health insurance, and retirement support.
    - Assessing the percentage of inputs sourced from local businesses or community members and the fair-trade basis of compensation.
    - Supporting employees and community members in accessing financial resources.
    
    This initiative's approach reflects its commitment to economic justice, fair wages, and community well-being.`,
  considerations: {
    Stakeholder: {
      connectOrCreate: [
        {
          where: {
            node: {
              name: 'Local Businesses',
            },
          },
          onCreate: {
            node: {
              name: 'Local Businesses',
              brief: 'Businesses within the local community.',
              description: `Collaboration with local businesses is crucial for economic development.`,
            },
          },
        },
        {
          where: {
            node: {
              name: 'Labor Organizations',
            },
          },
          onCreate: {
            node: {
              name: 'Labor Organizations',
              brief: "Groups advocating for workers' rights.",
              description: `Engaging with labor organizations contributes to fair labor practices.`,
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
              "What is the local legal minimum wage compared to the local sustainable wage in the initiative's region and local community?",
            description:
              'This question assesses wage levels relative to local benchmarks.',
          },
        },
        {
          node: {
            brief: 'To what extent do authorities enforce local minimum wage?',
            description:
              'This question examines the enforcement of minimum wage laws.',
          },
        },
        {
          node: {
            brief:
              'How many and what percentage of the local community are employed by the initiative/organization?',
            description:
              'This question evaluates local employment opportunities.',
          },
        },
        {
          node: {
            brief:
              'How many and what percentage of the local community indirectly benefit financially through the initiative/organization activities?',
            description:
              'This question explores indirect financial benefits to the community.',
          },
        },
        {
          node: {
            brief:
              'In addition to job creation, what other positive impacts has the initiative/organization had on its region and local community, including in community cohesion and structure?',
            description:
              'This question assesses broader positive impacts beyond job creation.',
          },
        },
        {
          node: {
            brief:
              'What is the hourly wage in US$ of the lowest-earning employee relative to the local minimum and sustainable wages?',
            description:
              'This question compares the lowest wage to local benchmarks.',
          },
        },
        {
          node: {
            brief:
              "What is the status and extent of worker's benefits for the lowest earners in the initiative/organization? For example, does the initiative offer paid time off, health insurance matching, retirement matching, transportation to work, mileage reimbursement, salary adjustments due to inflation, or other benefits?",
            description:
              'This question explores worker benefits, especially for low earners.',
          },
        },
        {
          node: {
            brief:
              'What percentage of initiative/organization inputs are sourced from local businesses or community members? Is compensation for these inputs evaluated on a fair-trade basis?',
            description:
              'This question examines sourcing practices and fair compensation.',
          },
        },
        {
          node: {
            brief:
              'Does the initiative/organization support its employees or members of its communities in gaining access to financial resources, such as opening a bank account or accessing a loan?',
            description:
              'This question addresses support for financial inclusion.',
          },
        },
      ],
    },
    Example: {
      create: [
        {
          node: {
            brief: 'Local Employment Initiatives',
            description:
              'Create programs to maximize local employment opportunities.',
            name: 'Local Employment Initiatives',
          },
        },
        {
          node: {
            brief: 'Fair Trade Sourcing',
            description:
              'Promote sourcing from local businesses with fair compensation.',
            name: 'Fair Trade Sourcing',
          },
        },
        {
          node: {
            brief: 'Financial Inclusion Support',
            description:
              'Assist employees and community members in accessing financial resources.',
            name: 'Financial Inclusion Support',
          },
        },
        {
          node: {
            brief: 'Worker Benefit Enhancement',
            description: 'Improve worker benefits, especially for low earners.',
            name: 'Worker Benefit Enhancement',
          },
        },
      ],
    },
  },
};

export default incomeWork;
