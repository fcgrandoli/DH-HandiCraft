"use strict";
const { indexProduct } = require("../../model/products.model");
module.exports = {
  async up(queryInterface, Sequelize) {
    let images = indexProduct().map((product) => {
      return Object({ path: product.image });
    });
    await queryInterface.bulkInsert("images", images, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
