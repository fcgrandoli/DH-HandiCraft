const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const productModel = {
  indexProduct: function () {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    return JSON.parse(productJSON);
  },

  prepareProduct: function (data, imageName) {
    let products = productModel.indexProduct();
    return Object({
      id: products.length,
      name: data.name,
      price: data.price,
      disc: data.disc,
      image: imageName,
      descs: data.descs,
      descl: data.descl,
    });
  },

  writeProductJSON: function (data) {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(productFile, update);
  },
};

module.exports = productModel;
