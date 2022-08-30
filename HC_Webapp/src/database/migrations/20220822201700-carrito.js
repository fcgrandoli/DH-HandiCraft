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
        userID: {
          type:Sequelize.INTEGER 
        },
        productID: {
          type:Sequelize.INTEGER 
        },
        amount: {
          type:Sequelize.INTEGER 
        }
      });
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('Carrito');
     
  }
};
