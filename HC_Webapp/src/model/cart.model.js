const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const productCartModel = {
  indexProduct: function () {
    let productFile = resolve(__dirname, '../data', 'cartList.json');
    let productJSON = readFileSync(productFile);
    return JSON.parse(productJSON);
  },
  //muestra todos los productos
 
  comprarProduct: function (data, imageName) {
    let products = productCartModel.indexProduct();
    return Object({
      id: products.length,
      name: data.name,
      price: data.price,
      disc: data.disc,
      image: imageName,
      descs: data.descs,
      descl: data.descl,
      cant: data.cant,
    });
  },
  eliminarCart: function (id) {
    let productList = productCartModel.indexProduct();
    productList[id].name = 'DELETED';
    productList[id].price = 'DELETED';
    productList[id].disc = 'DELETED';
    productList[id].descs = 'DELETED';
    productList[id].descl = 'DELETED';
    productList[id].image = 'DELETED';
    productList[id].cant = 'DELETED';
    productCartModel.writeProductJSON(cartList);
  },
  updateProduct: function (data) {
    productList = productCartModel.indexProduct();
    let i = data.id;
    productList[i].name = data.name;
    productList[i].price = data.price;
    productList[i].disc = data.disc;
    productList[i].descs = data.descs;
    productList[i].descl = data.descl;
    productList[i].image = data.image;
    productList[i].cant = data.cant;
    productCartModel.writeProductJSON(cartList);
  },
  writeProductJSON: function (data) {
    let productFile = resolve(__dirname, '../data', 'cartList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(productFile, update);
  },
  
};

module.exports = productCartModel;
