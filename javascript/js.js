var sizeChosen = parseInt(prompt("Choose a number between 1 and 1000"));


$(document).ready(function(){
	if (sizeChosen <1001 && sizeChosen > 1 ) {
		grids(sizeChosen);
	}
	
	$('.grid').hover(function() {
			$(this).fadeOut("fast").fadeIn("fast")
			$(this).css('background-color', '#F2636F');
		});

// Reset the page and restart the process
	$('#reset').click(function() {
		location.reload()
	});

});


function grids(n) {
		for (var i = 0; i < sizeChosen; i++) {
		$('#etchBoard').append('<div class="grid"></div>');
	}
}
