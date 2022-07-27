const { validationResult } = require('express-validator');
const {
  writeCartJSON,
  indexCart,
} = require('../model/products.model');

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
    }
} 
 
module.exports = controllerCart;
