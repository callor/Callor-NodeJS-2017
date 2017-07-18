var mongoose = require('mongoose')

// 온도 데이터를 저장하기 위한 DB 구조를 생성
var tempVO = mongoose.Schema({
	
	strName : String, // 센서이름저장
    strDate : String, // 저장될 날짜	
	strTime : String, // 저장될 시간
	intTemp : Number // 온도

})

//               temp 라는 이름의 collection(table)을
//				 tempVO 구조로 생성하라
//				단, 실제 저장되는 collection은 temps
module.exports = mongoose.model('temp',tempVO)