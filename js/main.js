/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


   $('.project-image-link').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: true,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		var expanded = !toggleButton.hasClass('is-clicked');
		toggleButton.toggleClass('is-clicked');
		toggleButton.attr('aria-expanded', expanded ? 'true' : 'false');
		toggleButton.attr('aria-label', expanded ? 'Close navigation' : 'Open navigation');
		nav.stop(true, true).slideToggle();

	});

	$(document).on('keydown', function(e) {
		if (e.key === 'Escape' && toggleButton.hasClass('is-clicked')) {
			toggleButton.removeClass('is-clicked');
			toggleButton.attr('aria-expanded', 'false');
			toggleButton.attr('aria-label', 'Open navigation');
			nav.stop(true, true).slideUp();
			toggleButton.trigger('focus');
		}
	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button
   	toggleButton.removeClass('is-clicked');
   	toggleButton.attr('aria-expanded', 'false');
   	toggleButton.attr('aria-label', 'Open navigation');
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target),
    	reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    	if (reducedMotion) {
    		window.scrollTo(0, $target.offset().top);
      	window.location.hash = target;
    		return;
    	}

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      		window.location.hash = target;
      	});

  	});  
  

 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);

/*---------------------------------------------------- */
/* Scroll reveal for portfolio project cards
   Uses IntersectionObserver to add `is-revealed` class
*/
(function() {
	'use strict';

	function initReveal() {
		var cards = document.querySelectorAll('#portfolio .project-card');
		if (!cards || cards.length === 0) return;

		if ('IntersectionObserver' in window) {
			var io = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-revealed');
						observer.unobserve(entry.target);
					}
				});
			}, { root: null, rootMargin: '0px', threshold: 0.12 });

			cards.forEach(function(card) { io.observe(card); });
		} else {
			// Fallback for older browsers: reveal all
			cards.forEach(function(card) { card.classList.add('is-revealed'); });
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initReveal);
	} else {
		initReveal();
	}

})();

(function() {
	'use strict';

	function initWorkExperienceToggle() {
		var resume = document.querySelector('#resume');
		var toggle = document.getElementById('work-experience-toggle');
		var extra = document.getElementById('work-experience-extra');
		if (!resume || !toggle || !extra) return;

		toggle.addEventListener('click', function() {
			var expanded = resume.classList.toggle('work-experience-expanded');
			toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
			toggle.setAttribute('aria-label', expanded ? 'Show less experience' : 'Show more experience');
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initWorkExperienceToggle);
	} else {
		initWorkExperienceToggle();
	}
})();