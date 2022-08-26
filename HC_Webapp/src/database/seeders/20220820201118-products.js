'use strict';


const { indexProduct } = require('../../model/products.model');

module.exports = {
  
  async up (queryInterface, Sequelize) {
   try {
     await queryInterface.bulkInsert('products', indexProduct(), {});
    
  } catch (error) {
    console.log(error)
  }
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('products', null, {});
     
  }
};
