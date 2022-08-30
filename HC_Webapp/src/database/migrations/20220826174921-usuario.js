'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('Usuario',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        nombre: {
          type: DataTypes.STRING
        },
        apellido: {
          type: DataTypes.TEXT
        },
        nombreUsuario: {
          type: DataTypes.STRING
        },
        contraseña: {
          type: DataTypes.STRING
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        avatar: {
          type: DataTypes.TEXT,
          allowNull:true
        }
      });
    } catch (error) {
      console.log(error)
    }
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('Usuario');
     
  }
};
