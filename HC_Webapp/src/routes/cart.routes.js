const express = require('express');
const controllerCart = require('../controllers/controller.cart.js');
const router = express.Router();
const controllerProducto = require('../controllers/controller.cart.js');
const uploadProduct = require('../middlewares/productUpload.js');
const {
  indexProduct,
  createProduct,
  writeProductJSON,
  updateProduct,
} = require('../model/cart.model');

router.get('/', controllerCart.viewProduct);

router.get('/:id/mostrarCart', controllerCart.viewProduct);

router.get('/:id/eliminarCart', controllerProducto.eliminarCart);

module.exports = router;
