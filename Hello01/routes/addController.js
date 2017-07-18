module.exports = function(app){
	app.get('/add',function(req,res){
		res.status(200).send("반드시 숫자 2개를 질의 해야 합니다");
	})
	app.get('/add/:num1',function(req,res){
		res.status(200).send("숫자 2개로 질의 하세요");
	})
	app.get('/add/:num1/:num2',function(req,res){
		var sum = parseInt(req.params.num1);
		sum += parseInt(req.params.num2);
		res.status(200).send("계산결과는" + sum + "입니다");
	})	
}