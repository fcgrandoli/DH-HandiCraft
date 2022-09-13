const express = require('express');
const controllerCart = require('../controllers/controller.cart.js');
const router = express.Router();
const controllerProducto = require('../controllers/controller.cart.js');
const uploadProduct = require('../middlewares/productUpload.js');
const {
  indexProduct,
  writeProductJSON,
  updateProduct,
} = require('../model/cart.model');

router.get('/', controllerCart.viewProduct);

router.get('/:id/mostrarCart', controllerCart.viewProduct);

router.get('/:id/eliminarProduct', controllerCart.eliminarProduct);

router.post( '/:id/comprarProduct', controllerCart.comprarProduct);

router.get( '/:id/comprarProduct', controllerCart.comprarProduct);

module.exports = router;
