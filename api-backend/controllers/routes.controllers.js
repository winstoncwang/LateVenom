const express = require("express");
const router = express.Router();
const Users = require("../model/users.model");
var sanitize = require("mongo-sanitize");

cleanBody = (req, res, next) => {
  req.body = sanitize(req.body);
  next();
};

//login
router.post("/login", cleanBody, async (req, res) => {
  try {
    const result = await Users.find({ username: req.body.username });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create account
router.post("/users",cleanBody,async (req, res) => {
  console.log(req.body)
  console.log(typeof req.body.phonenumber)
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(500).json({
        StatusCode: 500,
        Message: "Empty request body, request must be made in JSON format.",
      });
    }
    
    let newUser = new Users(req.body);
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
