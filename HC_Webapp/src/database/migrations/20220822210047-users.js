'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        first_name: {
          type: Sequelize.STRING
        },
        last_name: {
          type: Sequelize.TEXT
        },
        user_name: {
          type: Sequelize.STRING
        },
        email : {
          type: Sequelize.STRING
        },
        passwd : {
          type: Sequelize.STRING
        },
        avatar: {
          type: Sequelize.INTEGER,
          allowNull:true,
          references:{
            model:'images',
            key:'id'}
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      });
    } catch (error) {
      console.log(error)
    }
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('users');
     
  }
};
