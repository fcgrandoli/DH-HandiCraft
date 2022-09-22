const { product } = require('../../database/models');
const { Op } = require('sequelize');

const productApi = {
  all: async (req, res) => {
    try {
      let result = [];
      let count = await product.findAll({
        include: {
          all: true,
        },
      });
      result.push({
        'Cantidad total de productos': count.length,
      });

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
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json('No hay productos.');
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
      if (productList) {
        return res.status(200).json(productList);
      } else {
        return res.status(404).json('Producto inválido.');
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = productApi;
