const express = require('express');
const router = express.Router();
const controllerCart = require('../controllers/controller.cart.js');

router.get('/', controllerCart.mostrarCart);

module.exports = router;
