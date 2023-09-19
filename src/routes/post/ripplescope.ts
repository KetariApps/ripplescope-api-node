import { Request, Response } from 'express';
import { CategorizationRequest } from '../../types.js';
import { GraphQLClient } from 'graphql-request';
import { getProjects } from '../../db/queries/getProjects.js';
import dbName from '../../gpt/util/dbName.js';
import chains from '../../gpt/chains/index.js';

export default async function ripplescope(
  req: Request,
  res: Response,
  client: GraphQLClient,
) {
  try {
    const categorizationRequest = req.body as CategorizationRequest;
    console.log({
      type: 'categorization request',
      content: categorizationRequest,
    });
    const getProjectsQuery = await getProjects(client, {
      where: {
        uniqueName: dbName(categorizationRequest.project.name),
      },
      includeImpacts: false,
      includeLocations: false,
    });
    if (getProjectsQuery.projects.length === 0) {
      // the project does not exist -- create it
      const maybeRipplescopeResponse = chains.ripplescope(
        categorizationRequest.project,
        client,
      );
      res.status(200).json({
        message: 'Evaluating project',
        content: dbName(categorizationRequest.project.name),
      });
      res.end(); // End the response
    } else {
      // project does exist already, this is a re-categorization
      res.status(200).json({
        message: 'Project already exists',
        content: dbName(categorizationRequest.project.name),
      });
      res.end(); // End the response
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
    res.end(); // Ensure the response is properly terminated
  }
}
