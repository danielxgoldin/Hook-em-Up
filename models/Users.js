const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Users = model("User", UsersSchema);

module.exports = Users;
