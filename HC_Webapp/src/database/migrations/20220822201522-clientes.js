'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('clientes', { 
        idCliente: {
          type: Sequelize.INTEGER
        },
        nombre : {
          type: Sequelize.INTEGER
        },
        apellido : {
          type: Sequelize.INTEGER
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
    
      await queryInterface.dropTable('clientes');
     
  }
};
