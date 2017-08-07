var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var bookVO = mongoose.Schema({

	strTitle : String,
	strComp : String,
	strGenre : String,
	strYear : String,
	intPrice : Number
	
})
module.exports = mongoose.model('book',bookVO);
