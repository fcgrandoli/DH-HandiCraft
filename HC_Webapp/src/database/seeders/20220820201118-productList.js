'use strict';
const { indexProduct }= require('../../model/products.model.js');
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('products', indexProduct(), {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('products', null, {});
     
  }
};
