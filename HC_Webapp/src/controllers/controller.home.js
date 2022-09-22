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
        categoria: {
          [Op.like]: `%${req.query.categoria}%`,
        },
      },
    });
    return res.render("categorias", {
      productList: productList,
    });
  },
 categorias:(req, res) =>{
   return res.render("collectionList");
  },
  mostrarMantenimiento: (req, res) => {
    return res.render("enMantenimiento");
  },
};

module.exports = controllerHome;
