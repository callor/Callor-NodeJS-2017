var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// mongoDB 플러인 mongoose import
var mongoose =  require('mongoose');
var dbCon = mongoose.connection;

// DB 사용과정에서 쓰일 이벤트 설정
dbCon.once("open",function(){ // open할때 한번
	console.log("MongoDB Open ok");
}) 
dbCon.on('error',function(){ // 사용중에 오류가 발생하는지 계속 감시
	console.err;
})

// mongoDb open 실행
mongoose.connect("mongodb://localhost/iot");

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// 사용자 정의 모듈 model import
var addrVO = require('./models/addrVO');

// 사용자 정의 모듈을 import, controller 
var controller = require('./routes/controller.js')(app,addrVO);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
