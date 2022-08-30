'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     try {
    await queryInterface.createTable('Producto', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING
      },
     precio: {
        allowNull: false,
        type: DataTypes.DECIMAL
      },
      descripcionLarga: {
        allowNull: false,
        type: DataTypes.STRING
      },
      descripcionCorta: {
        allowNull: false,
        type: DataTypes.STRING
      },
      descuento : {
        allowNull: false,
        type: DataTypes.STRING
      },
      cantidad : {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      urlImagen: {
        type: Sequelize.INTEGER,
        allowNull:false,
        type: DataTypes.STRING
      }
      });
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('Producto');  
  }
};

