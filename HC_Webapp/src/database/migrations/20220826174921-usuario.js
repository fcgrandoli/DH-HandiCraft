'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('Usuario',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        nombre: {
          type: Sequelize.STRING
        },
        apellido: {
          type: Sequelize.TEXT
        },
        nombreUsuario: {
          type: Sequelize.STRING
        },
        contraseña: {
          type: Sequelize.STRING
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        avatar: {
          type: Sequelize.TEXT,
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
