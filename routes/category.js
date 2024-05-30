var express = require('express');
var router = express.Router();
var { getAllCategories, getCategoryBySlug, getCategoryById } = require('../controller/categoryController');


router.get('/', getAllCategories);
router.get('/slug/:slug', getCategoryBySlug);
router.get('/id/:id', getCategoryById);
module.exports = router;