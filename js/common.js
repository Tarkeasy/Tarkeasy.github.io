$(function () {
	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top //indent from the block
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
	});
	$(".btn__up").click(function(){
		$("body").animate({'scrollTop': 0},1000);
		$("html").animate({'scrollTop': 0},1000);
	});
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$('.btn__up').addClass('active');
		}
		else{
			$('.btn__up').removeClass('active');
		}
	});
	$(".header__button").on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('header__button--active');
		$(this).toggleClass("button__bg");
		$('.header__navbar').toggleClass('vision__navigation');
	});
		$('.services__brending').circleProgress({
			value: 0.80,
			size: 120,
			reverse: true,
			startAngle: -Math.PI/2,
			emptyFill: "#268589",
			thickness: 5,
			fill: {
				color: "#19bd9a"
			}
		});
		$('.services__design').circleProgress({
			value: 0.75,
			size: 120,
			reverse: true,
			startAngle: -Math.PI/2,
			emptyFill: "#268589",
			thickness: 5,
			fill: {
				color: "#19bd9a"
			}
		});
		$('.services__ui').circleProgress({
			value: 0.60,
			size: 120,
			reverse: true,
			startAngle: -Math.PI/2,
			emptyFill: "#268589",
			thickness: 5,
			fill: {
				color: "#19bd9a"
			}
		});
		$('.map__arrow').click(function(e){
			e.preventDefault();
			$('.map__bg').hide(1000);
		})
		new WOW({
		offset:50,
		mobile: false
		}).init();
});




