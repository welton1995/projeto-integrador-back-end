const express = require('express');
const chavesControllers = require('./controllers/chavesControllers');

const routes = express.Router();

routes.get('/', chavesControllers.listar);
routes.post('/', chavesControllers.criar);
routes.put('/:id', chavesControllers.atualizar);
routes.delete('/:id', chavesControllers.remover);
routes.put('/retirar/:id', chavesControllers.retirar);
routes.put('/adicionar/:id', chavesControllers.adicionar);


module.exports = routes;