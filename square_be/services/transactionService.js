const Customer = require('../entities/Customer');
const Product = require('../entities/Product');
const Transaction = require('../entities/Transaction');

const sequelize = require('../config/database');

async function createTransaction(customerId, productId, quantity) {
  const transaction = await sequelize.transaction();
  
  try {
    const product = await Product.findByPk(productId, { transaction });
    if (product.qty < quantity) throw new Error('Not enough stock');
    
    const customer = await Customer.findByPk(customerId, { transaction });

    if (!customer) throw new Error('Customer not Found');

    const result = await sequelize.query(
      'INSERT INTO "Transactions" ("customerId", "productId", "quantity", "created", "deleted") VALUES ($1, $2, $3, $4, $5) RETURNING "id"',
      {
        bind: [customerId, productId, quantity, new Date(), false],
        type: sequelize.QueryTypes.INSERT,
        transaction,
      }
    );
    
    const transactionId = result[0][0].id;

    await product.update({ qty: product.qty - quantity }, { transaction });

    await transaction.commit();

    return transactionId;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

module.exports = { createTransaction };
