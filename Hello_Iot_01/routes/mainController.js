module.exports = (app,addrVO)=>{
	app.get('/',(req,res)=>{

		let vo = new addrVO() // 빈 객체 생성
		res.render('index',{item:vo,action:'/insert'}) ; // views/index.ejs 파일을 랜더링해서 보내라

//		addrVO.find((err,data)=>{
//			res.json(data);
//		})
//		res.send('안녕하세요');
		
//		res.write('우리나라만세\n');
//		res.write('대한민국만세')
//		res.end('')
	
	})
	
	app.post('/insert',(req,res)=>{

		vo = new addrVO(req.body) // 넘겨받은 input 값으로 새로운 객체 생성
		vo.save((err,data)=>{ // 새로운데이터 저장
//			res.json(data) // 저장된 데이터 확인
			res.redirect('/list') // localhost:3000/list 한것과 같이 행동
		})
		
//		var strName = req.body.strName
//		var strAddr = req.body.strAddr
//		var strTel = req.body.strTel
//		var intAge = req.body.intAge
//		
//		res.write(strName)
//		res.write(strAddr)
//		res.write(strTel)
//		res.end(intAge)
		
	})
	
	app.get('/list',(req,res)=>{
		addrVO.find((err,data)=>{ // 결과값이 list 형태
//			res.json(data)
			// list.ejs를 렌더링 할때 data를 list에 담아서 전달해준다.
			res.render('list',{list:data})
		})
	})
	
	app.get('/delete/:id',(req,res)=>{
		var id = req.params.id
		addrVO.remove({_id:id},(err,data)=>{
			res.redirect('/list')
		})
	})
	
	app.get('/update/:id',(req,res)=>{
		let id = req.params.id
		addrVO.findOne({_id:id},(err,data)=>{ // 결과값이 1 row만
			res.render('index',{item:data,action:'/update'})
		})			 
	})
	
	app.post('/update',(req,res)=>{
		let id = req.body.id
		addrVO.update({_id:id},{$set:req.body},(err,data)=>{
			res.redirect('/list')
		})
	})
}
