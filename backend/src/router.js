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
router.put('/produtos/:id', produtosMiddlewares.validaNome, produtosMiddlewares.validaDescricao, produtosMiddlewares.validaPreco, produtosController.updateProduto);

router.get('/', (req, res) => {
    res.send('Bem-vindo à pagina principal da API! - Para GET & POST produtos ou clientes: http://localhost:3000/produtos ou http://localhost:3000/clientes - Para PUT & DELETE produtos ou clientes: http://localhost:3000/produtos/{id} ou http://localhost:3000/clientes/{id}');
});

module.exports = router;