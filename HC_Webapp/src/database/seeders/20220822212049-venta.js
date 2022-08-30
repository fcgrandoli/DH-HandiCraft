'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('venta',[{
        idVenta: "1" ,
        fecha:"26/08/2022",
        idUsuario: "1"
      }] ,{});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('venta', null, {});
     
  }
};
