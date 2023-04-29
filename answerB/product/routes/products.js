const express = require('express')
const router = express.Router()

const {
  getAllProducts,
  getID,
} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/:id').get(getID)

module.exports = router
