import Database from "better-sqlite3";

function initializeDatabase() {
  const db = new Database("./database.sqlite", { verbose: console.log });

  db.pragma('foreign_keys = ON');

  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS organizations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `
  ).run();

  //accounts table, (an account belongs to an organization)
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS accounts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      organization_id INTEGER,
      FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE SET NULL
    );
  `
  ).run();

  /*deals table, (a deal belongs to an account)
  * I did not add an organization_id foreign key since I am assuming an account would not belong to multiple organizations. 
  * Adding name so that on the frontend deals can be further distinguished. And will follow a formatting of {account.name + "-" + deal.name}
  */
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS deals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      account_id INTEGER,
      value INTEGER,
      start_date DATETIME,
      end_date DATETIME,
      FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE SET NULL
    );
  `
  ).run();

  // TODO: Add your account and deal tables schemas here
  return db;
}

export default initializeDatabase;
