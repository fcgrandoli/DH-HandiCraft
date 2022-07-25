const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controller.product.js');
const { index, create, write, update } = require('../model/products.model');

router.get('/', controllerProducto.mostrarProducto);

router.get('/:id/mostrar', controllerProducto.mostrarProducto);

router.get('/:id/editar', controllerProducto.editarProducto);

router.put('/editar', (req, res) => {
  update(req.body);
  res.redirect('/producto/' + req.body.id + '/mostrar');
});

router.get('/crear', controllerProducto.crearProducto);

router.put('/crear', (req, res) => {
  productList = index();
  productList.push(create(req.body));
  write(productList);
  res.redirect('/producto/' + req.body.id + '/mostrar');
});

router.get('/:id/eliminar', controllerProducto.eliminarProducto);

module.exports = router;
