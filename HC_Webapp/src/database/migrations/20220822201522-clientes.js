'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('clients', { 
        idCliente: {
          allowNull: false,
          autoIncrement:true,
          primaryKey:true,
          type: Sequelize.INTEGER
        },
        nombre : {
          type: Sequelize.STRING
        },
        apellido : {
          type: Sequelize.STRING
        },
        idUsuario : {
          type: Sequelize.INTEGER
        },
        cuit : {
          type: Sequelize.INTEGER
        },
        dni : {
          type: Sequelize.INTEGER
        }

        });
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('clients');
     
  }
};
