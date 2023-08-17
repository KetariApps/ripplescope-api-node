import { Driver } from "neo4j-driver";
import { GetProjectResponse } from "../../types.js";

const getProject = async (driver: Driver, uniqueName: string) => {
  let session = driver.session();
  try {
    const results: GetProjectResponse[] = await session.executeRead((tx) =>
      tx
        .run(
          `
          MATCH r=(p:Project {uniqueName: "Adamo_Foods"})-[rel]-(i: ImpactArea)
          RETURN p.name as project, collect({reason: rel.reason, aspect: rel.aspect, impactArea: i.uniqueName}) as impactAreas
          `,
          { uniqueName }
        )
        .then((res) =>
          res.records.map((rec) => ({
            project: rec.get("project"),
            impactAreas: rec.get("impactAreas"),
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
