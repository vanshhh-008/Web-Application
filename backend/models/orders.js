const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    name: { type: String, required: true },
  email: { type: String, required: true },
  tableNumber: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  comments: { type: String },
  cartItems: [
    {
    
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model("orders",ordersSchema);





