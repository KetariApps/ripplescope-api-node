import { Driver } from "neo4j-driver";
import { GetProjectResponse } from "../../types.js";

const getProject = async (driver: Driver, uniqueName: string) => {
  let session = driver.session();
  try {
    const results: GetProjectResponse[] = await session.executeRead((tx) =>
      tx
        .run(
          `
        MATCH r=(p:Project {uniqueName: $uniqueName})-[t]-(i: ImpactArea)
        RETURN p.name as project, collect({reason: t.reason, aspect: t.aspect}) as relationship as, collect(distinct i.uniqueName) as impactArea
      `,
          { uniqueName }
        )
        .then((res) =>
          res.records.map((rec) => ({
            project: rec.get("projectName"),
            relationship: rec.get("relationship"),
            impactArea: rec.get("impactArea"),
          }))
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

export default getProject;
