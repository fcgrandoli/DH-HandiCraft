'use strict';

const { indexUser } = require('../../model/users.model');
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Usuario', indexUser(), {});

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Usuario', null, {});

  }
};
