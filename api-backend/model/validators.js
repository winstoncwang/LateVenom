const mongoose = require("mongoose");
const validate = require("mongoose-validator");

module.exports = {
  /* Create an account */
  signUpEmail: [
    validate({
      validator: "trim",
    }),
    validate({
      validator: "normalizeEmail",
    }),
    validate({
      validator: "isEmail",
      message: "Please enter a valid email address",
    }),
  ],
  signUpPhoneNumber: [
    validate({
      validator: "isMobilePhone",
      arguments:['any','false'],
      message: "Must be a valid phone number",
    }),
  ],
};
