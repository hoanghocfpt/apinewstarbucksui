var express = require('express');
var router = express.Router();
var { getAllProducts,getProductById,getProductBySlug } = require('../controller/productController');

router.get('/', getAllProducts);
router.get('/slug/:slug', getProductBySlug);
router.get('/id/:id', getProductById);

module.exports = router;