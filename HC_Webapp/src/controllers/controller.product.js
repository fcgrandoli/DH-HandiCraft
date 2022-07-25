const userLoggedIn = require('../views/users/userSession_JSON');
const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const controllerProducto = {
  mostrarProducto: (req, res) => {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    let productList = JSON.parse(productJSON);
    let i = req.params.id;
    res.render('products/productDetail', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  crearProducto: (req, res) => {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    let productList = JSON.parse(productJSON);
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  editarProducto: (req, res) => {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    let productList = JSON.parse(productJSON);
    if (!req.params.id) {
      res.redirect('/');
    } else {
      let i = req.params.id;
      return res.render('products/productEdit', {
        productList: productList,
        i: i,
        userLoggedIn: userLoggedIn,
      });
    }
  },

  eliminarProducto: (req, res) => {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    let productList = JSON.parse(productJSON);
    let i = req.params.id;
    (productList[i].name = 'DELETED'),
      (productList[i].price = 'DELETED'),
      (productList[i].disc = 'DELETED'),
      (productList[i].image = 'DELETED'),
      (productList[i].descs = 'DELETED'),
      (productList[i].descl = 'DELETED');
    let write = JSON.stringify(productList, null, 2);
    writeFileSync(productFile, write);
    res.redirect('/');
  },

  detalleProducto: (req, res) => {
    res.send('Bienvenidos al detalle del producto: ' + req.params.id);
  },

  detalleComentario: (req, res) => {
    if (!req.params.cmt) {
      res.send(`Este articulo todavia no tiene comentarios.`);
    } else {
      res.send(
        `Bienvenidos al detalle del producto: ${req.params.id} comentario numero: ${req.params.cmt}`
      );
    }
  },
};

module.exports = controllerProducto;
