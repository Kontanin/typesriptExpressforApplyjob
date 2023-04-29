const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'product id must be provided'],
  },
  quantities: {
    type: String,
    required: [true, 'product quantities must be provided'],
  },

})

module.exports = mongoose.model('Product', productSchema)
