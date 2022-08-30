'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Sale',[{
        saleId: "1" ,
        date: "2022-08-26",
        userId: "1"
      }] ,{});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Sale', null, {});
     
  }
};
