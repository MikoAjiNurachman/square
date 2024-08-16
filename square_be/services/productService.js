const Product = require('../entities/Product');

exports.createProduct = async ({ name, qty, price }) => {

  const product = await Product.create({
    name,
    qty,
    price,
    created: new Date(),
    modified: new Date(),
    deleted: false,
  });
  return product;
};

exports.getAllProducts = async () => {
  return await Product.findAll({ where: { deleted: false } });
};

exports.getProductById = async (id) => {
  return await Product.findOne({ where: { id, deleted: false } });
};

exports.updateProduct = async (id, { name, qty, price }) => {
  const product = await Product.findOne({ where: { id, deleted: false } });
  if (!product) return null;

  await Product.update({ name, qty, price, modified: new Date() }, {where: {id, deleted: false}});
  return product;
};

exports.deleteProduct = async (id) => {
  const product = await Product.findOne({ where: { id, deleted: false } });
  if (!product) return false;

  await Product.update({ deleted: new Date(), modified: new Date(), deleted: true }, {where: {id}});
  return true;
};
