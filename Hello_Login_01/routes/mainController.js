var crypto = require('crypto') // 비밀번호를 암호화 시킬도구

module.exports = (app,userVO)=>{
	
	app.get('/',(req,res)=>{
	
		let session = req.session
		if(session.isLogin == true){
			res.render('index');
		} else {
			res.render('login')
		}
	})
	
	app.get('/register',(req,res)=>{
		res.render('member_join')
	})
	
}