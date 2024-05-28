const express = require('express');
const app = express();
const port = process.env.PORT || "3333";
const dotenv = require('dotenv');

const { MongoClient, ObjectId } = require('mongodb');
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@slapscored.vly1t2q.mongodb.net/`;
const client = new MongoClient(dbUrl);

async function connection() {
  const db = client.db("Slapscored");
  return db;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})