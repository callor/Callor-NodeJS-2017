var mongoose = require('mongoose');

var schema = new mongoose.Schema({

	txtname : String,
	txtaddr : String,
	txttel : String

	// String : 문자열형
	// Number : 숫자형

});

module.exports = mongoose.model('addr',schema );