'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('Products', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        price: {
          allowNull: false,
          type: Sequelize.DECIMAL
        },
        descLarge: {
          allowNull: false,
          type: Sequelize.TEXT
        },
        descShort: {
          allowNull: false,
          type: Sequelize.STRING
        },
        discount: {
          allowNull: false,
          type: Sequelize.STRING
        },
        amount: {
          allowNull: true,
          type: Sequelize.INTEGER
        },
        image: {
          allowNull:false,
          type: Sequelize.STRING
        }
        });
      } catch (error) {
        console.log(error)
      }
    },
  
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('Products');  
    }
};

