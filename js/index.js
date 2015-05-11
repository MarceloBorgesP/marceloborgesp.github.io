var main = function () {
  	$(".header").load("header.html");

    $(".my-projects-div").hover(
    function() {
      $(this).addClass("animated pulse");
    }, function() {
      $(this).removeClass("animated pulse");
    });
};

var notworking_error = function () {
	alert("At the moment this function is still not working, sorry about that!");
}


$(document).ready(main);