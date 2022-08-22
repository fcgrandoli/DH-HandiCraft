'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('sales', sales, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('sales', sales, {});
     
  }
};
