const { connection } = require('./connection');
const { myCache } = require('../models/connection');


const getAllC = async () => {
  const cachedData = myCache.get('listaClientesProdutos');
  if (cachedData) {
    console.log('Cache hit:', cachedData);
    return res.status(200).json(cachedData);
  }

  console.log('No cache found, proceeding with database query');
  const clientes = await connection.query('SELECT * FROM clientes');
  myCache.set('listaClientesProdutos', clientes, 30); //salva os dados com duração de 30 segundos
  console.log('Cache updated with new data:', clientes);

  return res.status(200).json(clientes);
};

const createCliente = async (cliente) => {

  const { nome, sobrenome, email, idade } = cliente;

  const query = 'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';

  const createdCliente = await connection.execute(query, [nome, sobrenome, email, idade]);

  return { insertId: createdCliente.insertId };
};

const deleteCliente = async (id) => {
  const removedCliente = await connection.execute('DELETE FROM clientes WHERE id = ?', [id]);
  return removedCliente;
};

const updateCliente = async (id, cliente) => {
  const { nome, sobrenome, email, idade } = cliente;
  const query = 'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?';
  const updatedCliente = await connection.execute(query, [nome, sobrenome, email, idade, id]);
  return updatedCliente;
};


module.exports = {
  getAllC,
  createCliente,
  deleteCliente,
  updateCliente
};