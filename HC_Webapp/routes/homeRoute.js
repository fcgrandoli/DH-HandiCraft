const express = require('express');
const router = express.Router();
const controllerHome = require('../controllers/controllerHome.js');

router.get('/', controllerHome.mostrarHome);

router.get('/buscar', controllerHome.buscarProducto);

module.exports = router;
