const router = require("express").Router();

const {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/product-controller");

// Set up GET all and POST at /api/product
router.route("/").get(getAllProduct).post(createProduct);

// Set up GET one, PUT, and DELETE at /api/product/:id
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
