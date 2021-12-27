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
  // const data = req.body.data;
  const { data } = req.body;
  arr.push(data);
  // console.log(req.body);
  res.status(200).json({
    message: "success push",
    result: arr,
  });
});

// PUT method
// update/0 - 0번째의 값을 확인할 수 있음
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  })
});

// DELETE method
router.delete("/delete/:id" , (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  })
});

module.exports = router;
