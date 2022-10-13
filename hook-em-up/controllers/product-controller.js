const { Product } = require("../models");

const productController = {
  getAllProduct(req, res) {
    Product.find({})
      .then((dbProductData) => res.json(dbProductData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  createProduct({ body }, res) {
    Product.create(body)
      .then((dbProductData) => res.json(dbProductData))
      .catch((err) => res.status(400).json(err));
  },

  updateProduct({ params, body }, res) {
    Product.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbProductData) => {
        if (!dbProductData) {
          res.status(404).json({ message: "No product found with this id!" });
          return;
        }
        res.json(dbProductData);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteProduct({ params }, res) {
    Product.findOneAndDelete({ _id: params.id })
      .then((dbProductData) => {
        if (!dbProductData) {
          res.status(404).json({ message: "No product found with this id" });
          return;
        }
        res.json(dbProductData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = productController;
