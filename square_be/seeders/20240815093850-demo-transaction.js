'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions', [
      {
       customerId: 1, 
       productId: 1,
       quantity: 5,
       created: new Date(),
       modified: new Date(),
       deleted: false,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
