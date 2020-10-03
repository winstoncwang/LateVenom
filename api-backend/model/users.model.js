const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    minlength: 1,
    trim: true,
    unique: true,
    required: [true, "Username is required"],
    validate, //required a validator,
  },
  password: { type: String, required: [true, "A valid password is required"] },
  firstname: { type: String, minlength: 1, required: true },
  lastname: { type: String, minlength: 1, required: true },
  email: {
    type: String,
    trim: true,
    required: [true, "A valid email is required"],
    enum: ["@"],
    validate,
  },
  address: { type: String, trim: true, required: true },
  phonenumber: { type: Number, trime: true, required: true, min: 10, validate },
  accountcreated: { type: Date, default: Date.now() },
  accountupdated: { type: Date, default: Date.now() },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
