

$(document).ready(function(){
	// smooth scroll
	// $('#page-top').click(function(){
	// 	$('html, body').animate({
	// 		scrollTop: 0
	// 	}, 2000);
	// 	return false;
	// });

	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});
	

	// hamburger menu
	$('.hamburger').on('click', function(){
		$('.nav-container').toggleClass('overlay');
		$('.nav-container ul').toggleClass('show');
	})

	// feature panels
	$('.feature-tab').on('click', function(){
		var tab_id = $(this).attr('data-tab');
		$('.feature-tab').removeClass('active');
		$('.feature-expand').removeClass('active');
		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

});
