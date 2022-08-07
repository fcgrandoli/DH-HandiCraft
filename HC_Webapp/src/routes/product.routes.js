const express = require('express');
const router = express.Router();
const {
  viewProduct,
  viewEditProduct,
  viewCreateProduct,
  createProduct,
  updateProduct,
  removeProduct,
} = require('../controllers/controller.product.js');
const uploadProduct = require('../middlewares/productUpload.js');
const validationProduct = require('../validations/product');

router.get('/', viewProduct);

router.get('/:id/mostrar', viewProduct);

router.get('/:id/editar', viewEditProduct);

router.put('/editar', updateProduct);

router.get('/createProduct', viewCreateProduct);

router.post(
  '/createProduct',
  uploadProduct.single('image'),
  [validationProduct],
  createProduct
);

router.get('/:id/eliminar', removeProduct);

module.exports = router;
