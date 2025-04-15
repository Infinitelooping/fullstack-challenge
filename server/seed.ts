import {Database} from "better-sqlite3";

//New seeded data adding hardcoded data instead of randomly generating (Ended up being cleaner for testing purposes)
function seedDatabase(db:Database) {
  const orgAlpha = db.prepare("INSERT INTO organizations (name) VALUES (?)").run("Organization Alpha");

  const account1Alpha = db.prepare("INSERT INTO accounts (name, organization_id) VALUES (?, ?)").run("McDonald's", orgAlpha.lastInsertRowid);
  const account2Alpha = db.prepare("INSERT INTO accounts (name, organization_id) VALUES (?, ?)").run("Burger King", orgAlpha.lastInsertRowid);
  const account3Alpha = db.prepare("INSERT INTO accounts (name, organization_id) VALUES (?, ?)").run("KFC", orgAlpha.lastInsertRowid);
  const account4Alpha = db.prepare("INSERT INTO accounts (name, organization_id) VALUES (?, ?)").run("Wendy's", orgAlpha.lastInsertRowid);

  db.prepare("INSERT INTO deals (name, account_id, value, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)").run("McDonald's - Big Mac Deal", account1Alpha.lastInsertRowid, Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000, 'negotiation', '2024-01-01', '2025-01-01');
  db.prepare("INSERT INTO deals (name, account_id, value, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)").run("McDonald's - Happy Meal Deal", account1Alpha.lastInsertRowid, Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000, 'pitch', '2024-03-15', '2025-05-20');

  db.prepare("INSERT INTO deals (name, account_id, value, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)").run("Burger King - Whopper Deal", account2Alpha.lastInsertRowid, Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000, 'build', '2024-05-01', '2025-06-15');
  db.prepare("INSERT INTO deals (name, account_id, value, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)").run("Burger King - King Fries Deal", account2Alpha.lastInsertRowid, Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000, 'pitch', '2024-06-20', '2025-07-15');

  db.prepare("INSERT INTO deals (name, account_id, value, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)").run("KFC - Bucket Meal Deal", account3Alpha.lastInsertRowid, Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000, 'negotiation', '2024-02-01', '2025-02-28');
  db.prepare("INSERT INTO deals (name, account_id, value, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)").run("KFC - Zinger Deal", account3Alpha.lastInsertRowid, Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000, 'pitch', '2024-04-10', '2025-03-15');

  db.prepare("INSERT INTO deals (name, account_id, value, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)").run("Wendy's - Baconator Deal", account4Alpha.lastInsertRowid, Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000, 'negotiation', '2024-07-01', '2025-04-30');
  db.prepare("INSERT INTO deals (name, account_id, value, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)").run("Wendy's - Frosty Deal", account4Alpha.lastInsertRowid, Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000, 'build', '2024-08-15', '2025-09-30');
}

export default seedDatabase;