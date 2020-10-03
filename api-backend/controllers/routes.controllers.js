const express = require("express");
const router = express.Router();

/* sanitize using mongo-sanitize 
and apply using a middleware 
function cleanBody(req, res, next) {
  req.body = sanitize(req.body);
  next();
}
*/

const Users = require("../model/users.model");

router.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = router;
