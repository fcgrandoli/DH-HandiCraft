"use strict";
const { indexProduct } = require("../../model/products.model");
module.exports = {
  async up(queryInterface, Sequelize) {
    let products = indexProduct().map((product) => {
      delete product.image;
      return Object({ ...product, stock: 0 });
    });
    await queryInterface.bulkInsert("products", products, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
