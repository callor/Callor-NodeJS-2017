var crypto = require('crypto') // 비밀번호를 암호화 하기 위한 미들웨어

module.exports = (app,userDTO)=>{
	app.get('/',(req,res)=>{
		let session = req.session;
		if(session.isLogin) {
			// session.isAdmin 이 true 이면 userType = 관리자, 아니면 = '일반..'
			let userType = session.isAdmin ? '관리자' : '일반사용자';
			res.render('index',{userId:session.userId,userType:userType})	
		} else {
			res.render('login')
		}
	})
	
	app.post('/login',(req,res)=>{
	
		let userId = req.body.userId
		let password = req.body.password
		let session = req.session
		
    	// 암호화 시키고
    	let encrypto = crypto
    					.createHmac('sha1','1234')
    					.update(password)
    					.digest('base64')
		
    	userDTO.findOne({userId:userId, password:encrypto})
    		.exec((err,data)=>{
    			if(data) {
        			session.userId = data.userId;
        			session.isLogin = true;
        			session.isAdmin = data.isAdmin;
        			res.redirect('/')
    			} else {
    				res.render('login')
    			}
    	})
	})
	
	
	app.get('/register',(req,res)=>{
		res.render('member_join')
	})
	
	app.post('/register',(req,res)=>{
		userDTO.find() // 사용자 정보 검색
		    .count() // 검색된 정보의 레코드가 몇개인가
		    .exec((err,data)=>{
		    	if( !data ) {
		    		req.body.isAdmin = true;
		    	} else {
		    		req.body.isAdmin = false;
		    	}
		    	
		    	// 원래 비밀번호를 추출
		    	let password = req.body.password;
		    	
		    	// 암호화 시키고
		    	let encrypto = crypto
		    					.createHmac('sha1','1234')
		    					.update(password)
		    					.digest('base64')
		    					
		    	// 암호화 시킨 비번을 다시 할당
		    	req.body.password = encrypto				
		    	let vo = userDTO(req.body)
		    	vo.save((err,data)=>{
		    		res.json(data);
		    	})
		    })
	})
}













