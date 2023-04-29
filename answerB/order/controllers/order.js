const orders = require('../models/order');

const getorderID = async (req, res) => {
  const {id}=req.query
  const order = await orders.findById(id)
  res.status(200).json({ products, nbHits: products.length });
};


const getAllorder = async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({ products, nbHits: products.length });
};



const CeateOreder = async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllorder,
  getorderID,
  CeateOreder,
};
