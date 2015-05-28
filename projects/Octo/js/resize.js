//checks the width to change the header style
var resize = function () {

  var windowsize = $(window).width();
  var header = false;

  $('figure').css( "width" , (90+windowsize)/5 );
  $('figure').css( "height" , (90+windowsize)/6.25 );
  $('.span-hover').css( "width" , (90+windowsize)/5 );
  $('.span-hover').css( "height" , (90+windowsize)/6.25 );
  $('.span-hover').css( "top" , -((90+windowsize)/6.25) );
  $('img').css( "width" , (90+windowsize)/5 );
  $('img').css( "height" , (90+windowsize)/6.25 );

  if(windowsize < 1050) {

        $('#menu-hamburger').css( "display" , "inherit" );
         $('#menu').css( "display" , "none" );
         $('header').css( "height" , "0" );
        // $('.li-header').remove();
        // $('#menu').detach();

        $( 'button' ).click(function(){
          if(header == false) {
            $('#menu').css( "display" , "inherit" );
            $('.li-header').css( "display" , "inherit" );
            $('header').css( "height" , "200" );
            header = true;
          }

          else if(header == true) {
            $('#menu').css( "display" , "none" );
            $('header').css( "height" , "0" );
            header = false;
          }     
    	     });

        $( '.close-menu' ).click(function(){
            $('#menu').css( "display" , "none" );
            $('.li-header').css( "display" , "none" );
            $('header').css( "height" , "0" );
            header = false;
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