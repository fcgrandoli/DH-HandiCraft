const productList = require('../views/products/productList_JSON');
const userList = require('../views/users/usersList_JSON');
const userLoggedIn = require('../views/users/userSession_JSON');

const controllerHome = {
  mostrarHome: (req, res) => {
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
