var Product = require('../models/Product.js');

exports.getProducts = async (req, res) => {
    try {
        const data = await Product.find({});
        return data;
    } catch (error) {
        console.error('Error:', error);
        if (res) {
            res.status(500).json({ message: 'Internal server error' });
        }
        throw error;
    }
};

exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findById({ _id: id });
        return data;
    } catch (error) {
        console.error('Error:', error);
        if (res) {
            res.status(500).json({ message: 'Internal server error' });
        }
        throw error;
    }
}

exports.getProductBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;
        const data = await Product.findOne({ slug });
        return data;
    } catch (error) {
        console.error('Error:', error);
        if (res) {
            res.status(500).json({ message: 'Internal server error' });
        }
        throw error;
    }
}

