const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  productName: {
    type: String,
  },
});

const Product = model("Product", ProductSchema);
module.exports = Product;
