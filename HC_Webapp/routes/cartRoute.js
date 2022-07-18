const express = require('express');
const router = express.Router();
const controllerCart = require('../controllers/controllerCart.js');

router.get('/', controllerCart.mostrarCart);

module.exports = router;
