'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     try {
    await queryInterface.createTable('products', { 
        id:{
          allowNull: false,
          autoIncrement:true,
          primaryKey:true,
          type: Sequelize.INTEGER
        },
        name: {
          type:  Sequelize.STRING
        },
        price: {
          type:  Sequelize.INTEGER
        },
        descl: {
          type: Sequelize.TEXT
        },
        disc :{
          type: Sequelize.INTEGER
        },
        image :{
          type: Sequelize.TEXT
        },
        descs :{
          type: Sequelize.TEXT
        },
        cant :{
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

