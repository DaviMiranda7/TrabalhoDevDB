// cacheMiddleware.js
const { myCache } = require('../models/connection');

async function cacheMiddleware(req, res, next) {
  console.log('Cache status:', myCache.keys()); // Agora você pode listar todas as chaves

  const cachedData = myCache.get('listaClientesProdutos');
  if (cachedData) {
    console.log('Using cached data');
    res.send(cachedData);
  } else {
    console.log('No cache found, proceeding with database query');
    next();
  }
}

module.exports = cacheMiddleware;