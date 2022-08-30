'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('venta detalle', [{
        idVenta:"1",
        idProducto: "7" ,
        cantidad: "2"
      }], {});
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('venta detalle', null, {});
     
  }
};
