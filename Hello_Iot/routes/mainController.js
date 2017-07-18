// nodejs 의 미들웨어(controller)를 만든 과정
module.exports = (app,tVO)=>{
	
	app.get('/',(req,res)=>{
		// /views/index.ejs파일을 랜더링
		//					넘겨줄 변수 title, myname 선언
		res.render('index',{title:'안녕하세요',myname:'홍길동'})
	})
	
	// 온도데이터를 보내오면 DB에 저장
	app.get('/temp/:strName/:strDate/:strTime/:intTemp',(req,res)=>{
		
		//새로운 빈 레코드를 생성
		var vo = new tVO(res.params);
		
		// 각항목을 추가
//		vo.strName = req.params.strName;
//		vo.strDate = req.params.strDate;
//		vo.strTime = req.params.strTime;
//		vo.intTemp = req.params.intTemp;
		
		vo.save((err,data)=>{
			res.send('저장 성공')
		})
	})
	
	app.get('/list',(req,res)=>{
		
		// 데이터 읽기
		var data = tVO.find();
		console.log(data);
		tVO.find((err,data)=>{
			res.json(data)
		})
	})
	
	app.get('/add',(req,res)=>{
		res.render('index',{title:'덧셈하기',myname:'숫자 2개를 포함해야 합니다.'})
	})
	
	app.get('/add/:num1',(req,res)=>{
		res.render('index',{title:'덧셈하기',myname:'덧셈을 위해 숫자 2개가 필요합니다'})
	})
	
	app.get('/add/:num1/:num2',(req,res)=>{
		var num1 = 1*req.params.num1 // req.params 에 담겨 넘어온 값은 모두 문자
		var num2 = 1*req.params.num2 // 덧셈을 하려면 숫자로 바꾸어야 합니다.
		var sum = num1 + num2
		res.render('index',{title:'덧셈하기',myname:sum})
	})
	
}