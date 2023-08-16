import { Driver } from "neo4j-driver";
import snakeCase from "../../helpers/snakeCase.js";
import { Project } from "../../types.js";

const insertProject = async (driver: Driver, project: Project) => {
  let session = driver.session();
  try {
    const results = await session.executeWrite((tx) =>
      Promise.all(
        project.nations.map((nation) =>
          tx.run(
            `
          MERGE (project:Project {name: $projectName, uniqueName: $uniqueProjectName, problem: $problem, solution: $solution})
          MERGE (nation:Location:Nation {name: $nationName, uniqueName: $uniqueNationName})
          CREATE (project)-[:DEPLOYED_TO]->(location)
          RETURN *`,
            {
              projectName: project.name,
              uniqueProjectName: snakeCase(project.name),
              problem: project.problem,
              solution: project.solution,
              nationName: nation,
              uniqueNationName: snakeCase(nation),
            }
          )
        )
      )
    );
    await session.close();
    return results;
  } catch (error) {
    console.error(error);
    await session.close();
    return;
  }
};

export default insertProject;
