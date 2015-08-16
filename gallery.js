$(document).ready(function() {
	var mark = 0
	$('#logo').click(function() {
		if((mark + 1) < 7) {
			/*$('#screen').fadeOut(function() {*/
				$('#screen').removeClass('back' + mark)
			/*});*/
			$('#screen').fadeIn("slow", function() {
				$('#screen').addClass('back' + (mark + 1))
			});
			mark++
		}
		else {
			/*window.location.href = "http://www.flickr.com/photos/133017532@N05/";
			$('#screen').fadeOut(function() {*/
				$('#screen').removeClass('back' + mark)
			/*});*/
			mark = 0
			$('#screen').fadeIn("slow", function() {
				$('#screen').addClass('back' + mark)
			});
		}
	});
});