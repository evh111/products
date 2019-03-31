const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const product = require('./routes/product.route');
const PORT = 4000;

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27081/products', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB database connection established successfully!');
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

app.listen(PORT, function() {
    console.log('Server is running on Port! ' + PORT);
});