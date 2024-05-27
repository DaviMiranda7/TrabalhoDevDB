// Middlewares/databaseMiddleware.js
const { clearClientCache } = require('../models/connection');

async function databaseMiddleware(req, res, next) {
  console.log('Request going directly to database');
  next(); 
}

module.exports = databaseMiddleware;