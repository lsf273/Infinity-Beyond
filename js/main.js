
 $(document).ready(function() {
	 
	 //HomePage
	 $('.contactBtn', ).hover(
		 function()
		 {
			$('.contact-btn').animate({
			width: "95",  
	        }, 500);
		 },
		 function()
		 {
			$('.contact-btn').animate({
			width: "90", 
			}, 500);
	  });
	  $('.planet').hover(
		 function()
		 {
			$('.planet-underline').animate({
				width: "220",  
	        }, 500);
		 },
		 function()
		 {
			$('.planet-underline').animate({
			width: "200", 
			}, 500);
	  	});
	  $('.shuttle').hover(
		 function()
		 {
			$('.shuttle-underline').animate({
			width: "220",  
	        }, 500);
		 },
		 function()
		 {
			$('.shuttle-underline').animate({
			width: "200", 
			}, 500);
	  });
	  $('.greyMatter').hover(
		 function()
		 {
			$('.cloud-underline').animate({
			width: "220",  
	        }, 500);
		 },
		 function()
		 {
			$('.cloud-underline').animate({
			width: 200, 
			}, 500);
	  	});
	  $('.nebulas').ho-er(function() {
			$('.nebula-underline').animate({
				width: "220",  
	        }, 500);
		}, function() {
			$('.nebula-underline').animate({
				width: "200", 
			}, 500);
	  	});
	  $('.galaxies').hover(
		 function()
		 {
			$('.galaxy-underline').animate({
			width: "220",  
	        }, 500);
		 },
		 function()
		 {
			$('.galaxy-underline').animate({
			width: "200", 
			}, 500);
	  });
	  
	  //Contact Page
	  //$(".contactForm").hide();
	  $(".contact-btn").click(function () {
		console.log("Clicked"); 
	  	var $form-container = $(.form-container'),
	  		right = Number($form-container.position().left) === 1259 ? 0 : -380;	  		

		 $form-container.animate({
		 	right: right
		 });
	  });
 });