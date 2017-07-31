var crypto = require('crypto') // 비밀번호를 암호화 시킬도구
var secret = require('./secret.js')

module.exports = (app,userVO)=>{
	
	app.get('/',(req,res)=>{
	
		let session = req.session
		if(session.isLogin == true){
			res.render('index');
		} else {
			res.render('login',{msg:''})
		}
	})
	
	app.post('/login',(req,res)=>{
		let strEmail = req.body.strEmail
		let strPassword = req.body.strPassword
		
		let encrypto = crypto
			.createHmac('sha1',secret.mySecret)
			.update(strPassword) //원본
			.digest('base64') // 불필요한 문자 삭제
		
		userVO.findOne({strEmail:strEmail,strPassword:encrypto})
			.exec((err,data)=>{
				// 사용자 인증 완료되면 data 값이 true
				if(data) {
					let session = req.session
					session.strEmail = data.strEmail
					session.isAdmin = data.isAdmin
					session.isLogin = true ; // 로그인 되었는가
					res.redirect('/')
				} else {
					res.render('login',{msg:'로그인 실패'})
					
				}
			})
	})
	
	
	app.get('/register',(req,res)=>{
		res.render('member_join')
	})
	
	
	app.post('/register',(req,res)=>{
		userVO.find()
			.count() // 전체 저장된 레코드가 몇개인가
			.exec((err,count)=>{
				
				// 최초에 등록되는 사용자는 Admin(관리자)
				// count < 1 이면 아무도 등록자가 없으므로
				if(count < 1) {
					req.body.isAdmin = true ;
				} else {
					req.body.isAdmin = false ;
				}
				
				let strPassword = req.body.strPassword;
				
				// 암호화
				let encrypto = crypto
						.createHmac('sha1',secret.mySecret)
						.update(strPassword) //원본
						.digest('base64') // 불필요한 문자 삭제
				
				req.body.strPassword = encrypto;
				
				var vo = new userVO(req.body)
				vo.save((err,data)=>{
					res.json(data)
				})
			})
		
	})
}















