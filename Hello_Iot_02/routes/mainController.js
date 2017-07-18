module.exports = (app,addrVO)=>{
	app.get('/',(req,res)=>{
		addrVO.find((err,data)=>{
			res.render('index',{list:data});
		})
	})
	
	app.get('/insert',(req,res)=>{
		let vo = new addrVO()
		res.render('insert',{item:vo,action:'/insert'})
	})
	
	app.post('/insert',(req,res)=>{
		let vo = new addrVO(req.body);
		vo.save((err,data)=>{
			res.redirect('/')
		})
	})
	
	app.get('/update/:id',(req,res)=>{
		let id = req.params.id
	
		addrVO.findOne({_id:id},(err,data)=>{
			res.render('insert',{item:data,action:'/update'})
		})
	})
	
}