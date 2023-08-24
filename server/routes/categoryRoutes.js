// routes/customerRoutes.js

const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.post('/create',categoryController.createCategory);
router.get('/getall', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategoryById);
router.delete('/:id', categoryController.deleteCategoryById);

module.exports = router;
