const clientesModels = require('../models/clientesModels');

const getAllC = async (req, res) => {
  try {
    const clientes = await clientesModels.getAllC();
    return res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar clientes' });
  }
};

const createCliente = async (req, res) => {
  const createdCliente = await clientesModels.createCliente(req.body);
  return res.status(201).json(createdCliente);
};

const deleteCliente = async (req, res) => {
  const { id } = req.params;

  await clientesModels.deleteCliente(id);
  return res.status(204).json();
};

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const updatedCliente = await clientesModels.updateCliente(id, req.body);
  return res.status(200).json(updatedCliente);
};


module.exports = {
  getAllC,
  createCliente,
  deleteCliente,
  updateCliente
};
