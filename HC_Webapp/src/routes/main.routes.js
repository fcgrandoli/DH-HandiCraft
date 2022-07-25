const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller.js');

router.get('/', mainController.mostrarConstruccion);

module.exports = router;
