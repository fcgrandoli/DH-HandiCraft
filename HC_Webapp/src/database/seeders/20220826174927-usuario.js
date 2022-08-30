'use strict';

const { indexUser } = require('../../model/users.model');
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('User', indexUser(), {});

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('User', null, {});

  }
};
