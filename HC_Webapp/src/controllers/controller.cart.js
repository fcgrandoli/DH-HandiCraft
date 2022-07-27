const express = require('express');
const app = express();
const jsonMiddlewares= require ('../middlewares/cart.js')
app.use (jsonMiddlewares);
const { validationResult } = require('express-validator');
const {
  writeCartJSON,
  indexCart,
} = require('../model/cart.model');

const controllerCart = {
  mostrarCart: (req, res) => {
    return res.render('products/cart');
  }, 
    productsCart : (req, res) => {
      let cartList = indexCart();
      let i = req.params.id;
      res.render('products/cart', {
        cartList: cartList,
        i: i,
      });
    },
  
} 
 
module.exports = controllerCart;
