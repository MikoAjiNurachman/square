const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {}

Product.init({
  name: DataTypes.STRING,
  qty: DataTypes.INTEGER,
  price: DataTypes.FLOAT,
  created: DataTypes.DATE,
  modified: DataTypes.DATE,
  deleted: DataTypes.BOOLEAN,
}, {
  sequelize,
  modelName: 'Product',
  createdAt: 'created',
  updatedAt: 'modified',
});

module.exports = Product;
