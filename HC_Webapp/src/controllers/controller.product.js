const userLoggedIn = require('../views/users/userSession_JSON');
const { index, write, remove } = require('../model/products.model');

const controllerProducto = {
  mostrarProducto: (req, res) => {
    productList = index();
    let i = req.params.id;
    res.render('products/productDetail', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  crearProducto: (req, res) => {
    productList = index();
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  editarProducto: (req, res) => {
    productList = index();
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
    remove(req.params.id);
    write(productList);
    res.redirect('/');
  },
};

module.exports = controllerProducto;
