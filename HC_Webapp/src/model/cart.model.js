const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const cartModel = {

    indexCart: function () {
        let productFile = resolve(__dirname, '../data', 'cartList.json');
        let cartJSON = readFileSync(productFile);
        return JSON.parse(cartJSON);
      },
      writeCartJSON: function (data) {
        let productFile = resolve(__dirname, '../data', 'cartList.json');
        let update = JSON.stringify(data, null, 2);
        return writeFileSync(productFile, update);
      },
   
}

module.exports = cartModel;

    
 