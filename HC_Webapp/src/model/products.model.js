const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const productModel = {
  indexProduct: function () {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let productJSON = readFileSync(productFile);
    return JSON.parse(productJSON);
  },
  indexCart: function () {
    let productFile = resolve(__dirname, '../data', 'cartList.json');
    let cartJSON = readFileSync(productFile);
    return JSON.parse(cartJSON);
  },
  createProduct: function (data, imageName) {
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
    //Crea un array vacion para llenarno con los productos que cumplan la condicion de la busqueda.
    let tempProduct = [];
    //Recorre el array de productos que viene por el 1er parametro de la funcion, por cada producto
    data.forEach(product => {
      //Convierte el nombre del producto en minscula para poder hacer la comparacion y se fija si coincide con la busqueda del usuario.
      product.name.toLowerCase().includes(query)
        ? //? es un condicional, en caso que devuelva "true" hace push del objeto al array tempProduct.
          tempProduct.push(product)
        : '';
    });
    //Finalmente retorna el array tempProduct.
    return tempProduct;
  },
  writeProductJSON: function (data) {
    let productFile = resolve(__dirname, '../data', 'productList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(productFile, update);
  },
  writeCartJSON: function (data) {
    let productFile = resolve(__dirname, '../data', 'cartList.json');
    let update = JSON.stringify(data, null, 2);
    return writeFileSync(productFile, update);
  },
};

module.exports = productModel;
