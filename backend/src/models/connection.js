// connection.js
const mysql = require('mysql2/promise');
const NodeCache = require('node-cache');
const myCache = new NodeCache(); // Cria uma nova instância do node-cache

require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

function clearClientCache() {
  myCache.flushAll();
  console.log("Cache cleared successfully");
}

module.exports = {
  connection,
  myCache,
  clearClientCache
};