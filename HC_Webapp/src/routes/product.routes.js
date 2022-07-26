const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controller.product.js');
const uploadProduct = require('../middlewares/productUpload.js');
const {
  indexProduct,
  createProduct,
  writeProductJSON,
  updateProduct,
} = require('../model/products.model');

router.get('/', controllerProducto.mostrarProducto);

router.get('/:id/mostrar', controllerProducto.mostrarProducto);

router.get('/:id/editar', controllerProducto.editarProducto);

router.put('/editar', (req, res) => {
  updateProduct(req.body);
  res.redirect('/producto/' + req.body.id + '/mostrar');
});

router.get('/crear', controllerProducto.crearProducto);

router.post('/crear', uploadProduct.single('image'), (req, res) => {
  let productList = indexProduct();
  productList.push(createProduct(req.body, req.file.filename));
  writeProductJSON(productList);
  res.redirect('/producto/' + req.body.id + '/mostrar');
});

router.get('/:id/eliminar', controllerProducto.eliminarProducto);

module.exports = router;
