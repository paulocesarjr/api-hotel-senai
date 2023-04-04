const express = require('express');
const router = express.Router();
const controller = require('./../controladores/quarto');

router.post('/quarto', controller.cadastrarQuarto);

module.exports = router;