const userLoggedIn = require('../views/users/userSession_JSON');
const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const controllerHome = {
  mostrarHome: (req, res) => {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    let productList = JSON.parse(productJSON);
    return res.render('home', {
      productList: productList,
      userLoggedIn: userLoggedIn,
    });
  },

  buscarProducto: (req, res) => {
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
