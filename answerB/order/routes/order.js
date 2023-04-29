const express = require('express')
const router = express.Router()

const {
  getAllorder,
  getorderID,
  CeateOreder
} = require('../controllers/order')

router.route('/').get(getAllorder).post(CeateOreder)
router.route('/:id').get(getorderID)

module.exports = router
