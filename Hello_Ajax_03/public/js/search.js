$(document).ready(function(){

	$('#searchValue').keypress(function(event){
		
		// Enter를 입력하면
		if(event.keyCode == 13) {
			let sItem = $(':radio[name="searchItem"]:checked').val();
//			alert(sItem);
			if( sItem == 'book') {
				$.post('/naver/book',
					{ searchValue : $(this).val() },
					function(result) {
						$('#resultBody').html(result);
					}
				)
			}
			
		}
	})
})
