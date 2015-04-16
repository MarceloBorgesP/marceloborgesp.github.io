var main = function () {
	$(".header").load("header.html");
};

//checks the width to change the header style
var resize = function () {
	var header_top = false;
  var windowsize = $(window).width();

  if(windowsize < 600 && header_top == false && $('#header_top').length == 0) {
        header_top = true;

      //load css file to format the header-top
        var cssLink = $("<link rel='stylesheet' type='text/css' href='css/header-top.css' id='header_top'>");
        //$("head").append(cssLink); 
        $(cssLink).insertAfter( ".last-style-sheet" );

        $('.menu-hamburger').css( "display" , "inherit" );

        $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand');
    	     });

        $('.ul-nav').appendTo('.responsive-menu');
  }

  else if ($('#header_top').length > 0 && windowsize >= 600) {
          $('#header_top').remove();
          header_top = false;

          $('.menu-hamburger').css( "display" , "none" );

          $('.ul-nav').appendTo('.header_nav');
  };
};

$(document).ready(main);
$(document).ready(resize);
window.onload = function () {
    $('.menu-hamburger').css( "display" , "inherit" );

        $( '.menu-btn' ).click(function(){
           $('.responsive-menu').toggleClass('expand');
           });

        $('.ul-nav').appendTo('.responsive-menu');
}

window.onresize = resize;