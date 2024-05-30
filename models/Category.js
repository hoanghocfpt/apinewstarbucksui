var mongoose = require('mongoose');

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('categories', Category);