const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const productCartModel = {
  indexCart: function () {
    let productFile = resolve(__dirname, '../data', 'cartList.json');
    let productJSON = readFileSync(productFile);
    return JSON.parse(productJSON);
  },
  //muestra todos los productos
 
  comprarProduct: function (data) {
    let products = productCartModel.indexCart();
    return Object({
      id: products.length,
      name: data.name,
      price: data.price,
      disc: data.disc,
      image: data.image,
      descs: data.descs,
      descl: data.descl,
      //cant: data.cant,
    });
  },
 
  eliminarProduct: function (id) {
    let cartList = productCartModel.indexCart();
    cartList[id].name = 'DELETED';
    cartList[id].price = 'DELETED';
    cartList[id].disc = 'DELETED';
    cartList[id].descs = 'DELETED';
    cartList[id].descl = 'DELETED';
    cartList[id].image = 'DELETED';
    cartList[id].cant = 'DELETED';
    productCartModel.writeProductJSON(cartList);
  },
  updateProduct: function (data) {
    cartList = productCartModel.indexCart();
    let i = data.id;
    cartList[i].name = data.name;
    cartList[i].price = data.price;
    cartList[i].disc = data.disc;
    cartList[i].descs = data.descs;
    cartList[i].descl = data.descl;
    cartList[i].image = data.image;
    cartList[i].cant = data.cant;
    productCartModel.writeProductJSON(cartList);
  },
  writeProductJSON: function (data) {
    let productFile = resolve(__dirname, '../data', 'cartList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(productFile, update);
  },
  
};

module.exports = productCartModel;
