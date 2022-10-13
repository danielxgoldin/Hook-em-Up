const { Users } = require("../models/index");

const userController = {
  getAllUsers(req, res) {
    Users.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  createUser({ body }, res) {
    Users.create(body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },

  updateUser({ params, body }, res) {
    Users.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteUser({ params }, res) {
    Users.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
