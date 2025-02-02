
const mongoose = require('mongoose');
require('dotenv').config();

const dbName = 'mernAuth';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/' + dbName;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log(`🔗 Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
  console.error(`🔥 Datacenter burned down:\n${err}`);
});

module.exports = {
  User: require('./User'),
  Campaign: require('./campaign'),
};
