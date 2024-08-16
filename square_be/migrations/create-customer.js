module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Customers', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        address: Sequelize.STRING,
        created: Sequelize.DATE,
        modified: Sequelize.DATE,
        deleted: Sequelize.BOOLEAN,
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Customers');
    },
  };
  