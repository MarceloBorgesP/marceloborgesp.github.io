var main = function () {
  	$(".header").load("header.html");

  	if($('form').length) { 
  		notworking_error();
  	} 

    $(".my-projects-div").hover(
    function() {
      $(this).addClass("animated pulse");
    }, function() {
      $(this).removeClass("animated pulse");
    });
};

var notworking_error = function () {
	var notification = new NotificationFx({
							message : '<p>Github doesnt offer support to PHP, so this function isnt working for now, sorry about that!</p>',
							layout : 'attached',
							effect : 'bouncyflip',
							type : 'notice', // notice, warning or error
						});

						// show the notification
						notification.show();
}

var slide = function () {
  setTimeout(function(){ $('#slide1').addClass('animated fadeInLeftBig'), $("#slide1").css("visibility", "visible"); }, 50);
  setTimeout(function(){ $('#slide2').addClass('animated fadeInLeftBig'), $("#slide2").css("visibility", "visible"); }, 75);
  setTimeout(function(){ $('#slide3').addClass('animated fadeInLeftBig'), $("#slide3").css("visibility", "visible"); }, 150);
  setTimeout(function(){ $('#slide4').addClass('animated fadeInLeftBig'), $("#slide4").css("visibility", "visible"); }, 225);
  setTimeout(function(){ $('#slide5').addClass('animated fadeInLeftBig'), $("#slide5").css("visibility", "visible"); }, 300);
  setTimeout(function(){ $('#slide6').addClass('animated fadeInLeftBig'), $("#slide6").css("visibility", "visible"); }, 375);
  setTimeout(function(){ $('#slide7').addClass('animated fadeInLeftBig'), $("#slide7").css("visibility", "visible"); }, 450);
  setTimeout(function(){ $('#slide8').addClass('animated fadeInLeftBig'), $("#slide8").css("visibility", "visible"); }, 525);
}

$(document).ready(main);

