module.exports = function(app) {
	
	// call back 함수방식
	app.get("/name",function(req,res){
		res.send("내이름은 node js 입니다");
	})
	
	app.get("/home",function(req,res){
		res.send("내 주소는 localhost 입니다");
	})
	
	app.get("/name/aa",function(req,res){
		res.send("내이름은 aa 입니다");
	})
	
	app.get("/sum/:num1/:num2",function(req,res){
		var sum = parseInt(req.params.num1);
		sum += parseInt(req.params.num2);
		
		res.send("결과:" + sum);
	
	})
}