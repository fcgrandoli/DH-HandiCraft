'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Sale Detail', [{
        saleId:"1",
        productId: "7" ,
        amount: "2"
      }], {});
    } catch (error) {
      console.log(error)
    }
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Sale Detail', null, {});
     
  }
};
