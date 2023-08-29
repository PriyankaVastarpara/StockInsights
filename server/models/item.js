// models/itemModel.js

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  ItemName :{
    type: String,
    required: true,
  },
  ItemCode: {
    type: String,
    required:true,
  },
  Category: {
    type: String,
    required: true,
  },
  ItemType: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  VendorName: {
    type: String,
    required: true,
  },
  StockUnit: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  UnitPrice: {
    type: Number,
    required: true,
  },
  ReorderPoint: {
    type: Number,
    required: true,
  },
  ExpiryDate: {
    type: Date,
    required: true,
  },
  PurchasePrice: {
    type: Number,
    required: true,
  },
  MRP: {
    type: Number,
    required: true,
  },
  MinimumPrice: {
    type: Number,
    required: true,
  },
  SellingPrice: {
    type: Number,
    required: true,
  },
  Discount: {
    type: Number,
  },
  TotalAmount: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
