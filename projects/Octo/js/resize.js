//checks the width to change the header style
var resize = function () {
  var windowsize = $(window).width();
  var header = false;

  if(windowsize < 1050) {

        $('#menu-hamburger').css( "display" , "inherit" );
        $('#menu').css( "display" , "none" );
        $('header').css( "height" , "0" );

        $( 'button' ).click(function(){
          if(header == false) {
            $('#menu').css( "display" , "inherit" );
            $('header').css( "height" , "200" );
            header = true;
          }

          else if(header == true) {
            $('#menu').css( "display" , "none" );
            $('header').css( "height" , "0" );
            header = false;
          }
          
    	     });
  }

  else if (windowsize >= 1050) {

          $('#hamburger-menu').css( "display" , "none" );
          $('#menu').css( "display" , "inherit" );
          $('header').css( "height" , "130" );
  };
};

$(document).ready(resize);

window.onresize = resize;