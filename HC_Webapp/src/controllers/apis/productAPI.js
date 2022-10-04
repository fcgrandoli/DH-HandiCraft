const { product } = require("../../database/models");
const { Op } = require("sequelize");

const productApi = {
  summary: async (req, res) => {
    try {
      let result = [];
      let count = await product.findAll({
        include: {
          all: true,
        },
      });
  /*     result.push({
        totalProductos: count.length,
      }); */

      let collections = [...new Set(count.map((data) => data.collection))];

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
        let Productos = products.map((product) => {
          return {
            ID: product.id,
            Nombre: product.name,
            Precio: product.price,
            Descuento: product.discount,
            DescripcionCorta: product.descShort,
            DescripcionLarga: product.descLarge,
            Stock: product.stock,
            Categoria: product.collection,
            Imagen: `http://localhost:3000/images/${product.images[0].path}`,
            DetalleProducto: `http://localhost:3000/viewProduct/${product.id}/mostrar`,
          };
        });
        result.push({
          Categoria: collection,
          Count: products.length,
          Productos,
        });
      }

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json("No hay productos.");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  all: async (req, res) => {
    try {
      let products = await product.findAll({
        include: {
          all: true,
        },
      });
      let Productos = products.map((product) => {
        return {
          ID: product.id,
          Nombre: product.name,
          Precio: product.price,
          Descuento: product.discount,
          DescripcionCorta: product.descShort,
          DescripcionLarga: product.descLarge,
          Stock: product.stock,
          Categoria: product.collection,
          Imagen: `http://localhost:3000/images/${product.images[0].path}`,
          DetalleProducto: `http://localhost:3000/viewProduct/${product.id}/mostrar`,
        };
      });
      if (Productos) {
        return res.status(200).json(Productos);
      } else {
        return res.status(404).json("No hay productos.");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  one: async (req, res) => {
    try {
      let productList = await product.findByPk(req.params.id, {
        include: { all: true },
      });

      const result = new Object({
        ID: productList.id,
        Nombre: productList.name,
        Precio: productList.price,
        Descuento: productList.discount,
        "Descripcion Corta": productList.descShort,
        "Descripcion Larga": productList.descLarge,
        Stock: productList.stock,
        Categoria: productList.collection,
        Imagen: `http://localhost:3000/images/${productList.images[0].path}`,
        "Detalle de Producto": `http://localhost:3000/viewProduct/${productList.id}/mostrar`,
      });
      if (result) {
        return res.status(200).json({ result });
      } else {
        return res.status(404).json("Producto inválido.");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = productApi;
