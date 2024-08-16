const productService = require('../services/productService');

exports.createProduct = async (req, res) => {
  try {
    const { name, qty, price } = req.body;
    const product = await productService.createProduct({ name, qty, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) return res.status(404).json({ message: 'product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, qty, price } = req.body;
    const product = await productService.updateProduct(id, { name, qty, price });
    if (!product) return res.status(404).json({ message: 'product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await productService.deleteProduct(id);
    if (!deleted) return res.status(404).json({ message: 'product not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};