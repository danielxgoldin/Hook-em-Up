const { Schema, model } = require("mongoose");
const { Users } = require(".");

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

module.exports = Users;
