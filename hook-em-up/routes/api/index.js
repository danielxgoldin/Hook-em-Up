const router = require("express").Router();
const productRoutes = require("./product-routes");

// add prefix of `/product` to routes created in `product-routes.js`
router.use("/product", productRoutes);

module.exports = router;
