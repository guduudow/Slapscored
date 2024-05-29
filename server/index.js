const express = require('express');
const app = express();
const port = process.env.PORT || "3500";
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

const { MongoClient, ObjectId } = require('mongodb');
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@slapscored.vly1t2q.mongodb.net/`;
console.log(dbUrl);
const client = new MongoClient(dbUrl);

async function connection() {
  const db = client.db("Slapscored");
  return db;
}

//code for fetching rosters below
async function fetchRoster(teamCode, season) {
  const url = `https://api-web.nhle.com/v1/roster/${teamCode}/${season}`;
  try {
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Could not get roster for ${teamCode}:`, error);
    return null;
  }
}

async function addRoster(roster, teamCode) {
  const client = new MongoClient(dbUrl);
  try {
    await client.connect();
    const db = client.db('tables');
    const collection = db.collection(`${teamCode}_roster`);

    const result = await collection.updateOne(
      { _id: `${teamCode}_roster` },
      { $set: { roster: roster, teamCode: teamCode, season: '20232024' } },
      { upsert: true }
    );
    if (result.upsertedCount > 0) {
      console.log(`Inserted new roster document for ${teamCode}.`);
    } else {
      console.log(`Updated existing roster document for ${teamCode}.`);
    }
  } catch (error) {
    console.error('Error attempting to add roster into document', error);
  }
}

async function main() {
  const teams = ["TOR", "MTL", "DET", "BOS", "CHI", "NYR"];
  const season = '20232024';
  for (teamCode of teams) {
    const rosterData = await fetchRoster(teamCode, season);
    if (rosterData) {
      await addRoster(rosterData, teamCode);
    } else {
      console.error("Roster data is null or undefined");
    }
  }
}

main().catch(console.error);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})