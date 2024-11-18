// routes/escolaridadeRoutes.js
const express = require('express');
const router = express.Router();
const { getEscolaridade, createEscolaridade, updateEscolaridade, deleteEscolaridade } = require('../controllers/escolaridadeController');

router.get('/', getEscolaridade);
router.post('/', createEscolaridade);
router.put('/:id', updateEscolaridade);
router.delete('/:id', deleteEscolaridade);

module.exports = router;
