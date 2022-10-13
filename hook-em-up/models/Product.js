const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  productName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: { type: String, enum: ["memorabilia", "textbooks", "clothing"] },
  },
});

const Product = model("Product", ProductSchema);
module.exports = Product;
