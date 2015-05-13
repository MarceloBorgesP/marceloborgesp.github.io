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
							message : '<p>This function is still not working, sorry about that!</p>',
							layout : 'attached',
							effect : 'bouncyflip',
							type : 'notice', // notice, warning or error
							onClose : function() {
								bttn.disabled = false;
							}
						});

						// show the notification
						notification.show();
}


$(document).ready(main);