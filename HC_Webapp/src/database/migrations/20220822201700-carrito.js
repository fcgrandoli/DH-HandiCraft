'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('carrito', { 
        id:{ 
          type:Sequelize.INTEGER 
        },
        idCliente: {
          type:Sequelize.INTEGER 
        },
        idProducto: {
          type:Sequelize.INTEGER 
        },
        cantidad: {
          type:Sequelize.INTEGER 
        }
      });
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('carrito');
     
  }
};
