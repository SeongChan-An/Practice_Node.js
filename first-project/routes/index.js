var express = require('express');
const { route } = require('./exam_index');
var router = express.Router();

let arr = [];

// GET method
router.get("/read", (req,res) => {
  res.status(200).json({
    message: "read success",
  });
});

// POST method
router.post("/create", (req, res) => {
  console.log(req.body);
})

module.exports = router;
