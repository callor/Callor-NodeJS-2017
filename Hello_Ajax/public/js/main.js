$(document).ready(function(){
	$('input').addClass('w3-input w3-border w3-hover-yellow');
	$('section').addClass('w3-padding-16')
	
	var listView = function(){
		// Ajax를 이용해서 서버에 list를 요청
		$.get('/list',function(result){
			$('#viewList').html(result);
		})
	}
	listView(); // listView() 함수를 실행

	$('#saveBtn').click(function(){
		
		// 이름 없이 저장하면
		if($('#strName').val() == ''){
			alert('이름을 입력하세요')
			$('#strName').focus();
			return false;
		}
		
		// input id에 값이 없으면 새로작성
		if($('#id').val() == '') {
			// ajax로 저장
			$.post('/insert',$('form').serialize(),function(result){
				if(result.msg == 'OK') {
					alert('저장이 완료 되었습니다')
				} else {
					alert('저장에 실패 했습니다')
				}
				listView();
			})
		// 있으면 수정이 된다
		} else {
			$.post('/update',$('form').serialize(),function(result){
				if(result.msg == 'OK') {
					alert('수정이 완료 되었습니다')
				} else {
					alert('수정에 실패 했습니다')
				}
				listView();
			})
		}
	})
	
	$('#newBtn').click(function(){
		$('input').val('')
	})
	
	$('#deleteBtn').click(function() {
		var thisId = $('#id').val();
		
		if(thisId == '') {
			alert('삭제할 항목을 선택하세요')
			return false;
		}
		
		if (confirm('정말 삭제하시겠습니까')) {
			$.post('/delete',{id:thisId},function(result){
				listView();
			})
		}
	})
	
})
