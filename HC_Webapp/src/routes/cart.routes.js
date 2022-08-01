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

router.get('/', controllerCart.mostrarProductos);

router.get('/:id/mostrar', controllerCart.mostrarProducto);

router.put('/editar', (req, res) => {
  updateProduct(req.body);
  res.redirect('/producto/' + req.body.id + '/mostrar');
}); 

router.get('/crear', controllerCart.crearProducto);

router.post('/crear', uploadProduct.single('image'), (req, res) => {
  let imageCheck = '';
  let productList = indexProduct();
  if (!req.file) {
    imageCheck = 'noproduct.png';
  } else {
    imageCheck = req.file.filename;
  }
  productList.push(comprarProduct(req.body, imageCheck));
  writeProductJSON(cartList);
  res.redirect('/producto/' + req.body.id + '/mostrar');
});

router.get('/:id/eliminar', controllerProducto.eliminarProducto);

module.exports = router;

