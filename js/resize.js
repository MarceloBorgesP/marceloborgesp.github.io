//checks the width to change the header style
var resize = function () {
	var header_top = false;
  var windowsize = $(window).width();

  if(windowsize < 600 && header_top == false) {
        header_top = true;

        $('.menu-hamburger').css( "display" , "inherit" );
        $('.ul-nav').appendTo('.responsive-menu');

        $( '.menu-hamburger' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand');
           $('.ul-nav').toggleClass('bubble');
    	     });
  }

  else if (windowsize >= 600) {
          $('#header_top').remove();
          header_top = false;

          $('.menu-hamburger').css( "display" , "none" );
          $('.bubble').toggleClass();
          $('.expand').toggleClass();

          $('.ul-nav').appendTo('.header_nav');
  };
};

$(document).ready(resize);

window.onresize = resize;