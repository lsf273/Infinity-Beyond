
 $(document).ready(function() {
	 
	 var $contactButton = $('.contact-btn');
	 var $planet = $('.planet');
	 var $shuttle = $('.shuttle');
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
				width: '220',  
	        }, 500);
		 }, function() {
			$planetUnderline.animate({
				width: '200', 
			}, 500);
	  	});
	  $shuttle.hover(function() {
			$shuttleUnderline.animate({
				width: '220',  
	        }, 500);
		 }, function() {
			$shuttleUnderline.animate({
				width: '200', 
			}, 500);
	  });
	  $greyMatter.hover(function() {
			$cloudUnderline.animate({
				width: '220',  
	        }, 500);
		 }, function() {
			$cloudUnderline.animate({
				width: 200, 
			}, 500);
	  	});
	  $nebulas.hover(function() {
			$nebulaUnderline.animate({
				width: '220',  
	        }, 500);
		}, function() {
			$nebulaUnderline.animate({
				width: '200', 
			}, 500);
	  	});
	  $galaxies.hover(function() {
			$galaxyUnderline.animate({
				width: '220',  
	        }, 500);
		 },function() {
			$galaxyUnderline.animate({
				width: '200', 
			}, 500);
	  });
	  
	  //Contact Page
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