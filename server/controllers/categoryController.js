// controllers/categoryController.js

const Category = require('../models/category');

exports.createCategory= async (req, res) => {
    // try {
    //     const category = new Category(req.body);
    //     await category.save();
    //     res.status(201).json({ message: 'Category created successfully', category });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
    try {
        const { CategoryName } = req.body;
        // Check if the category already exists
        const existingCategory = await Category.findOne({ CategoryName });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists in the database' });
        }
        // If category does not exist, create a new category record
        const category = new Category(req.body);
        await category.save();
        res.status(201).json({ message: 'Category created successfully', category });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.updateCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json({ message: 'Category updated successfully', category });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCategoryById = async (req, res) => {
    
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully', category });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
