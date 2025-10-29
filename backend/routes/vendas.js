const express = require('express');
const router = express.Router();
const VendaController = require('../controllers/vendaController'); // <-- esse caminho precisa estar certo!

// Rotas de vendas
router.post('/', VendaController.registrar);
router.get('/', VendaController.listar);
router.get('/:id', VendaController.buscarPorId);

module.exports = router;
