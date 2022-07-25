const { indexProduct, searchProduct } = require('../model/products.model');
const { indexUser, readLoggedUser } = require('../model/users.model');

const controllerHome = {
  mostrarHome: (req, res) => {
    productList = indexProduct();
    userLoggedIn = readLoggedUser();
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
