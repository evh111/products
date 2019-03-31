const Product = require('../models/product.model');

// Retrieve all 'products'
exports.product_all = function (req, res) {
    Product.find(function(err, products) {
        if(err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
};

// Retrieve a single 'product'
exports.product_details = function (req, res) {
    let id = req.params.id;
    Product.findById(id, function(err, product) {
        res.json(product);
    });
};

// Create a new 'product'
exports.product_create = function (req, res) {
    let product = new Product(req.body);
    product.save()
        .then(todo => {
            res.status(200).json({'Product': 'Product added successfully!'});
        })
        .catch(err => {
            res.status(400).send('Adding new product failed.');
        });
};

// Update a 'product'
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body},
        function (err, product) {
            if (err) return next(err);
            res.send('Product updated.');
        });
};

// Delete a 'product'
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next (err);
        res.send('Deleted successfully!');
    })
};