var sizeChosen = parseInt(prompt("Choose a number between 1 and 100"));


$(document).ready(function(){
	grids(sizeChosen);
});


function grids(n) {

	var boxSize = (960-2*n)/n;

	for (var i = 0; i < sizeChosen; i++) {
		$('#etchBoard').append('<div class="grid"></div>').width(boxSize).height(boxSize);		
	}

}

$('.grid').hover(function() {
			$(this).fadeOut("fast").fadeIn("fast")
			$(this).css('background-color', 'blue');
		});

// Reset the page and restart the process
	$('#reset').click(function() {
		location.reload()
	});