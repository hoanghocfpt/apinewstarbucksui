var mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    price: {
        type: Number
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
});

module.exports = mongoose.model('products', Product);