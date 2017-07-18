var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * mongoDB, mongoose 사용준비 설정
 */
var mongoose = require('mongoose'); // mongoose import
var dbConn = mongoose.connection; // DB 연결 준비

// DB 연결이 잘 되었을때 실행할 일 등록
// event 등록
dbConn.on('open',function(){
	console.log('MongDB open OK');
})

// DB 사용중 문제가 발생하면 메시지 출력하도록 등록
// event 등록
dbConn.on('error',function(){
	console.error;
})
mongoose.connect('mongodb://localhost/iot'); // 연결 설정

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


var addrModel = require('./models/addrVO.js');

// 사용자 정의형 모듈을 선언
var controller = require('./routes/controller.js')(app,addrModel);


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
