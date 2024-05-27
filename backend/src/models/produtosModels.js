const { connection } = require('./connection');
const { myCache } = require('../models/connection');


const getAll = async () => {
  const cachedData = myCache.get('listaClientesProdutos');
  if (cachedData) {
    console.log('Cache hit:', cachedData);
    return res.status(200).json(cachedData);
  }

  console.log('No cache found, proceeding with database query');
  const produtos = await connection.query('SELECT * FROM produtos');
  myCache.set('listaClientesProdutos', produtos, 30); //salva os dados com duração de 30 segundos
  console.log('Cache updated with new data:', produtos);

  return res.status(200).json(produtos);
};

const createProduto = async (produto) => {

  const { nome, descricao, preco } = produto;

  const dateUTC = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');

  const query = 'INSERT INTO produtos (nome, descricao, preco, data_atualizada) VALUES (?, ?, ?, ?)';

  const createdProduto = await connection.execute(query, [nome, descricao, preco, dateUTC]);

  return [createdProduto];
};

const deleteProduto = async (id) => {
  const removedProduto = await connection.execute('DELETE FROM produtos WHERE id = ?', [id]);

  return removedProduto;
};

const updateProduto = async (id, produto) => {
  const { nome, descricao, preco } = produto;

  const dateUTC = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');

  const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizada = ? WHERE id = ?';

  const updatedProduto = await connection.execute(query, [nome, descricao, preco, dateUTC, id]);

  return updatedProduto;
};

module.exports = {
  getAll,
  createProduto,
  deleteProduto,
  updateProduto
};

