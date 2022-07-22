const express = require('express');

const router = express.Router()

const AddProducts = require('./get-product')

router.post('/products', (req, res) => {
  const productsData = JSON.parse(req.body)
  console.log(productsData)
  AddProducts(productsData)
})

module.exports = router