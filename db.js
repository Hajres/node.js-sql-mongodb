const knex = require("knex")

const config = require("./knexfile.js")[process.env.NODE.ENV || "development"]

const db = knex(config)

module.exports = db;

