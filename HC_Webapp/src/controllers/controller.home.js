const userLoggedIn = require('../views/users/userSession_JSON');
const { indexProduct, searchProduct } = require('../model/products.model');

const controllerHome = {
  mostrarHome: (req, res) => {
    productList = indexProduct();
    return res.render('home', {
      productList: productList,
      userLoggedIn: userLoggedIn,
    });
  },

  buscarProducto: (req, res) => {
    let userQuery = req.query.buscar.toLowerCase();
    let tempProduct = searchProduct(indexProduct(), userQuery);
    res.render('homeSearch', {
      userLoggedIn: userLoggedIn,
      productList: productList,
      tempProduct: tempProduct,
    });
  },
};

module.exports = controllerHome;
