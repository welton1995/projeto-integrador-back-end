const express = require('express');
const chavesControllers = require('./controllers/chavesControllers');
const saidasControllers = require('./controllers/saidasControllers');
const entradasControllers = require('./controllers/entradasControllers');

const routes = express.Router();

routes.get('/', chavesControllers.listar);
routes.post('/', chavesControllers.criar);
routes.put('/:id', chavesControllers.atualizar);
routes.delete('/:id', chavesControllers.remover);
routes.put('/retirar/:id', chavesControllers.retirar);
routes.put('/adicionar/:id', chavesControllers.adicionar);
routes.get('/busca/:codigo', chavesControllers.buscaCodigo);

routes.get('/saidas', saidasControllers.listar);
routes.post('/saidas/:id', saidasControllers.criar);


routes.get('/entradas', entradasControllers.listar);
routes.post('/entradas/:id', entradasControllers.criar);



module.exports = routes;