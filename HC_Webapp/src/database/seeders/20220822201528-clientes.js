'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('clientes', clientes, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('clientes', null, {});
     
  }
};
