$(document).ready(function start(e) {
	var $likeBtn = $('#button');
	var counter = 0;

	$likeBtn.on('click', addLike);
	
	function addLike(e) {
		var button = $('#button');
		counter++;
		if(counter===1) {
			$('#button').html('Like');
		}
		else if (counter > 1) {
			$('#button').html('Likes '+counter);
		}
	}
});