import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  image: String,
});

const Products =
  mongoose.models.Products ||
  mongoose.model("Products", productSchema);

export default Products;