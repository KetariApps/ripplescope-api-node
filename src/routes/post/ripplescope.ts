import { Request, Response } from 'express';
import { GraphQLClient } from 'graphql-request';
import { ProjectCreateInput } from '../../__generated__/graphql.js';
import ripplescopeChain from '../../gpt/chains/ripplescope_v3/index.js';
import { countProjects } from '../../db/query/project/count.js';

export default async function ripplescope(
  req: Request,
  res: Response,
  client: GraphQLClient,
) {
  try {
    const { input } = req.body as
      | { input: ProjectCreateInput }
      | { input: Array<ProjectCreateInput> };
    const inputArray = Array.isArray(input) ? input : [input];

    Promise.allSettled(
      inputArray.map(async (project) => {
        const countProjectsQuery = await client.request(countProjects, {
          where: { website: project.website },
        });
        if (countProjectsQuery.projectsAggregate.count > 0) {
          // project does exist already, avoid recategorization
          throw new Error(`Project already exists: ${project.website}`);
        }
        ripplescopeChain(project);
      }),
    );

    res.status(200).json({
      message: 'Analyzing projects',
      content: inputArray.map((project) => project.website),
    });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
    res.end();
  }
}
