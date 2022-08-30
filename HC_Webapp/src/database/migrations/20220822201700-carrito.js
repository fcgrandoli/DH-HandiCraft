'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('Carrito', { 
        id:{ 
          allowNull: false,
          autoIncrement:true,
          primaryKey:true,
          type:Sequelize.INTEGER 
        },
        idUsuario: {
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
    
      await queryInterface.dropTable('Carrito');
     
  }
};