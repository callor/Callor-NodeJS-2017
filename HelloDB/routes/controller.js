//
/* 함수모듈, 클래스모듈
 * 
 */
module.exports = function(app,vo){
	
	
	app.get("/insert",function(req,res){
		
		res.status(200); 
//		res.write("안녕하세요");
//		res.end('반갑습니다');
//		
//		res.send('insert 명령을 받았습니다');
		
		res.render('insert');
		
	})
	
	app.get('/list',function(req,res){
		vo.find(function(err,data){
			res.json(data);
		})
	})
	
	
	app.post("/insert",function(req,res){
	
		var strName = req.body.txtname ;
		var strAddr = req.body.txtaddr ;
		var strTel = req.body.txttel;
		
		var v = new vo(req.body);
		v.save(function(){
			res.send("저장이 완료 되었습니다");
		})
		
		
//		res.status(200);
//		res.write("name:"+strName)
//		res.write("addr:" + strAddr)
//		res.end("strTel" + strTel);
		
		
	})
	

	
//	app.put()
//	app.update()
//	app.delete()
	
	
}