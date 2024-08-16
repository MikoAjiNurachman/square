const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Customer extends Model {}

Customer.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  created: DataTypes.DATE,
  modified: DataTypes.DATE,
  deleted: DataTypes.BOOLEAN,
}, {
  sequelize,
  modelName: 'Customer',
  createdAt: 'created',
  updatedAt: 'modified',
});

module.exports = Customer;
