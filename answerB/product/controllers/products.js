const Product = require('../models/product');

const getID = async (req, res) => {
  const {id}=req.query
  const products = await Product.find({ID: id })
  res.status(200).json({ products, nbHits: products.length });
};


const getAllProducts = async (req, res) => {
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getID,
};
