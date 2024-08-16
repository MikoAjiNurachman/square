module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Products', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        qty: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        created: Sequelize.DATE,
        modified: Sequelize.DATE,
        deleted: Sequelize.BOOLEAN,
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Products');
    },
  };
  