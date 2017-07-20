module.exports = (app,addrVO)=>{
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	app.get('/list',(req,res)=>{
		addrVO.find((err,data)=>{
			res.render('list',{list:data})
		})
	})
	
	app.post('/insert',(req,res)=>{
		let vo = new addrVO(req.body)
		vo.save((err,data)=>{
			res.json({msg:'OK'});
		})
	})
	app.post('/update',(req,res)=>{
		let id = req.body.id
		addrVO.update({_id:id},{$set:req.body},(err,data)=>{
			res.json({msg:'OK'})
		})
	})
	
	app.post('/delete',(req,res)=>{
		let id = req.body.id;
		addrVO.remove({_id:id},(err,data)=>{
			res.json({msg:'OK'})
		})
	})
	
	app.post('/getitem',(req,res)=>{
		let id = req.body.id;
		addrVO.findOne({_id:id},(err,data)=>{
			res.json(data);
		})
	})
	
}