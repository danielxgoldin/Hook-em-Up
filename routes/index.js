const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./api/user-routes");
/* const htmlRoutes = require("./html/html-routes"); */

router.use("/api", apiRoutes);
router.use("/users", userRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
