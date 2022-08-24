'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('sales', { 
        idVenta: {
          allowNull: false,
          autoIncrement:true,
          primaryKey:true, 
          type:Sequelize.INTEGER
        },
        fecha: {
          type:Sequelize.INTEGER
        },
        idCliente: {
          type:Sequelize.INTEGER
        }
      });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('sales');
     
  }
};
