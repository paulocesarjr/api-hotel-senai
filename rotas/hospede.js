const express = require('express');
const router = express.Router();
const controller = require("../controladores/hospede");

router.post('/hospede/cadastrar',controller.cadastrarHospede);



module.exports = router;    