module.exports = (app,gradeVO)=>{
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	app.post('/insert',(req,res)=>{
		let vo = new gradeVO(req.body);
		vo.save((err,data)=>{
			res.json({msg:'OK'})
		})
	})
	
	app.get('/list',(req,res)=>{
		gradeVO.find((err,data)=>{
			res.render('listView',{list:data})
		})
	})
	
	app.post('/getitem',(req,res)=>{
		let id = req.body.id;
		gradeVO.findById(id,(err,data)=>{
			res.json(data)
		})
	})
	
	// FIND BY ID AND UPDATE router.put("/users/:id", function(req, res) {
	//	 User.findByIdAndUpdate(req.params.id, req.body, 
	//	 User.findOneAndUpdate({ 
	 
	 app.post('/update',(req,res)=>{
		let id = req.body.id
		gradeVO.findByIdAndUpdate(id,req.body,(err,data)=>{
			res.json({msg:'OK'})
		})
	})
	
}