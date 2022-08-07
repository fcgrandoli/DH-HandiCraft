const { validationResult } = require('express-validator');
const {
  indexProduct,
  writeProductJSON,
  removeProduct,
} = require('../model/products.model');
const {
  indexUser,
  readLoggedUser,
  closeSession,
} = require('../model/users.model');

const controllerProducto = {
  mostrarProducto: (req, res) => {
    let userLoggedIn = readLoggedUser();
    let productList = indexProduct();
    let i = req.params.id;
    res.render('products/productDetail', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  mainCreateProduct: (req, res) => {
    let productList = indexProduct();
    let userLoggedIn = readLoggedUser();
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  editarProducto: (req, res) => {
    let productList = indexProduct();
    let userLoggedIn = readLoggedUser();
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
    removeProduct(req.params.id);
    res.redirect('/');
  },
};

module.exports = controllerProducto;
