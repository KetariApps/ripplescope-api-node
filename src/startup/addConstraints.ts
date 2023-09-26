import neo4j from 'neo4j-driver';
import * as dotenv from 'dotenv';
dotenv.config();
export const addConstraints = async () => {
  const { NEO_URI, NEO_USER, NEO_PASS } = process.env;
  if (NEO_URI === undefined) throw new Error('NEO_URI was undefined');
  if (NEO_USER === undefined) throw new Error('NEO_USER was undefined');
  if (NEO_PASS === undefined) throw new Error('NEO_PASS was undefined');
  const driver = neo4j.driver(NEO_URI, neo4j.auth.basic(NEO_USER, NEO_PASS));
  const session = driver.session();
  try {
    console.debug('Adding organization_website constraint');
    console.debug('Adding user_email constraint');
    console.debug('Adding scope_name constraint');
    await session.executeWrite((tx) => {
      tx.run(`
        CREATE CONSTRAINT organization_website IF NOT EXISTS
        FOR (n:Organization)
        REQUIRE n.website IS UNIQUE
      `);
      tx.run(`
        CREATE CONSTRAINT user_email IF NOT EXISTS
        FOR (n:User)
        REQUIRE n.email IS UNIQUE
      `);
      tx.run(`
      CREATE CONSTRAINT scope_name IF NOT EXISTS
      FOR (n:Scope)
      REQUIRE n.name IS UNIQUE
    `);
    });
  } finally {
    console.debug('Added constraints');
    await session.close();
  }
};
