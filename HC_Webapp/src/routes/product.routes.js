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
const validationProduct = require('../validations/productCreate');
const validationProductEdit = require('../validations/productEdit');
const authMiddleware = require('../middlewares/authMiddleware.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');

router.get('/', viewProduct);

router.get('/:id/mostrar', viewProduct);

router.get('/:id/editar', authMiddleware, viewEditProduct);

router.post(
  '/update',
  authMiddleware,
  uploadProduct.single('image'),
  validationProductEdit,
  updateProduct
);

router.get('/createProduct', authMiddleware, viewCreateProduct);

router.post(
  '/createProduct',
  authMiddleware,
  uploadProduct.single('image'),
  validationProduct,
  createProduct
);

router.post('/:id/delete', /*authMiddleware,*/ removeProduct);

module.exports = router;
