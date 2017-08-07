var request = require('request');
var naver_secret = require('./naver_secret.js');


module.exports = (app)=>{
	app.get('/',(req,res)=>{
		res.render('index')
	})

	app.post('/naver/book',(req,res)=>{
	
		let searchBook = req.body.searchValue;
		let api_url = 'https://openapi.naver.com/v1/search/book.json';
		api_url += '?query=' + encodeURI(searchBook);
	
		console.log(api_url)
		
		request.get(
				{
					url : api_url,
					headers : {
						'X-Naver-Client-Id' : naver_secret.client_id,
						'X-Naver-Client-Secret' : naver_secret.client_secret
					}
				},
				(err,response,result)=>{
					// 문자열을 json object로 변경
					let result_json = JSON.parse(result).items
					res.render('bookList',{list:result_json})
				}
		)
	})

}