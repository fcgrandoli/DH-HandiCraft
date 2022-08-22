'use strict';

module.exports = {
 /* async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('clients', clients, {});
    
  },*/

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('clients', null, {});
     
  }
};
