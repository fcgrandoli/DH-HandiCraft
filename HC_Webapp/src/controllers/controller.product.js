const {
  indexProduct,
  writeProductJSON,
  prepareProduct,
} = require('../model/products.model');
const { validationResult } = require('express-validator');

const controllerProducto = {
  viewProduct: (req, res) => {
    let productList = indexProduct();
    let i = req.params.id;
    res.render('products/productDetail', {
      productList: productList,
      i: i,
    });
  },

  viewCreateProduct: (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    let productList = indexProduct();
    let i = req.params.id;
    res.render('products/productCreate', {
      productList: productList,
      i: i,
      errors: validaciones.mapped(),
    });
  },

  viewEditProduct: (req, res) => {
    let productList = indexProduct();
    if (!req.params) {
      res.redirect('/');
    } else {
      let i = req.params.id;
      return res.render('products/productEdit', {
        productList: productList,
        i: i,
      });
    }
  },

  createProduct: (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render('products/productCreate', {
        styles: ['products/productCreate'],
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    }
    let imageCheck = '';
    let productList = indexProduct();
    if (!req.file) {
      imageCheck = 'noproduct.png';
    } else {
      imageCheck = req.file.filename;
    }

    productList.push(prepareProduct(req.body, imageCheck));
    writeProductJSON(productList);
    res.redirect('/viewProduct/' + req.body.id + '/mostrar');
  },

  updateProduct: (req, res) => {
    productList = indexProduct();
    let i = req.body.id;
    productList[i].name = req.body.name;
    productList[i].price = req.body.price;
    productList[i].discount = req.body.discount;
    productList[i].descShort = req.body.descShort;
    productList[i].descLarge = req.body.descLarge;
    productList[i].image = req.body.image;
    writeProductJSON(productList);
    return res.redirect('/viewProduct/' + req.body.id + '/mostrar');
  },

  removeProduct: (req, res) => {
    let productList = indexProduct();
    let i = req.params.id;
    productList[i].name = 'DELETED';
    productList[i].price = 'DELETED';
    productList[i].discount = 'DELETED';
    productList[i].descShort = 'DELETED';
    productList[i].descLarge = 'DELETED';
    productList[i].image = 'DELETED';
    writeProductJSON(productList);
    res.redirect('/');
  },
};

module.exports = controllerProducto;
