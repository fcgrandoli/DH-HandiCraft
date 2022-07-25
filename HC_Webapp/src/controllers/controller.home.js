const userLoggedIn = require('../views/users/userSession_JSON');
const { index, search } = require('../model/products.model');

const controllerHome = {
  mostrarHome: (req, res) => {
    productList = index();
    return res.render('home', {
      productList: productList,
      userLoggedIn: userLoggedIn,
    });
  },

  buscarProducto: (req, res) => {
    let userQuery = req.query.buscar.toLowerCase();
    let tempProduct = search(index(), userQuery);
    res.render('homeSearch', {
      userLoggedIn: userLoggedIn,
      productList: productList,
      tempProduct: tempProduct,
    });
  },
};

module.exports = controllerHome;
