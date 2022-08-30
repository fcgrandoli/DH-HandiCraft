'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Sale',[{
        saleID: "1" ,
        date: "2022-08-26",
        userID: "1"
      }] ,{});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Sale', null, {});
     
  }
};
