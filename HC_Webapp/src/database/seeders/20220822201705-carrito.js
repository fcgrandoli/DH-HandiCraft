'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkInsert('shopping cart', carrito, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('shopping cart', null, {});
     
  }
};
