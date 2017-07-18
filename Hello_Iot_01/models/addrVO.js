var mongoose = require('mongoose');
var addrVO = mongoose.Schema({

	strName : String,
	strAddr : String,
	strTel : String,
	intAge : Number
	
})

// addrVO schema에 정의된 구조로 addrs collection(data)을 만들겠다
// 이름을 정할때 단수 => 복수 저장
// 		db.addr.find()(x) => db.addrs.find()
// 		show collections : 이름목록을 확인 할수 있다
module.exports = mongoose.model('addr',addrVO)