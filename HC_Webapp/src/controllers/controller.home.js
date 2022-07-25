const userLoggedIn = require('../views/users/userSession_JSON');
const {
  index,
  create,
  write,
  update,
  remove,
} = require('../model/products.model');
const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const controllerHome = {
  mostrarHome: (req, res) => {
    productList = index();
    return res.render('home', {
      productList: productList,
      userLoggedIn: userLoggedIn,
    });
  },

  buscarProducto: (req, res) => {
    productList = index();
    let tempProduct = [];
    let userQuery = req.query.buscar.toLowerCase();
    for (i = 0; i < productList.length; i++) {
      if (productList[i].name.toLowerCase().includes(userQuery)) {
        tempProduct.push(productList[i]);
      }
    }
    res.render('homeSearch', {
      userLoggedIn: userLoggedIn,
      productList: productList,
      tempProduct: tempProduct,
    });
  },
};

module.exports = controllerHome;
