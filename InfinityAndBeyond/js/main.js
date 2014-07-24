
 $(document).ready(function() {
	 
	 //HomePage
	 $('.contactBtn').hover(
		 function()
		 {
			$('.contactBtn').animate({
			width: "95",  
	        }, 500);
		 },
		 function()
		 {
			$('.contactBtn').animate({
			width: "90", 
			}, 500);
	  });
	  $('.planet').hover(
		 function()
		 {
			$('.planetUnderline').animate({
				width: "220",  
	        }, 500);
		 },
		 function()
		 {
			$('.planetUnderline').animate({
			width: "200", 
			}, 500);
	  	});
	  $('.shuttle').hover(
		 function()
		 {
			$('.shuttleUnderline').animate({
			width: "220",  
	        }, 500);
		 },
		 function()
		 {
			$('.shuttleUnderline').animate({
			width: "200", 
			}, 500);
	  });
	  $('.greyMatter').hover(
		 function()
		 {
			$('.cloudUnderline').animate({
			width: "220",  
	        }, 500);
		 },
		 function()
		 {
			$('.cloudUnderline').animate({
			width: 200, 
			}, 500);
	  	});
	  $('.nebulas').hover(function() {
			$('.nebulaUnderline').animate({
				width: "220",  
	        }, 500);
		}, function() {
			$('.nebulaUnderline').animate({
				width: "200", 
			}, 500);
	  	});
	  $('.galaxies').hover(
		 function()
		 {
			$('.galaxyUnderline').animate({
			width: "220",  
	        }, 500);
		 },
		 function()
		 {
			$('.galaxyUnderline').animate({
			width: "200", 
			}, 500);
	  });
	  
	  //Contact Page
	  //$(".contactForm").hide();
	  $(".contactBtn").click(function () {
		console.log("Clicked"); 
	  	var $formContainer = $('.formContainer'),
	  		right = Number($formContainer.position().left) === 1259 ? 0 : -380;	  		

		 $formContainer.animate({
		 	right: right
		 });
	  });
 });