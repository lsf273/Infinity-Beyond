
 $(document).ready(function() {
	 var $contactButton = $('.contact-btn');

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
	  $('.planet').hover(
		 function()
		 {
			$('.planet-underline').animate({
				width: '220',  
	        }, 500);
		 },
		 function()
		 {
			$('.planet-underline').animate({
			width: '200', 
			}, 500);
	  	});
	  $('.shuttle').hover(
		 function()
		 {
			$('.shuttle-underline').animate({
			width: '220',  
	        }, 500);
		 },
		 function()
		 {
			$('.shuttle-underline').animate({
			width: '200', 
			}, 500);
	  });
	  $('.greyMatter').hover(
		 function()
		 {
			$('.cloud-underline').animate({
			width: '220',  
	        }, 500);
		 },
		 function()
		 {
			$('.cloud-underline').animate({
			width: 200, 
			}, 500);
	  	});
	  $('.nebulas').hover(function() {
			$('.nebula-underline').animate({
				width: '220',  
	        }, 500);
		}, function() {
			$('.nebula-underline').animate({
				width: '200', 
			}, 500);
	  	});
	  $('.galaxies').hover(
		 function()
		 {
			$('.galaxy-underline').animate({
			width: '220',  
	        }, 500);
		 },
		 function()
		 {
			$('.galaxy-underline').animate({
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