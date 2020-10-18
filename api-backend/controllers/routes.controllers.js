const express = require("express");
const router = express.Router();
const Users = require("../model/users.model");
var sanitize = require("mongo-sanitize");
const {repeatedUsername} = require('./middleware')

cleanBody = (req, res, next) => {
  req.body = sanitize(req.body);
  next();
};

router.get('/users/:username',cleanBody,async(req,res)=>{
  console.log(req.params.username)
    try{
      const user = await Users.find({username:req.params.username})
      res.status(200).json(user)
    }catch(err){
      res.status(500).json(err)
    }
})

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
router.post("/users",[cleanBody,repeatedUsername],async (error,req, res) => {
  

  try {
    if (Object.keys(req.body).length === 0) {
      res.status(500).json({
        StatusCode: 500,
        Message: "Empty request body, request must be made in JSON format.",
      });
    }
    if(error){
      res.status(500).json(error)
    }
    
    let newUser = new Users(req.body);
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
