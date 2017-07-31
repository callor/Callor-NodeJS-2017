var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session')

var mongoose = require('mongoose')
var dbConn = mongoose.connection;
dbConn.once('open',()=>{console.log('MongoDB OPEN')})
dbConn.on('error',console.error);

var dbconfig = require('./routes/dbconfig.js')
mongoose.connect(dbconfig.dburi,{useMongoClient:true});

var config = require('./routes/secret.js')



var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//session 변수의 초기화
app.use(session({
	
	key : config.myKey,
	secret : config.mySecret,
	cookie : {
		maxAge : 1000  * 30 // 30초
	},
	saveUninitialized : true,
	resave : true
	
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/users', users);

var userVO = require('./models/userVO.js')
var mainController = require('./routes/mainController.js')(app,userVO)

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
