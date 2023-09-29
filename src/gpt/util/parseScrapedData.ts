import {
  OrganizationCreateInput,
  UserInteractionName,
} from '../../__generated__/graphql.js';

export interface ScrapedOrganizationData {
  name: string;
  brief: string;
  description: string;
  website: string;
  solutions: Array<{
    name: string;
    description: string;
    problems: Array<{
      name: string;
      description: string;
      stakeholders: Array<{ name: string }>;
    }>;
  }>;
  team: string;
  geography: string;
  misc: string[];
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
    solutions,
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
      create: solutions.map(({ description, name, problems }) => ({
        node: {
          name,
          description,
          users: userConnection,
          problems: {
            create: problems.map(({ name, description, stakeholders }) => ({
              node: {
                users: userConnection,
                name,
                description,
                stakeholders: {
                  connectOrCreate: stakeholders.map(({ name }) => ({
                    where: {
                      node: {
                        name,
                      },
                    },
                    onCreate: {
                      node: {
                        name,
                      },
                      edge: {},
                    },
                  })),
                },
              },
              edge: {},
            })),
          },
        },
      })),
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
