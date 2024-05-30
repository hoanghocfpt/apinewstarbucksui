const categoryService = require('../service/categoryService');
exports.getAllCategories = async (req, res) => {
    try {
        const data = await categoryService.getCategories(req, res);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const data = await categoryService.getCategoryById(req, res);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getCategoryBySlug = async (req, res) => {
    try {
        const data = await categoryService.getCategoryBySlug(req, res);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

