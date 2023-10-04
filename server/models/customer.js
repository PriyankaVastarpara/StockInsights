// models/customerModel.js

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  CustomerName :{
    type: String,
    required: true,
  },
  Code: {
    type: String,
    required: true,
    unique:true
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

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
