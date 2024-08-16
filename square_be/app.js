const express = require('express');
const app = express();
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use(cors());
app.use('/api', transactionRoutes);
app.use('/api', customerRoutes)
app.use('/api', productRoutes)

module.exports = app;
