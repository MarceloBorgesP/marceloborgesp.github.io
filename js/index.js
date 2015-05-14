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


$(document).ready(main);