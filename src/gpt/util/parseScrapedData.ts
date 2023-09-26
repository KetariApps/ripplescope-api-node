import {
  OrganizationCreateInput,
  UserInteractionName,
} from '../../__generated__/graphql.js';

export interface ScrapedOrganizationData {
  name: string;
  brief: string;
  description: string;
  website: string;
  problem: string;
  solution: string;
  team: string;
  geography: string;
  misc?: string[];
}
export interface ParseScrapedDataProps {
  organization: ScrapedOrganizationData;
  userEmail: string;
}
export default function parseScrapedData({
  organization,
  userEmail,
}: ParseScrapedDataProps) {
  const {
    name,
    brief,
    description,
    website,
    problem,
    solution,
    team,
    geography,
    misc,
  } = organization;
  const userConnection = {
    connectOrCreate: [
      {
        where: {
          node: {
            email: userEmail,
          },
        },
        onCreate: {
          edge: {
            type: UserInteractionName.Create,
          },
          node: {
            email: userEmail,
          },
        },
      },
    ],
  };

  const input: OrganizationCreateInput = {
    name,
    brief,
    description,
    website,
    users: userConnection,
    solutions: {
      create: [
        {
          node: {
            description: solution,
            users: userConnection,
            problems: {
              create: [
                {
                  node: {
                    users: userConnection,
                    description: problem,
                  },
                  edge: {},
                },
              ],
            },
          },
        },
      ],
    },
    considerations: {
      Team: {
        create: [
          {
            node: {
              description: team,
              users: userConnection,
            },
          },
        ],
      },
      Misc: {
        create: misc?.map((content) => ({
          node: {
            content,
            users: userConnection,
          },
        })),
      },
      Geography: {
        create: [
          {
            node: {
              description: geography,
              users: userConnection,
            },
          },
        ],
      },
    },
  };

  return input;
}
