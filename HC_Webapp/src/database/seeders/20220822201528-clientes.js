'use strict';
// const { indexUser }= require('../../model/users.model.js');
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('clients', [{
        idCliente: "EduCABJ",
        firstName: 'Eduardo',
        lastName: 'Virgilio',
        idUsuario : "1",
        cuit : "20-20302202-2",
        dni : "20302202"
      }], {});
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('clients', null, {});
     
  }
}; 

//todavia no generarla ya que no existe una data de clientes