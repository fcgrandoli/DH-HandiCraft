const { validationResult } = require('express-validator');
const {
  indexProduct,
  writeProductJSON,
  prepareProduct,
} = require('../model/products.model');
const { readLoggedUser } = require('../model/users.model');

const controllerProducto = {
  viewProduct: (req, res) => {
    let userLoggedIn = readLoggedUser();
    let productList = indexProduct();
    let i = req.params.id;
    res.render('products/productDetail', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  viewCreateProduct: (req, res) => {
    let productList = indexProduct();
    let userLoggedIn = readLoggedUser();
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      userLoggedIn: userLoggedIn,
    });
  },

  viewEditProduct: (req, res) => {
    let productList = indexProduct();
    let userLoggedIn = readLoggedUser();
    if (!req.params) {
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

  createProduct: (req, res) => {
    let imageCheck = '';
    let productList = indexProduct();
    if (!req.file) {
      imageCheck = 'noproduct.png';
    } else {
      imageCheck = req.file.filename;
    }
    //TODO aca esta para escribir las cosas en el carrito
    productList.push(prepareProduct(req.body, imageCheck));
    writeProductJSON(productList);
    res.redirect('/viewProduct/' + req.body.id + '/mostrar');
  },

  updateProduct: (req, res) => {
    productList = indexProduct();
    let i = req.body.id;
    productList[i].name = req.body.name;
    productList[i].price = req.body.price;
    productList[i].disc = req.body.disc;
    productList[i].descs = req.body.descs;
    productList[i].descl = req.body.descl;
    productList[i].image = req.body.image;
    writeProductJSON(productList);
    return res.redirect('/viewProduct/' + req.body.id + '/mostrar');
  },

  removeProduct: (req, res) => {
    let productList = indexProduct();
    let i = req.params.id;
    productList[i].name = 'DELETED';
    productList[i].price = 'DELETED';
    productList[i].disc = 'DELETED';
    productList[i].descs = 'DELETED';
    productList[i].descl = 'DELETED';
    productList[i].image = 'DELETED';
    writeProductJSON(productList);
    res.redirect('/');
  },
};

module.exports = controllerProducto;
