$(document).ready(function(){
	
	$('section').addClass('w3-margin');
	$('label').addClass('w3-text-blue');
	$('input').addClass('w3-input w3-border w3-hover-light-gray')
	
	$('#saveBtn').click(function(){
		let strEmail = $('#strEmail').val();
		let strPassword = $('#strPassword').val();
		let strPassword1 = $('#strPassword1').val();
		
		let regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-0a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/ ;
		
		
		if(strEmail.length == 0) {
			alert('Email을 입력해 주세요');
			$('#strEmail').focus();
			return false;
		}
		
		// regExp 패턴과 비교해서 email 형식이 다르면
		if(!strEmail.match(regExp)) {
			alert('Email형식이 잘못 되었습니다');
			$('#strEmail').focus();
			return false;
		}
		
		if(strPassword.lenght < 8) {
			alert('비밀번호는 8자리 이상이어야 합니다')
			$('#strPassword').focus();
			return false;
		}
		if(strPassword != strPassword1 ) {
			alert('비밀번호와 비밀번호 확인이 일치 하지 않습니다')
			$('#strPassword').val('')
			$('#strPassword1').val('')
			$('#strPassword').focus()
			return
		}
	})
})













