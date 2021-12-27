var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// template Test
const templateRouter = require("./routes/template");
// session test
const session = require("express-session");

var app = express();

app.use(session({
  secret: "first project",  // session을 암호화기 위해 필요한 값, 임의로 지정가능
  resave: false,    // session을 변경하지 않아도 저장할 지 말지를 결정하는 값
  saveUninitialized: true,  // session 이 저장되기 전에 초기화 할 지 말지
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 간단한 middleware 함수 추가
// 어떠한 요청이 들어와도 아래 함수가 실행
// app.use((req, res, next) => {
//   console.log("Middleware!");
//   next();
// })

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/template", templateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
