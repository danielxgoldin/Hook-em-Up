const { Schema, model } = require("mongoose");
const { Users } = require(".");

const UsersSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Users = model("Users", UsersSchema);
module.exports = Users;
