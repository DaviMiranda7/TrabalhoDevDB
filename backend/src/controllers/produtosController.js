const { response } = require('express');
const produtosModels = require('../models/produtosModels');

const getAll = async (req, res) => {
    try {
        const produtos = await produtosModels.getAll();
        return res.status(200).json(produtos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
};

const createProduto = async(req, res)  => {
    const createdProduto = await  produtosModels.createProduto(req.body);
    return res.status(201).json(createdProduto);
};

const deleteProduto = async (req, res) => {
    const { id } = req.params;

    await produtosModels.deleteProduto(id);
    return res.status(204).json();
};

const updateProduto = async (req, res) => {
    const { id } = req.params;
    await produtosModels.updateProduto(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createProduto,
    deleteProduto,
    updateProduto
};