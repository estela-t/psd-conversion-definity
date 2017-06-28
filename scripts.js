

$(document).ready(function(){
	// smooth scroll
	$('#page-top').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 2000);
		return false;
	});

	// hamburger menu
	$('.hamburger').on('click', function(){
		$('.nav-container').toggleClass('overlay');
		$('.nav-container ul').toggleClass('show');
	})
});
