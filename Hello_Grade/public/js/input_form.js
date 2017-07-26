$(document).ready(function(){
	
	var listView = function(){
		$.get('list',function(result){
			$('#view-list').html(result);
		})
	}
	
	
	$('label').addClass('w3-text-blue');
	$('input').addClass('w3-input w3-border w3-hover-yellow')
	
	$('label').addClass('w3-col l1 m1 s1')
	$('input').addClass('w3-col l3 m3 s3')
	
	$('#strName').addClass('w3-col m7 l7 s7')
	
	$('section').addClass('w3-margin w3-padding-16')
	
	// 입력박스에서 포커스가 벗어나면 발생하는 event
	$('input').blur(function(){
		
		// 국어, 영어, 수학점수 입력 박스이면
		if( $(this).attr('id') == 'intKor'
			|| $(this).attr('id') == 'intEng'
			|| $(this).attr('id') == 'intMath') {

			var intKor = 1*$('#intKor').val();
			var intEng = 1*$('#intEng').val();
			var intMath = 1*$('#intMath').val();
			
			var sum = intKor + intEng + intMath;
			$('#intTotal').val(sum)
			if(sum != 0) {
				$('#intAvg').val(parseInt(sum / 3));
			}
			
		}
	})
	
	$('#listBtn').click(function(){
		listView();
	})
	
	$('#saveBtn').click(function(){
		if($('#strNum').val() == '') {
			alert('학번은 반드시 입력해야 합니다')
			$('#strNum').focus();
			return false ;
		}
		if($('#strName').val() == '') {
			alert('이름은은 반드시 입력해야 합니다')
			$('#strName').focus();
			return false ;
		}

		$.post('/insert',$('form').serialize(),function(result){
			listView();
		})
	})
	
	
	
})




		
		
		
		
		
		
		
		
		