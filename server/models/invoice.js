const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  CustomerName: {
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
      // id: {
      //   type: String,
      // },
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

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
