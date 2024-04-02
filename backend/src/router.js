const express = require('express');
const router = express.Router();

const clintesController = require ('./controllers/clientesController');
const produtosController = require ('./controllers/produtosController');

const produtosMiddlewares = require('./middlewares/produtosMiddlewares');
const clienteMiddlewares = require('./middlewares/clientesMiddlewares');

router.get('/clientes', clintesController.getAllC);
router.get('/produtos', produtosController.getAll);

router.post('/clientes', clienteMiddlewares.validadeBody, clintesController.createCliente);
router.post('/produtos', produtosMiddlewares.validadeBody, produtosController.createProduto);

router.delete('/clientes/:id', clintesController.deleteCliente);
router.delete('/produtos/:id', produtosController.deleteProduto);

router.put('/clientes/:id', clintesController.updateCliente);
router.put('/produtos/:id', produtosController.updateProduto);

module.exports = router;