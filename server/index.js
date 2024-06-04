const express = require('express');
const app = express();
const port = process.env.PORT || "3500";
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

const { MongoClient, ObjectId } = require('mongodb');
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@slapscored.vly1t2q.mongodb.net/`;
//console.log(dbUrl);
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

//getting the rosters from the table
async function getLeafsRoster() {
  await client.connect();
  const db = client.db('tables');
  let query = { teamCode: "TOR" };
  let projection = { roster: 1, _id: 0 }
  let teamRoster = db.collection("TOR_roster").findOne(query, { projection });
  return teamRoster;
};

async function getHabsRoster() {
  await client.connect();
  const db = client.db('tables');
  let query = { teamCode: "MTL" };
  let projection = { roster: 1, _id: 0 }
  let teamRoster = db.collection("MTL_roster").findOne(query, { projection });
  return teamRoster;
};

async function getRedWingsRoster() {
  await client.connect();
  const db = client.db('tables');
  let query = { teamCode: "DET" };
  let projection = { roster: 1, _id: 0 }
  let teamRoster = db.collection("DET_roster").findOne(query, { projection });
  return teamRoster;
};

async function getBruinsRoster() {
  await client.connect();
  const db = client.db('tables');
  let query = { teamCode: "BOS" };
  let projection = { roster: 1, _id: 0 }
  let teamRoster = db.collection("BOS_roster").findOne(query, { projection });
  return teamRoster;
};

async function getBlackHawksRoster() {
  await client.connect();
  const db = client.db('tables');
  let query = { teamCode: "CHI" };
  let projection = { roster: 1, _id: 0 }
  let teamRoster = db.collection("CHI_roster").findOne(query, { projection });
  return teamRoster;
};

async function getRangersRoster() {
  await client.connect();
  const db = client.db('tables');
  let query = { teamCode: "NYR" };
  let projection = { roster: 1, _id: 0 }
  let teamRoster = db.collection("NYR_roster").findOne(query, { projection });
  return teamRoster;
};

app.get('/api/leafs', async (req, res) => {
  let team = await getLeafsRoster();
  res.send(team);
});

app.get('/api/habs', async (req, res) => {
  let team = await getHabsRoster();
  res.send(team);
});

app.get('/api/redwings', async (req, res) => {
  let team = await getRedWingsRoster();
  res.send(team);
});

app.get('/api/bruins', async (req, res) => {
  let team = await getBruinsRoster();
  res.send(team);
});

app.get('/api/blackhawks', async (req, res) => {
  let team = await getBlackHawksRoster();
  res.send(team);
});

app.get('/api/rangers', async (req, res) => {
  let team = await getRangersRoster();
  res.send(team);
});

main().catch(console.error);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})