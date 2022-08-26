'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('sales',[{
        idVenta: "1" ,
        fecha:"26/08/2022",
        idCliente: "1"
      }] ,{});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('sales', null, {});
     
  }
};
