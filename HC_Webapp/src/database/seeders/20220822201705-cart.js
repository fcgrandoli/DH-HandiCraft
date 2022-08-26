
const { indexCart }= require('../../model/cart.model.js');
module.exports = {
  async up (queryInterface, Sequelize) {
    
    try   {
      await queryInterface.bulkInsert('shopping cart', [{
        id:"1",
        idCliente:"1" ,
        idProducto: "7",
        cantidad: "2"
      }], {});
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('shopping cart', null, {});
     
  }
};
