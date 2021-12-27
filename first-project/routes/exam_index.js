var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post("/main", (req, res) => {
  const data = req.body.data;
  // 문자열
  // res.send("문자열이 응답됩니다.!!")

  // JSON
  // res.json({
  //   message: "main sucess!!",
  // });

  // html 코드가 들어간 template 파일 등을 작성
  res.render('index', { title: 'Express' });
});

module.exports = router;
