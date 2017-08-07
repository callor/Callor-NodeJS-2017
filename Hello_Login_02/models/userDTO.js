var mongoose = require('mongoose');

// Promise 외부 라이브러리와 충돌현상 방지
mongoose.Promise = global.Promise;

var userDTO = mongoose.Schema({

	userId : String,
	password : String,
	isAdmin : {type:Boolean,default:false}
	
})

module.exports = mongoose.model('user',userDTO);

