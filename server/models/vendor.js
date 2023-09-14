// models/vendorModel.js

const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  VendorName :{
    type: String,
    required: true,
  },
  Code: {
    type: String,
    required: true,
  },
  CompanyName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Pincode: {
    type: Number,
    required: true,
  },
  CreatedOnDate: {
    type: Date,
    default: Date.now,
  },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
