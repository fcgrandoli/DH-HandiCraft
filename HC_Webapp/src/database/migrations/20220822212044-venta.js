'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Sale', {
      saleID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      userID: {
        type: Sequelize.INTEGER
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('Sale');

  }
};
