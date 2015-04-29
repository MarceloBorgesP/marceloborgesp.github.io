var main = function () {
  	$(".header").load("header.html");

    $(".my-projects-div").hover(
    function() {
      $(this).addClass("animated pulse");
    }, function() {
      $(this).removeClass("animated pulse");
    });
     
};


$(document).ready(main);