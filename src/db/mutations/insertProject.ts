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
          MERGE (nation:Nation {uniqueName: $uniqueNationName})
          MERGE (project)-[:DEPLOYED_TO]->(nation)
          RETURN project.uniqueName as project, nation.uniqueName as nation`,
            {
              projectName: project.name,
              uniqueProjectName: snakeCase(project.name),
              problem: project.problem,
              solution: project.solution,
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
