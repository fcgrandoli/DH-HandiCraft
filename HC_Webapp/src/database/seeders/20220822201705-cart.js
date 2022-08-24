'use strict';
const { indexCart }= require('../../model/cart.model.js');
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkInsert('shopping cart', indexCart(), {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('shopping cart', null, {});
     
  }
};
