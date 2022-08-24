'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        first_name: {
          type: DataTypes.STRING
        },
        last_name: {
          type: DataTypes.TEXT
        },
        user_name: {
          type: DataTypes.STRING
        },
        email : {
          type: DataTypes.STRING
        },
        passwd : {
          type: DataTypes.STRING
        },
        avatar: {
          type: Sequelize.INTEGER,
          allowNull:true,
          references:{
            model:'images',
            key:'id'}
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
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
