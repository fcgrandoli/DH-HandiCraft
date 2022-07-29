const { validationResult } = require('express-validator');
const {
  indexProduct,
  writeProductJSON,
  removeProduct,
} = require('../model/cart.model');
const {
  indexUser,
  readLoggedUser,
  closeSession,
} = require('../model/users.model');

const controllerCart = {
  mostrarProducto: (req, res) => {
    let userLoggedIn = readLoggedUser();
    let productList = indexProduct();
    let i = req.params.id;
    res.render('products/productDetail', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },mostrarProductos: (req, res) => {
    //Llama a la funcion indexProduct() en products.model.js para armar el array de productos en productList.
    productList = indexProduct();
    //Llama a la funcion readLoggedUser en products.model.js para armar el array del usuario logueado en users.model (aunque este vacio).
    userLoggedIn = readLoggedUser();
    //Retorna la vista "home" junto a las variables declaradas productList y userLoggedIn para que la vista muestre los valores que correspondan.
    return res.render('home', {
      productList: productList,
      userLoggedIn: userLoggedIn,
    });
  },
  //TODO falta terminar este metodo
  agregarProducto: (req, res) => {
    let productList = indexProduct();
    let userLoggedIn = readLoggedUser();
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },


  crearProducto: (req, res) => {
    let productList = indexProduct();
    let userLoggedIn = readLoggedUser();
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },


  eliminarProducto: (req, res) => {
    removeProduct(req.params.id);
    res.redirect('/cart');
  },
};

module.exports = controllerCart;
