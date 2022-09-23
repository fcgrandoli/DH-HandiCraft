const { indexProduct } = require('../model/products.model');
const { product } = require('../database/models/index');
const { Op } = require('sequelize');

const controllerHome = {
  mostrarHome: async (req, res) => {
    let productList = await product.findAll({
      include: {
        all: true,
      },
    });

    return res.render('home', {
      productList: productList,
    });
  },
  searchProduct: async (req, res) => {
    let productList = await product.findAll({
      include: {
        all: true,
      },
      where: {
        name: {
          [Op.like]: `%${req.query.buscar}%`,
        },
      },
    });
    return res.render('homeSearch', {
      productList: productList,
    });
  },
  searchProductByCollection: async (req, res) => {
    let productList = await product.findAll({
      include: {
        all: true,
      },
      where: {
        collection: {
          [Op.like]: `%${req.query.collection}%`,
        },
      },
    });
    return res.render('home', {
      productList: productList,
    });
  },
  collection: async (req, res) => {
    let productList = await product.findAll({
      include: {
        all: true,
      },
    });

    let collections = [...new Set(productList.map(data => data.collection))];
    //  return res.render("collectionList");
    //res.send(collections.length);
    return res.render('collectionList', {
      collections: collections,
    });
  },
  mostrarMantenimiento: (req, res) => {
    return res.render('enMantenimiento');
  },
};

module.exports = controllerHome;
