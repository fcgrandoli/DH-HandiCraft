'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('venta', { 
        idVenta: {
          allowNull: false,
          autoIncrement:true,
          primaryKey:true, 
          type:Sequelize.INTEGER
        },
        fecha: {
          type:Sequelize.INTEGER
        },
        idUsuario: {
          type:Sequelize.INTEGER
        }
      });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('venta');
     
  }
};
