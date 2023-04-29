const orders = require('../models/order');

const getorderID = async (req, res) => {
  const {id}=req.query
  const order = await orders.findById(id)
  res.status(200).json({ products, nbHits: products.length });
};


const getAllorder = async (req, res) => {
  const order = await orders.find({})
  res.status(200).json({ products, nbHits: products.length });
};



const CeateOreder = async (req, res) => {
  const {id,quantities}=req.query
  const order = await orders.create({ id: id,quantities:quantities})
  res.status(200).json({ order:order });
};

module.exports = {
  getAllorder,
  getorderID,
  CeateOreder,
};
