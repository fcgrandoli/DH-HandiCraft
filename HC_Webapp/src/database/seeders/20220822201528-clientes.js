'use strict';
const { indexUser }= require('../../model/users.model.js');
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('clients', indexUser(), {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('clients', null, {});
     
  }
};
