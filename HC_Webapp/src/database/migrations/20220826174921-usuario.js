'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('User',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.TEXT
        },
        userName: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        passwd: {
          type: Sequelize.STRING
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        avatar: {
          type: Sequelize.TEXT,
          allowNull:true
        },
        loggedIn: {
          type: Sequelize.BOOLEAN
        }
      });
    } catch (error) {
      console.log(error)
    }
     
  },
  
  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('User');
     
  }
};
