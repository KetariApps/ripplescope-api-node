import neo4j from 'neo4j-driver';
import * as dotenv from 'dotenv';
dotenv.config();
export const addConstraints = async () => {
  const { NEO_URI, NEO_USER, NEO_PASS } = process.env;
  if (
    NEO_URI === undefined ||
    NEO_USER === undefined ||
    NEO_PASS === undefined
  ) {
    throw new Error('undefined environment variables');
  }
  const driver = neo4j.driver(NEO_URI, neo4j.auth.basic(NEO_USER, NEO_PASS));
  const session = driver.session();
  try {
    console.debug('Adding organization_website constraint');
    const orgConstriaint = session.run(`
    CREATE CONSTRAINT organization_website IF NOT EXISTS
    FOR (n:Organization)
    REQUIRE n.website IS UNIQUE
  `);

    console.debug('Adding user_email constraint');
    const userConstraint = session.run(`
    CREATE CONSTRAINT user_email IF NOT EXISTS
    FOR (n:User)
    REQUIRE n.email IS UNIQUE
  `);

    console.debug('Adding scope_name constraint');
    const scopeConstraint = session.run(`
    CREATE CONSTRAINT scope_name IF NOT EXISTS
    FOR (n:Scope)
    REQUIRE n.name IS UNIQUE
  `);

    const settledResults = await Promise.allSettled([
      orgConstriaint,
      userConstraint,
      scopeConstraint,
    ]);
    settledResults.forEach((res) => {
      if (res.status === 'rejected') console.error(res.reason);
      if (res.status === 'fulfilled') console.log('Added constraint');
    });
  } finally {
    await session.close();
  }
};
