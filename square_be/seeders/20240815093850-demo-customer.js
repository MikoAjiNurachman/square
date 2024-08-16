'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Customer A',
        email: 'customera@example.com',
        address: 'North Wage',
        created: new Date(),
        updated: new Date(),
        deleted: false
      },
      {
        name: 'Customer B',
        email: 'customerb@example.com',
        address: 'South Cage',
        created: new Date(),
        updated: new Date(),
        deleted: false
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
