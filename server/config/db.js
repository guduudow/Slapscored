const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@slapscored.vly1t2q.mongodb.net/`;

const connection = () => {
  return mongoose.connect(dbUrl);
};

module.exports = connection;