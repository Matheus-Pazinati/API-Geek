const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header('Acess-Control-Allow-Headers', 'Content-Type')
    app.use(cors());
    next();
});

const port = process.env.PORT || 3000;

const productsRoute = require('./modules/save-product')
app.use(productsRoute)

app.listen(port)