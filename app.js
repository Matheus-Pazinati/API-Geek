const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  app.use(cors());
  next();
});
app.use(morgan('dev'))


const port = process.env.PORT || 3000;

const productsRoute = require('./modules/save-product')
app.use(productsRoute)

app.listen(port)