// 모듈생성  모듈 = 클래스
// 사용자(client, Web Browser)의 입력 기다리는 controller는
// app 을 매개변수로 받아야 한다.
module.exports = function(app,addrVO){
	
	// Read
	app.get('/list',function(req,res){
		addrVO.find(function(err,data){
//			res.json(data);
			res.render('list',{list:data})
		})
	})
	app.get('/update/:id',function(req,res){
	
		// _id값으로 1개의 레코드를 검색
		addrVO.findOne({_id:req.params.id},function(err,item){
//			res.json(item);
			// update_form에 입혀서 client로 되돌린다.
			res.render('update_form',item);
		})
	})
	app.post('/update',function(req,res){
		addrVO.update({_id:req.body.id},{$set:req.body},function(err,data){
			res.redirect('/list')
		})
	})
	
	
	// delete
	app.get('/delete/:id',function(req,res){
		var id = req.params.id ;
		addrVO.remove({_id:id},function(err,data){
			res.redirect('/list')
		})
	})
	
	// CREATE : insert
	// mongoDB를 대상으로 CRUD를 구현..
	app.get('/insert',function(req,res){
		res.render('insert_form');
	})
	
	app.post('/insert',function(req,res){
		// 브라우저에서 보내온 입력값을
		// 다시 브라우저로 보내서 확인 해보는 것
//		res.write('이름: ' + req.body.strName+'\n')
//		res.write('주소: ' + req.body.strAddr+'\n')
//		res.end('나이: ' + req.body.intAge )
		
		var vo = new addrVO(req.body);
		vo.save(function(err,data){
//			res.send('Db Insert OK');
			res.redirect('/list')
		})
	})
}
// controller는 app.js에서 require 해서 사용가능한 상태로 만들준다.
