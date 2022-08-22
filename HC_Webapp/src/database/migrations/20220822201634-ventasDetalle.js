'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('sales detail', { 
      idVenta:{ 
        allowNull: false,
          autoIncrement:true,
          primaryKey:true,
        type: Sequelize.INTEGER
      },
      idProducto: {
        type: Sequelize.INTEGER
      },
      cantidad: {
         type: Sequelize.INTEGER
        }  
        });
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('sales detail');
    
  }
};
