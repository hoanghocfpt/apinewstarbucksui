var Category = require('../models/Category.js');

exports.getCategories = async (req, res) => {
    try {
        const data = await Category.find({});
        return data;
    } catch (error) {
        console.error('Error:', error);
        if (res) {
            res.status(500).json({ message: 'Internal server error' });
        }
        throw error;
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Category.findById({ _id: id });
        return data;
    } catch (error) {
        console.error('Error:', error);
        if (res) {
            res.status(500).json({ message: 'Internal server error' });
        }
        throw error;
    }
}

exports.getCategoryBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;
        const data = await Category.findOne({ slug })
        return data;
    }
    catch (error) {
        console.error('Error:', error);
        if (res) {
            res.status(500).json({ message: 'Internal server error' });
        }
        throw error;
    }
}
