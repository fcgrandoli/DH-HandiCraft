'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        username: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.TEXT
        },
        avatar: {
          type: DataTypes.INTEGER,
          references: { model: "images", key: "id" },
          allowNull:true
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
