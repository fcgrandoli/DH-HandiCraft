'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('sales detail', salesDetail, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('sales detail', null, {});
     
  }
};
