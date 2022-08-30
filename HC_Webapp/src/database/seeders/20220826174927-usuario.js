'use strict';

    const { indexUser }= require('../../model/users.model');
    module.exports = {
      async up (queryInterface, Sequelize) {
       
          await queryInterface.bulkInsert('Usuario', indexUser(), {});
        
      },
    
      async down (queryInterface, Sequelize) {
        
          await queryInterface.bulkDelete('Usuario', null, {});
     
  }
};
