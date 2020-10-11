const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { signUpEmail, signUpPhoneNumber } = require("./validators");

const usersSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    validate: {
      validator: (str) => {
        return /^[a-zA-z0-9_]{3,}$/.test(str);
      },
      message:
        "Username should be longer than 3 letters or numbers including _",
    }, //required a validator,
    required: [true, "Username is required"],
  },
  password: { type: String, required: [true, "A valid password is required"] },
  firstname: { type: String, minlength: 1, required: true },
  lastname: { type: String, minlength: 1, required: true },
  email: {
    type: String,
    trim: true,
    required: [true, "A valid email is required"],
    validate: signUpEmail,
  },
  address: {
    type: String,
    trim: true,
    validate: {
      validator: (str) => {
        return /^[a-zA-Z0-9, ]+$/.test(str);
      },
      message: "Please enter a valid address",
    },
    required: true,
  },
  phonenumber: {
    type: String,
    trim: true,
    required: true,
    min: 10,
    validate: signUpPhoneNumber,
  },
  accountcreated: { type: Date, default: Date.now() },
  accountupdated: { type: Date, default: Date.now() },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
