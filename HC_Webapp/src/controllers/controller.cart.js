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

const controllerCart = {
  mostrarCart: (req, res) => {
    return res.render('products/cart', { userLoggedIn: userLoggedIn });
  }, 
    mostrarCart : (req, res) => {
      let userLoggedIn = readLoggedUser();
      let productList = indexProduct();
      let i = req.params.id;
      res.render('cart', {
        productList: productList,
        i: i,
        userLoggedIn: userLoggedIn,
      });
    }
} 
 
module.exports = controllerCart;
