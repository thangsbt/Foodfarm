// $(document).ready(function() {
// 	function activetab(obj) {
		
// 	}
// 	  $('.table-2-center2').click(function(){
//         activeTab(this);
//         return false;
//     });
// 	  activeTab($('.table-2-center2:first-child'));
// });

 $(document).ready(function(){
	
 	$('ul.tabs li').click(function(){
 		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.table-2-center2').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

 });
