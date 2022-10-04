const express = require('express');
const router = express.Router();
const {
  viewProduct,
  viewEditProduct,
  viewCreateProduct,
  createProduct,
  updateProduct,
  removeProduct,
  removeProductDash
} = require('../controllers/controller.product.js');
const uploadProduct = require('../middlewares/productUpload.js');
const validationProduct = require('../validations/productCreate');
const validationProductEdit = require('../validations/productEdit');
const authMiddleware = require('../middlewares/authMiddleware.js');
const isAdminMiddleware = require('../middlewares/isAdmin.js');

router.get('/', viewProduct);

router.get('/:id/mostrar', viewProduct);

router.get('/:id/editar', authMiddleware, isAdminMiddleware, viewEditProduct);

router.post(
  '/update',
  authMiddleware,
  isAdminMiddleware,
  uploadProduct.single('image'),
  validationProductEdit,
  updateProduct
);

router.get(
  '/createProduct',
  authMiddleware,
  isAdminMiddleware,
  viewCreateProduct
);

router.post(
  '/createProduct',
  isAdminMiddleware,
  authMiddleware,
  uploadProduct.single('image'),
  validationProduct,
  createProduct
);

router.post('/:id/delete', authMiddleware, isAdminMiddleware, removeProduct);
router.post('/:id/delete/dash', authMiddleware, isAdminMiddleware, removeProductDash);
module.exports = router;
