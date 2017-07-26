module.exports = (app)=>{
	app.get('/',(req,res)=>{
		let session = req.session
		if(session.isLogin == true) {
			res.render('index',{message:'Login OK'})
		} else {
			res.render('index',{message:'Not Login'})
		}
	})
	
	app.get('/login',(req,res)=>{
		let session = req.session;
		session.isLogin = true;
		res.redirect('/')
	})

}