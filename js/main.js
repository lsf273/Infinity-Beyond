
 $(document).ready(function() {
	 
	 var $container = $('#page-container');
	 var $contactButton = $('.contact-btn');
	 var $planet = $container.find('.planet');
	 var $shuttle = $container.find('.shuttle');
	 var $greyMatter = $('.greyMatter');
	 var $nebulas = $('.nebulas');
	 var $galaxies = $('.galaxies');
	 var $planetUnderline = $('.planet-underline');
	 var $shuttleUnderline = $('.shuttle-underline');
	 var $cloudUnderline = $('.cloud-underline');
	 var $nebulaUnderline = $('.nebula-underline');
	 var $galaxyUnderline = $('.galaxy-underline');

	 //HomePage
	 $contactButton.hover(function() {
			$(this).animate({
				width: 95,  
	        }, 500);
		 }, function() {
			$(this).animate({
				width: 90, 
			}, 500);
	  });
	  $planet.hover(function() {
			$planetUnderline.animate({
				width: 200,  
	        }, 500);
		 }, function() {
			$planetUnderline.animate({
				width: 200, 
			}, 500);
	  	});
	  $shuttle.hover(function() {
			$shuttleUnderline.animate({
				width: 200,  
	        }, 500);
		 }, function() {
			$shuttleUnderline.animate({
				width: 200, 
			}, 500);
	  });
	  $greyMatter.hover(function() {
			$cloudUnderline.animate({
				width: 200,  
	        }, 500);
		 }, function() {
			$cloudUnderline.animate({
				width: 200, 
			}, 500);
	  	});
	  $nebulas.hover(function() {
			$nebulaUnderline.animate({
				width: 200,  
	        }, 500);
		}, function() {
			$nebulaUnderline.animate({
				width: 200, 
			}, 500);
	  	});
	  $galaxies.hover(function() {
			$galaxyUnderline.animate({
				width: 220,  
	        }, 500);
		 },function() {
			$galaxyUnderline.animate({
				width: 200, 
			}, 500);
	  });
	  
	  /* Planet Fades */
	  $('.sun-fade-btn').click(function () {
		  $('#sun-fade').children().fadeToggle();
	  });
	  $('.mercury-fade-btn').click(function () {
		  $('#mercury-fade').children().fadeToggle();
	  });
	  $('.venus-fade-btn').click(function () {
		  $('#venus-fade').children().fadeToggle();
	  });
	  $('.earth-fade-btn').click(function () {
		  $('#earth-fade').children().fadeToggle();
	  });
	  $('.mars-fade-btn').click(function () {
		  $('#mars-fade').children().fadeToggle();
	  });
	  $('.jupiter-fade-btn').click(function () {
		  $('#jupiter-fade').children().fadeToggle();
	  });
	  $('.saturn-fade-btn').click(function () {
		  $('#saturn-fade').children().fadeToggle();
	  });
	  $('.uranus-fade-btn').click(function () {
		  $('#uranus-fade').children().fadeToggle();
	  });
	  $('.neptune-fade-btn').click(function () {
		  $('#neptune-fade').children().fadeToggle();
	  });
	  
	  /* Galaxy Fades */
	  $('.galaxy-fade-btn').click(function () {
		  $('#galaxy-fade').children().fadeToggle();
	  });
	  $('.spiral-fade-btn').click(function () {
		  $('#spiral-fade').children().fadeToggle();
	  });
	  $('.barred-fade-btn').click(function () {
		  $('#barred-fade').children().fadeToggle();
	  });
	  $('.clusters-fade-btn').click(function () {
		  $('#clusters-fade').children().fadeToggle();
	  });
	  $('.elliptical-fade-btn').click(function () {
		  $('#elliptical-fade').children().fadeToggle();
	  });
	  $('.irregular-fade-btn').click(function () {
		  $('#irregular-fade').children().fadeToggle();
	  });
	  
	  /* Nebula Fade */
	  $('.nebulas-fade-btn').click(function () {
		  $('#nebulas-fade').children().fadeToggle();
	  });
	  $('.crab-fade-btn').click(function () {
		  $('#crab-fade').children().fadeToggle();
	  });
	  $('.eagle-fade-btn').click(function () {
		  $('#eagle-fade').children().fadeToggle();
	  });
	  $('.horse-fade-btn').click(function () {
		  $('#horse-fade').children().fadeToggle();
	  });
	  $('.messier-fade-btn').click(function () {
		  $('#messier-fade').children().fadeToggle();
	  });
	  $('.tarantula-fade-btn').click(function () {
		  $('#tarantula-fade').children().fadeToggle();
	  });
	  
	  /* Shuttles Fade */
	  $('.shuttles-fade-btn').click(function () {
		  $('#shuttles-fade').children().fadeToggle();
	  });
	  $('.mars-express-fade-btn').click(function () {
		  $('#mars-express-fade').children().fadeToggle();
	  });
	  $('.opportunity-fade-btn').click(function () {
		  $('#opportunity-fade').children().fadeToggle();
	  });
	  $('.galileo-fade-btn').click(function () {
		  $('#galileo-fade').children().fadeToggle();
	  });
	  $('.near-fade-btn').click(function () {
		  $('#near-fade').children().fadeToggle();
	  });
	  $('.viking-fade-btn').click(function () {
		  $('#viking-fade').children().fadeToggle();
	  });
	  $('.horizons-fade-btn').click(function () {
		  $('#horizons-fade').children().fadeToggle();
	  });
	  $('.voyager-fade-btn').click(function () {
		  $('#voyager-fade').children().fadeToggle();
	  });
	  
	  /* Grey-Matter Fade */
	  $('.grey-fade-btn').click(function () {
		  $('#grey-fade').children().fadeToggle();
	  });
	  $('.blackhole-fade-btn').click(function () {
		  $('#blackhole-fade').children().fadeToggle();
	  });
	  $('.star-fade-btn').click(function () {
		  $('#star-fade').children().fadeToggle();
	  });
	  $('.light-fade-btn').click(function () {
		  $('#light-fade').children().fadeToggle();
	  });
	  
	  // Page jumps...
	  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
	  e.preventDefault();
	  var target = this.hash;
		  $target = $(target);
	  $('html, body').stop().animate({
		  'scrollTop': $target.offset().top
	  }, 500, 'swing', function () {
		  window.location.hash = target;
	  });
	  });
	  
	  //$('.contactForm').hide();
	  $('.contact-btn').click(function () {
	  	var $formContainer = $('.form-container'),
	  		// right = Number($formContainer.position().left) === 1165 ? 0 : -380;	 
	  		right = $formContainer.css('right') === '-380px' ? 0 : -380;

		 $formContainer.animate({
		 	right: right
		 });
	  });
	  
 });