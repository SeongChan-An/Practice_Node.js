var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const userInfo = {
  an : {
    password: "0510",
  },
  park : {
    password: "1005",
  },
};

router.get("/", (req, res) => {
  const session = req.session;
  res.render("index_login", {
    username: session.username,
  })
})

// Login
// 브라우저 내에서 바로 확인하는 테스트를 위해 get 사용
router.get("/login/:username/:password", (req, res) => {
  const session = req.session;
  const { username, password } = req.params;
  if (!userInfo[username]) {
    res.status(400).json({
      message: "user not found",
    });
  }

  if (userInfo[username]["password"] === password) {
    session.username = username;
    res.status(200).json({
      message: "user login~~!",
    });
  } else {
    res.status(400).json({
      message: "user pw incorrect",
    })
  }
});

router.get("/logout", (req, res) => {
  const session = req.session;
  if(session.username) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/users");
      }
    });
  } else {
    res.redirect("/users")
  }
})

module.exports = router;
