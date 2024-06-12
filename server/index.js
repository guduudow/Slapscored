const express = require('express');
const app = express();
const port = process.env.PORT || "3500";
const dotenv = require('dotenv');
const cors = require("cors");
app.use(cors());
dotenv.config();
const axios = require('axios');
const mongoose = require("mongoose");
const connection = require('./config/db');

const rosterSchema = new mongoose.Schema({
  _id: String,
  teamCode: String,
  season: String,
  roster: Array,
}, { collection: 'default' });

const Roster = mongoose.model('Roster', rosterSchema);

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
  try {
    await connection();
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('no database connection');
    }
    const collectionName = `${teamCode}_roster`;
    const collection = db.collection(collectionName);

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
  //await connection();
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

async function getTeamRoster(teamCode) {
  try {
    await connection();
    const db = mongoose.connection.db;
    let query = { teamCode: teamCode };
    let projection = { roster: 1, _id: 0 }
    let collection = db.collection(`${teamCode}_roster`)
    const teamRoster = await collection.findOne(query, projection);
    return teamRoster;
  } catch (error) {
    console.error('error fetching team roster', error)
  }
};

app.get('/api/leafs', async (req, res) => {
  let team = await getTeamRoster("TOR");
  res.send(team);
});

app.get('/api/habs', async (req, res) => {
  let team = await getTeamRoster("MTL");
  res.send(team);
});

app.get('/api/redwings', async (req, res) => {
  let team = await getTeamRoster("DET");
  res.send(team);
});

app.get('/api/bruins', async (req, res) => {
  let team = await getTeamRoster("BOS");
  res.send(team);
});

app.get('/api/blackhawks', async (req, res) => {
  let team = await getTeamRoster("CHI");
  res.send(team);
});

app.get('/api/rangers', async (req, res) => {
  let team = await getTeamRoster("NYR");
  res.send(team);
});

main().catch(console.error);

app.use(express.json());

//Authentication routes
const routes = require('./routes/auth');
app.use('/auth', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})