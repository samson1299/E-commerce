import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      _id: String,
      title: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  name: String,
  email: String,
  address: String,
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
