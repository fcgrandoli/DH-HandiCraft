'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('ventasDetalle', ventasDetalle, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('ventasDetalle', null, {});
     
  }
};
