const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controller.product.js');
const uploadProduct = require('../middlewares/productUpload.js');

router.get('/', controllerProducto.viewProduct);

router.get('/:id/mostrar', controllerProducto.viewProduct);

router.get('/:id/editar', controllerProducto.viewEditProduct);

router.put('/editar', controllerProducto.updateProduct);

router.get('/createProduct', controllerProducto.viewCreateProduct);

router.post(
  '/createProduct',
  uploadProduct.single('image'),
  controllerProducto.createProduct
);

router.get('/:id/eliminar', controllerProducto.removeProduct);

module.exports = router;
