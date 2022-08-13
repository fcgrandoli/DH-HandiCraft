const { validationResult } = require('express-validator');
const {
  indexCart,
  writeProductJSON,
  eliminarProduct,
  comprarProduct,
} = require('../model/cart.model');
const { indexProduct } = require('../model/products.model');

const controllerCart = {
  viewProduct: (req, res) => {
    let cartProduct = indexCart();
    let i = req.params.id;
    res.render('products/cart', {
      cartProduct: cartProduct,
      i: i,
    });
  },

  comprarProduct: (req, res) => {
    let cartProduct = indexCart();
    let productList = indexProduct();
    let i = req.params.id;
    let productCart = productList.find(p => p.id == i);
    cartProduct.push(comprarProduct(productCart));
    writeProductJSON(cartProduct);
    res.render('products/cart', {
      cartProduct: cartProduct,
      i: i,
    });
  },

  eliminarProduct: (req, res) => {
    eliminarProduct(req.params.id);
    res.redirect('/cart');
  },
};

module.exports = controllerCart;
