const express = require('express');
const router = express.Router();
const controllerProducto = require('../controllers/controllerProducto.js');
const productList = require('../views/products/productList_JSON.js');
const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');

router.get('/', controllerProducto.mostrarProducto);

router.get('/:id/mostrar', controllerProducto.mostrarProducto);

router.get('/:id/editar', controllerProducto.editarProducto);

router.put('/editar', (req, res) => {
  let i = req.body.id;
  productList[i].name = req.body.name;
  productList[i].price = req.body.price;
  productList[i].disc = req.body.disc;
  productList[i].descs = req.body.descs;
  productList[i].descl = req.body.descl;
  productList[i].image = req.body.image;
  res.redirect('/producto/' + req.body.id + '/mostrar');
});

router.get('/crear', controllerProducto.crearProducto);

router.put('/crear', (req, res) => {
  let tempID = productList.length;
  /*   tempID++; */
  let tempObject = {
    id: tempID,
    name: req.body.name,
    price: req.body.price,
    disc: req.body.disc,
    image: req.body.image,
    descs: req.body.descs,
    descl: req.body.descl,
  };
  productList.push(tempObject);
  res.redirect('/producto/' + tempID + '/mostrar');
});

router.get('/:id/eliminar', controllerProducto.eliminarProducto);

router.get('/:id/comentarios/:cmt?', controllerProducto.detalleComentario);

module.exports = router;
