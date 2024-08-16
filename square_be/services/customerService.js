const Transaction  = require('../entities/Transaction');
const Customer = require('../entities/Customer');
const sequelize = require('../config/database')

exports.createCustomer = async ({ name, email, address }) => {
    
  const customer = await Customer.create({
    name,
    email,
    address,
    created: new Date(),
    modified: new Date(),
    deleted: false,
  });
  return customer;
};

exports.getAllCustomers = async () => {
  return await Customer.findAll({ where: { deleted: false } });
};

exports.getAllCustomersTransaction = async () => {
    const query = `
       select 
            c.id, c.name as customerName,
            max(p.name) as favProductName,
            sum(t.quantity * p.price) as totalTransaction 
        from "Transactions" t 
        left join "Customers" c 
            on c.id = t."customerId" 
        left join "Products" p 
            on p.id = t."productId" 
        where c.deleted = false
        group by c.id order by c.name 
    `
    const [results, metadata] = await sequelize.query(query);
    return results;
  };

exports.getCustomerById = async (id) => {
  return await Customer.findOne({ where: { id, deleted: false } });
};

exports.updateCustomer = async (id, { name, email, address }) => {
  const customer = await Customer.findOne({ where: { id, deleted: false } });
  if (!customer) return null;

  await customer.update({ name, email, address, modified: new Date() });
  return customer;
};

exports.deleteCustomer = async (id) => {
  const customer = await Customer.findOne({ where: { id, deleted: false } });
  if (!customer) return false;

  await customer.update({ modified: new Date(), deleted: true });
  await Transaction.update({ modified: new Date(), deleted: true}, {where: {customerId: id}})
  return true;
};

exports.getTransactionByCustomer = async (customerId) => {
    const query = `
        select 
            p.name as productname,
            t.quantity as quantityorder,
            sum(t.quantity * p.price) as totalTransaction 
        from "Transactions" t 
        left join "Customers" c 
            on c.id = t."customerId" 
        left join "Products" p 
            on p.id = t."productId" 
        where c.id = $1 
        group by t.id, p.name order by t.created 
    `
    const [results, metadata] = await sequelize.query(query, { bind: [customerId] });
    return results;
  };
