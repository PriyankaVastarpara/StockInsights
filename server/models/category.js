// models/categoryModel.js

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  CategoryName :{
    type: String,
    required: true,
  },
  Code: {
    type: String,
  },
  Description: {
    type: String,
    required: true,
  },
  CreatedOnDate: {
    type: Date,
    required: true,
  },
  
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
