const userLoggedIn = require('../views/users/userSession_JSON');
const {
  indexProduct,
  writeProductJSON,
  removeProduct,
} = require('../model/products.model');

const controllerProducto = {
  mostrarProducto: (req, res) => {
    productList = indexProduct();
    let i = req.params.id;
    res.render('products/productDetail', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  crearProducto: (req, res) => {
    productList = indexProduct();
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  editarProducto: (req, res) => {
    productList = indexProduct();
    if (!req.params.id) {
      res.redirect('/');
    } else {
      let i = req.params.id;
      return res.render('products/productEdit', {
        productList: productList,
        i: i,
        userLoggedIn: userLoggedIn,
      });
    }
  },

  eliminarProducto: (req, res) => {
    removeProduct(req.params.id);
    writeProductJSON(productList);
    res.redirect('/');
  },
};

module.exports = controllerProducto;
