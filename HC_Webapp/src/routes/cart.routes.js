const express = require('express');
const router = express.Router();
const controllerCart = require('../controllers/controller.cart.js');

router.get('/', controllerCart.mostrarCart);

//router.get('/', controllerCart.mostrarProductosCart);

module.exports = router;
