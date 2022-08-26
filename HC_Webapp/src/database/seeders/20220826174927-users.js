'use strict';

    const { indexUser }= require('../../model/users.model');
    module.exports = {
      async up (queryInterface, Sequelize) {
       
          await queryInterface.bulkInsert('users', indexUser(), {});
        
      },
    
      async down (queryInterface, Sequelize) {
        
          await queryInterface.bulkDelete('users', null, {});
     
  }
};
