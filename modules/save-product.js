const express = require('express');

const router = express.Router()

const AddProducts = require('./get-product')

router.post('/products', (req, res) => {
  let productData = req.body
  AddProducts(productData)
})

module.exports = router