const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./Customer');
const Product = require('./Product');

class Transaction extends Model {}

Transaction.init({
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id'
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    },
  },
  quantity: DataTypes.INTEGER,
  created: DataTypes.DATE,
  deleted: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Transaction',
  tableName:'Transactions',
  createdAt: 'created',
  updatedAt: 'modified',
});

Customer.hasMany(Transaction);
Product.hasMany(Transaction);
Transaction.belongsTo(Customer);
Transaction.belongsTo(Product);

module.exports = Transaction;
