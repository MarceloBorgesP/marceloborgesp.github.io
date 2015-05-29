var main = function () {
  	$("header").load("header/header.html");
  	$("footer").load("footer/footer.html");

  	$('.bxslider').bxSlider({
  	  pause: 10000,
	  auto: true,
	  autoControls: true
	});
	};

$(document).ready(main);
