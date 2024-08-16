const customerService = require('../services/customerService');

exports.createCustomer = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const customer = await customerService.createCustomer({ name, email, address });
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await customerService.getCustomerById(id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, address } = req.body;
    const customer = await customerService.updateCustomer(id, { name, email, address });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    
    const deleted = await customerService.deleteCustomer(id);
    if (!deleted) return res.status(404).json({ message: 'Customer not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCustomersTransaction = async (req, res) => {
    try {
      const getAllCustomersTransaction = await customerService.getAllCustomersTransaction();
      res.status(200).json(getAllCustomersTransaction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.getTransactionByCustomer = async (req, res) => {
    try {
      let response = {}
      const {filter} = req.query;
      let listFilter = filter.split(',')
      if (listFilter.length < 1) return res.status(400).json({ message: 'request invalid error' })
      let filterCustId = listFilter[0].split('=')
      if (filterCustId < 2) return res.status(400).json({ message: 'request invalid error' })
      let customerId = parseInt(filterCustId[1]) 
      const customer = await customerService.getCustomerById(customerId);
      if (!customer) return res.status(404).json({ message: 'Customer not found' });
      const getAllCustomersTransaction = await customerService.getTransactionByCustomer(customer.id);
      response.customer = customer
      response.listTransaction = getAllCustomersTransaction
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};