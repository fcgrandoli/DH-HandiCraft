
const { indexCart }= require('../../model/cart.model.js');
module.exports = {
  async up (queryInterface, Sequelize) {
    
    try   {
      await queryInterface.bulkInsert('carrito', [{
        id:"1",
        userID:"1" ,
        productID: "7",
        amount: "2"
      }], {});
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('carrito', null, {});
     
  }
};
