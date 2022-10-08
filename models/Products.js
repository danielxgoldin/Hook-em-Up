const { Schema, model } = require("mongoose");
const { Products } = require(".");

const ProductsSchema = new Schema({
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

const Products = model("Products", ProductsSchema);
module.exports = Products;
