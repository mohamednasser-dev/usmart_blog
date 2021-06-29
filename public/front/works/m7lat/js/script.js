 $(document).ready(function (){ 
	"use strict";

	// On Scrool Animations
	AOS.init({
		disable: 'mobile'
	});


	// Open menu on tablet/mobile
	$('.menu-btn').on('click', function(){
		$(this).toggleClass('opened');
		$('.main-nav').toggleClass('opened');   
	});

	// Slider initialization
	if ($.isFunction($.fn.slick)) {
		$('.carousel').slick({
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1200, 
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 544,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}]
		});

		$('#reviews-slider').slick({
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1200, 
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 768, 
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}]
		});
	}

	// Main menu links scroll
	$('.main-nav').on('click', 'a', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.getAttribute('href')).offset().top-95
		}, 500);
		$('.menu-btn, .main-nav').removeClass('opened');
	});

	// Scroll link
	$('.scroll-indicator').on('click', 'a', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.description').offset().top-95
		}, 500);
	});

	$('.main-header .header-inner').on('click', 'a', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.getAttribute('href')).offset().top-95
		}, 500);
	});

	$('.main-header .header-inner').on('click', 'a', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.getAttribute('href')).offset().top-95
		}, 500);
	});


	$('.scroll-to-top').on('click', 'a', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.getAttribute('href')).offset().top
		}, 500);
	});


	// Scrool Navigation Menu
	$(window).scroll(function () { 
	    if ($(window).scrollTop() > 400) {
	        $('.navigation').addClass('fixed');
	        $('.navigatoin')
	    }
	    if ($(window).scrollTop() < 1) {
	        $('.navigation').removeClass('fixed');
	    }

	    if ($(window).scrollTop() > 100) {
	        $('.navigation').addClass('top');
	    }
	    if ($(window).scrollTop() < 1) {
	        $('.navigation').removeClass('top');
	    }

	    if ($(window).scrollTop() > 750) {
	        $('.scroll-to-top .scroll-container').addClass('active');
	    }

	    // Scrool To Top 
	    if ($(window).scrollTop() < 750) {
	    	$('.scroll-to-top .scroll-container').removeClass('active');
	    }
    });

	// Contact form validation
    $('.contact-form').on('submit', function(event){

    	// Validate on submit
    	var valid = true,
    		firstRun = true,
    		emailCheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i ;;
    	$('.contact-form .required').each(function(){
    		if ($(this).val().length == 0) {
    			valid = false;
    			$(this).addClass('has-error');
    		} else {
    			$(this).removeClass('has-error');
    		}

    		// Validate email
	    	if ($(this).is('[name="email"]') && $(this).val().length > 0) {
	    		if (emailCheck.test($(this).val()) == false) {
	    			$(this).addClass('has-error');
	    			$('.error-message.invalid-email').fadeIn(300);
	    		} else {
	    			$(this).removeClass('has-error');
	    			$('.error-message.invalid-email').fadeOut(300);
	    		}
	    	}
    	});

    	if (!valid) {
			event.preventDefault();
			$('.error-message.required-field').fadeIn(300);
		}

		if (firstRun) {
			firstRun = false;

		    $('.contact-form .required').on('keyup', function(){
		    	// Validate on keypress
		    	var valid = true;
		    	if ($(this).val().length == 0)
		    		$(this).addClass('has-error');
		    	else
		    		$(this).removeClass('has-error');

		    	$('.contact-form .required').each(function(){
		    		if ($(this).val().length == 0)
		    			valid = false;
		    	});

		    	if (!valid)
		    		$('.error-message.required-field').fadeIn(300);
		    	else 
		    		$('.error-message.required-field').fadeOut(300);

		    	// Validate email
		    	if ($(this).is('[name="email"]')) {
		    		if (emailCheck.test($(this).val()) == false) {
		    			$(this).addClass('has-error');
		    			$('.error-message.invalid-email').fadeIn(300);
		    		} else {
		    			$(this).removeClass('has-error');
		    			$('.error-message.invalid-email').fadeOut(300);
		    		}
		    	}
		    });
		}
    });

    /* Configurator 
    ----------------------------------------------*/
    // Start settings pallete
	$('.settings-icon').on('click', function(){
		$('.settings-pallete').toggleClass('open');
		$(this).toggleClass('open');
	});

	// Colors
	$('.settings-pallete .colors').on('click', 'li', function(){
		$('.color-style').attr('href', 'assets/css/colors/' + $(this).attr('class') + '.css');
	});

	// Display header video
	$('.header-video input').on('change', function(){
		if ($(this).is(':checked')) {
			$('.video').addClass('opened');
		} else {
			$('.video').removeClass('opened');
		}
	});

	//Close settings by clicking outside
	$(document).on('click', function (e) {
	    var container = $(".settings-icon, .settings-pallete");

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        $(".settings-icon, .settings-pallete").removeClass('open');
	    }
	});
	/* End Configurator 
    ----------------------------------------------*/

});

$(window).on('load', function(){
	"use strict";

	// Equal height
	$(window).on('load scroll', function(){
		var offset = $('.reviews').offset().top, 
			windowHeight = $(window).height();

		if ( offset - windowHeight <= $(document).scrollTop()) {
			
			var ww = $(window).width();
		 	if (ww > 750)
		 		setTimeout(function(){
					equalheight('.reviews .single-review');
				}, 1600);
		};
	});

 	// Handling video size
 	videoSize();

 	// Safari video size hack
 	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
 		$('.main-header .video').css({
 			'width': '100%',
 			'height': '100%'
 		});
 	}
});

$(window).on('resize', function(){
	"use strict";

	var ww = $(window).width();
 	if (ww > 750)
 		equalheight('.reviews .single-review');

 	// Handling video size
 	videoSize();

 	// Safari video size hack
 	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
 		$('.main-header .video').css({
 			'width': '100%',
 			'height': '100%'
 		});
 	}
});

var equalheight = function(container) {
	"use strict";

	var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), $el, topPosition = 0;
	$(container).each(function() {

		$el = $(this);
		$($el).height('auto');
		var topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0;
			// empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}

function videoSize(){
	"use strict";

	var headerWidth = $('.main-header').width(),
		headerHeight = $('.main-header').height();

	if ( headerWidth / headerHeight >= 1920 / 1080 )
		$('.main-header .video').removeClass('over-height');
	else 
		$('.main-header .video').addClass('over-height');
}