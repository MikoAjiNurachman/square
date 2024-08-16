'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Product A',
        qty: 2,
        price: 100.0,
        created: new Date(),
        updated: new Date(),
        deleted: false
      },
      {
        name: 'Product B',
        qty: 3,
        price: 150.0,
        created: new Date(),
        updated: new Date(),
        deleted: false
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
