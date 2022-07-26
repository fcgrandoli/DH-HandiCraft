const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const productModel = {
  indexProduct: function () {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    return JSON.parse(productJSON);
  },
  createProduct: function (data, imageName) {
    let products = productModel.indexProduct();
    console.log(data, imageName);
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
  removeProduct: function (id) {
    let productList = productModel.indexProduct();
    productList[id].name = 'DELETED';
    productList[id].price = 'DELETED';
    productList[id].disc = 'DELETED';
    productList[id].descs = 'DELETED';
    productList[id].descl = 'DELETED';
    productList[id].image = 'DELETED';
    productModel.writeProductJSON(productList);
  },
  updateProduct: function (data) {
    productList = productModel.indexProduct();
    let i = data.id;
    productList[i].name = data.name;
    productList[i].price = data.price;
    productList[i].disc = data.disc;
    productList[i].descs = data.descs;
    productList[i].descl = data.descl;
    productList[i].image = data.image;
    productModel.writeProductJSON(productList);
  },
  searchProduct: function (data, query) {
    let tempProduct = [];
    for (i = 0; i < data.length; i++) {
      if (data[i].name.toLowerCase().includes(query)) {
        tempProduct.push(data[i]);
      }
    }
    return tempProduct;
  },
  writeProductJSON: function (data) {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(productFile, update);
  },
};

module.exports = productModel;
