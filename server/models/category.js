// models/categoryModel.js

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  CategoryName :{
    type: String,
    required: true,
  },
  Code: {
    type: String,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    required: true,
  },
  CreatedOnDate: {
    type: Date,
    default: Date.now,

  },
  
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
