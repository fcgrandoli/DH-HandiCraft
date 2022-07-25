const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const productModel = {
  index: function () {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    return JSON.parse(productJSON);
  },
  create: function (data) {
    let products = productModel.index();
    return Object({
      id: products.length,
      name: data.name,
      price: data.price,
      disc: data.disc,
      image: data.image,
      descs: data.descs,
      descl: data.descl,
    });
  },
  remove: function (id) {
    productList = productModel.index();
    //let i = data.id;
    productList[id].name = 'DELETED';
    productList[id].price = 'DELETED';
    productList[id].disc = 'DELETED';
    productList[id].descs = 'DELETED';
    productList[id].descl = 'DELETED';
    productList[id].image = 'DELETED';
    productModel.write(productList);
  },
  update: function (data) {
    productList = productModel.index();
    let i = data.id;
    productList[i].name = data.name;
    productList[i].price = data.price;
    productList[i].disc = data.disc;
    productList[i].descs = data.descs;
    productList[i].descl = data.descl;
    productList[i].image = data.image;
    productModel.write(productList);
  },
  write: function (data) {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(productFile, update);
  },
};

module.exports = productModel;
