const productService = require('../service/productService');
exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getProducts(req, res);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req, res);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductBySlug = async (req, res) => {
    try {
        const product = await productService.getProductBySlug(req, res);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};