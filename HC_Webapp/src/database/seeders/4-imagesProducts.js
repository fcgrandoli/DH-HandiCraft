'use strict';
const { indexProduct } = require('../../model/products.model');
module.exports = {
  async up(queryInterface, Sequelize) {
    let products = indexProduct().map(product => {
      delete product.image;
      return Object({ product: product.id, image: product.id });
    });
    await queryInterface.bulkInsert('imagesProducts', products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagesProducts', null, {});
  },
};
