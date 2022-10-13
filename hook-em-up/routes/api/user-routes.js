const router = require("express").Router();

const {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/user
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/product/:id
router
  .route("/:id")
  /*  .get(getUserById) */
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
