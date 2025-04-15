import express, { Request, Response } from "express";
import cors from "cors";
import initializeDatabase from "./db";
import seedDatabase from "./seed";

const app = express();
const port = process.env.PORT || 3000;

/**
 * Welcome to the Fullstack Challenge for the Server!
 *
 * This is a basic express server.
 * You can customize and organize it to your needs.
 * Good luck!
 */
const db = initializeDatabase();

seedDatabase(db);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const rows = db.prepare("SELECT * FROM organizations").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

//Endpoint to get all deals by organization_id. This is being done by joining the tables together so we can get all deals by organization_id (previous commit I had done accounts until I reread the challenge step 1.)
app.get("/api/accounts/deals/:organization_id", (req, res) => {
  const { organization_id } = req.params;

  try {
    const accounts = db.prepare(`
      SELECT deals.*
      FROM deals
      JOIN accounts ON deals.account_id = accounts.id
      JOIN organizations ON accounts.organization_id = organizations.id
      WHERE organizations.id = ?;
    `).all(organization_id);

    res.json(accounts);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
