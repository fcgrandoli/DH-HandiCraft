const { validationResult } = require('express-validator');
const {
  indexProduct,
  writeProductJSON,
  eliminarProduct,
  comprarProduct,
} = require('../model/cart.model');
const {
  indexUser,
  readLoggedUser,
  closeSession,
} = require('../model/users.model');

const controllerCart = {
  viewProduct: (req, res) => {
    let userLoggedIn = readLoggedUser();
    let productList = indexProduct();
    let i = req.params.id;
    res.render('products/cart', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },
  //TODO falta terminar este metodo
  comprarProduct: (req, res) => {
    let productList = indexProduct();
    let userLoggedIn = readLoggedUser();
    let i = req.params.id;
    res.render('products/cart', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  eliminarProduct: (req, res) => {
    removeProduct(req.params.id);
    res.redirect('/cart');
  },
};

module.exports = controllerCart;
