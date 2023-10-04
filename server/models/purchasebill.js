const mongoose = require("mongoose");

const purchasebillSchema = new mongoose.Schema({
  VendorName: {
    type: String,
    required: true,
  },

  billNo: {
    type: String,
    required: true,
    unique:true
  },
  orderNo: {
    type: String,
    required: true,
    unique:true
  },
  invoiceDate: {
    type: Date,
    required: true,
  },
  method:{
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    // required: true,
  },
  items: [
    {
      product: {
        type: String,
        required: true,
      },
      id: {
        type: String,
      },
      description: {
        type: String,
        required: true,
      },
      qty: Number,
      rate: Number,
      discount: Number,
      total: Number,
    },
  ],
  subTotal: Number,
  discount: Number,
  total: Number,
  terms: String,
  remarks: String,
});

const PurchaseBill = mongoose.model("PurchaseBill", purchasebillSchema);

module.exports = PurchaseBill;
