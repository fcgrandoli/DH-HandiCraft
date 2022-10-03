const { product } = require("../database/models/index");

module.exports = async (req, res, next) => {
  let productList = await product.findAll({
    include: {
      all: true,
    },
  });

  let collections = [...new Set(productList.map((data) => data.collection))];

  res.locals.collections = collections;
  return next();
};
