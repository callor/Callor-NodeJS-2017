module.exports = (app,bVO)=>{
	
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	app.post('/insert',(req,res)=>{
		
		let vo = new bVO(req.body);
		vo.save((err,data)=>{
				res.send({msg:'OK'})
		})
	})
	
	
	app.get('/list',(req,res)=>{
		bVO.find()
			.exec((err,data)=>{
				res.render('list_body',{list:data})
			})
	})
	
}