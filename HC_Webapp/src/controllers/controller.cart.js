const { validationResult } = require('express-validator');
const {
  indexCart,
  writeProductJSON,
  eliminarProduct,
  comprarProduct,
} = require('../model/cart.model');
const {
  indexUser,
  readLoggedUser,
  closeSession,
} = require('../model/users.model');
const {
  indexProduct,
} = require('../model/products.model');

const controllerCart = {
  viewProduct: (req, res) => {
    let userLoggedIn = readLoggedUser();
    let cartProduct = indexCart();
    let i = req.params.id;
    res.render('products/cart', {
      cartProduct: cartProduct,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },
  
  comprarProduct: (req, res) => {
    let cartProduct = indexCart();
    let productList= indexProduct();
    let userLoggedIn = readLoggedUser();
    let i = req.params.id;
    let productCart = productList.find(p => p.id == i);
    cartProduct.push(comprarProduct(productCart));
    writeProductJSON(cartProduct);
    res.render('products/cart', {
      cartProduct: cartProduct,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },
  
  eliminarProduct: (req, res) => {
    eliminarProduct(req.params.id);
    res.redirect('/cart');
  },
};

module.exports = controllerCart;
