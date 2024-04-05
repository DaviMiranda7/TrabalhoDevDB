const connection = require('./connection');


const getAllC = async () => {
  const [clientes] = await connection.execute('SELECT * FROM clientes');
  return clientes;
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