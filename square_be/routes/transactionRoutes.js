const express = require('express');
const router = express.Router();
const { createTransaction } = require('../services/transactionService');
const customerController = require('../controllers/customerController');

router.post('/transactions', async (req, res) => {
  const { customerId, productId, quantity } = req.body;

  try {
    await createTransaction(customerId, productId, quantity);
    res.status(201).send('Transaction created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get('/transactions', customerController.getTransactionByCustomer);


module.exports = router;
