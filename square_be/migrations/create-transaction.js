module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Transactions', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        customerId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Customers',
            key: 'id',
          },
        },
        productId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
            key: 'id',
          },
        },
        quantity: Sequelize.INTEGER,
        created: Sequelize.DATE,
        modified: Sequelize.DATE,
        deleted: Sequelize.BOOLEAN,
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Transactions');
    },
  };
  