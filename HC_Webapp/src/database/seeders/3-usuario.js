'use strict';

const { indexUser } = require('../../model/users.model');
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      let users = indexUser().map(function (user) {
        delete user.loggedIn
        
        return Object({
          ...user
        })
      } )
      await queryInterface.bulkInsert('Users', users, {});

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
