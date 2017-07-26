var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// login 할 사용자 정보
var userVO = mongoose.Schema({

	strEmail : String,
	strPassword : String,
	isAdmin : false // 일반사용자인지, 관리인지를 구분한 key
	
})

module.exports = mongoose.model('user',userVO)
