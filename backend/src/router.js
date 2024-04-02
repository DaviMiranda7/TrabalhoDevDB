const express = require('express');
const router = express.Router();

const clintesController = require ('./controllers/clientesController');
const produtosController = require ('./controllers/produtosController');

const produtosMiddlewares = require('./middlewares/produtosMiddlewares');
const clienteMiddlewares = require('./middlewares/clientesMiddlewares');

router.get('/clientes', clintesController.getAllC);
router.get('/produtos', produtosController.getAll);

router.post('/clientes', clienteMiddlewares.validaNome, clienteMiddlewares.validaSobrenome, clienteMiddlewares.validaEmail, clienteMiddlewares.validaIdade, clintesController.createCliente);
router.post('/produtos', produtosMiddlewares.validaNome, produtosMiddlewares.validaDescricao, produtosMiddlewares.validaPreco, produtosController.createProduto);

router.delete('/clientes/:id', clintesController.deleteCliente);
router.delete('/produtos/:id', produtosController.deleteProduto);

router.put('/clientes/:id', clienteMiddlewares.validaNome, clienteMiddlewares.validaSobrenome, clienteMiddlewares.validaEmail, clienteMiddlewares.validaIdade, clintesController.updateCliente);
router.put('/produtos/:id', produtosMiddlewares.validaNome, produtosMiddlewares.validaDescricao, produtosMiddlewares.validaPreco, produtosController.createProduto, produtosController.updateProduto);

module.exports = router;