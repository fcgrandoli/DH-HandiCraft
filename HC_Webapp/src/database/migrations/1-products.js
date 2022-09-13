"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("products", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.DECIMAL,
        },
        discount: {
          type: Sequelize.INTEGER,
        },
        descShort: {
          type: Sequelize.TEXT,
        },
        descLarge: {
          type: Sequelize.TEXT,
        },
        stock: {
          type: Sequelize.INTEGER,
        },
        collection: {
          type: Sequelize.STRING,
        },

      });
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
