 $(document).ready(function(){
	
 	$('ol.breadcrumb li').click(function(){
 		var tab_id = $(this).attr('data-tab');
		$('ol.breadcrumb li').removeClass('current');
		$('.table-2-center2').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

 });
