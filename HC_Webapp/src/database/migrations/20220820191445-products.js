'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     try {
    await queryInterface.createTable('products', { 
        id:{
          allowNull: false,
          autoIncrement:true,
          primaryKey:true,
          type: Sequelize.INTEGER,
        },
        name: {
          type:  Sequelize.INTEGER
        },
        price: {
          type:  Sequelize.INTEGER
        },
        description: {
          type: Sequelize.INTEGER
        }
      });
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('products');  
  }
};

