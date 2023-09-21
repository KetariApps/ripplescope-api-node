import {
  OrganizationCreateInput,
  UserInteractionName,
} from '../../__generated__/graphql.js';

export interface ScrapedOrganizationData {
  name: string;
  website: string;
  problem: string;
  solution: string;
  team: string;
  geographic: string;
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
  const { name, website, problem, solution, team, geographic, misc } =
    organization;
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
      Geographic: {
        create: [
          {
            node: {
              description: geographic,
              users: userConnection,
            },
          },
        ],
      },
    },
  };

  return input;
}
