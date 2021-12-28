var express = require('express');
var router = express.Router();

const loginCheck = require("../module/loginCheck.js")
const upload = require("../module/imageUpload");

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success",
  });
});

router.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload sucess !",
  })
});

module.exports = router;
