const { indexProduct } = require("../model/products.model");
const { product } = require("../database/models/index");
const { Op } = require("sequelize");

const controllerHome = {
  mostrarHome: async (req, res) => {
    let productList = await product.findAll({
      include: {
        all: true,
      },
    });

    return res.render("home", {
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
    return res.render("homeSearch", {
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
    return res.render("categorias", {
      productList: productList,
    });
  },
 collection: (req, res) =>{/*async (req, res) =>{
  let collections = [...new Set(count.map(data => data.collection))];
  for (collection of collections) {
    const products = await product.findAll({
      include: {
        all: true,
      },
      where: {
        collection: {
          [Op.like]: collection,
        },
      },
    });
    result.push({
      Count: products.length,
      Categoria: collection,
      products,
    });
  }*/
   return res.render("collectionList");
  },
  mostrarMantenimiento: (req, res) => {
    return res.render("enMantenimiento");
  },
  
};

module.exports = controllerHome;
/*
 let collections = [...new Set(count.map(data => data.collection))];

      for (collection of collections) {
        const products = await product.findAll({
          include: {
            all: true,
          },
          where: {
            collection: {
              [Op.like]: collection,
            },
          },
        });
        result.push({
          Count: products.length,
          Categoria: collection,
          products,
        });
      }
       */