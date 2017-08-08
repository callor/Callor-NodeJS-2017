var request = require('request');
var naver_secret = require('./naver_secret.js');

var options = (api_url)=>{
	return {
		url : api_url,
		headers : {
			'X-Naver-Client-Id' : naver_secret.client_id,
			'X-Naver-Client-Secret' : naver_secret.client_secret
		}
	}
};

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
				options(api_url),
				(err,response,result)=>{
					// 문자열을 json object로 변경
					let result_json = JSON.parse(result).items
					res.render('bookList',{list:result_json})
				}
		)
	})
	
	app.post('/naver/movie',(req,res)=>{
		let searchMovie = req.body.searchValue;
		let api_url = 'https://openapi.naver.com/v1/search/movie.json';
		api_url += '?query=' + encodeURI(searchMovie);
		api_url += '&display=20';
		
		request.get(
				options(api_url),
				(err,response,result)=>{
					// 문자열을 json object로 변경
					let result_json = JSON.parse(result).items
					res.render('bookList',{list:result_json})
				}
		)
	})
	
	app.post('/naver/news',(req,res)=>{
		let searchNews = req.body.searchValue;
		api_url = 'https://openapi.naver.com/v1/search/news.json';
		api_url += '?query='+encodeURI(searchNews);
		api_url += '&display=20';

		request.get(
				options(api_url),
				(err,response,result)=>{
					console.log(result)
					let result_json = JSON.parse(result).items
					res.render('newslist',{list:result_json})
				}
		)
	})
	
	app.post('/naver/blog',(req,res)=>{
		let searchBlog = req.body.searchValue;
		let api_url = 'https://openapi.naver.com/v1/search/blog.json';
		api_url += '?query=' + encodeURI(searchBlog);
		
		api_url += '&display=20';
		
		request.get(
			options(api_url),
			(err,response,result)=>{
				console.log(result)
				let result_json = JSON.parse(result).items;
				res.render('bloglist',{list:result_json})
				
			}
		)
	})
}












