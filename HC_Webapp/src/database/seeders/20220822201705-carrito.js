'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('carrito', carrito, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('carrito', null, {});
     
  }
};
