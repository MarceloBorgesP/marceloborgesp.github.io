//checks the width to change the header style
var resize = function () {

  var windowsize = $(window).width();
  var header = false;

  var portfolioSize = function (margin, widthsize, heightsize) {
      $('figure').css( "width" , (-margin+windowsize)/widthsize );
      $('figure').css( "height" , (-margin+windowsize)/heightsize );
      $('.span-hover').css( "width" , (-margin+windowsize)/widthsize );
      $('.span-hover').css( "height" , 1+(-margin+windowsize)/heightsize );
      $('.span-hover').css( "top" , -((-margin+windowsize)/heightsize) );
      $('img').css( "width" , (-margin+windowsize)/widthsize );
      $('img').css( "height" , (-margin+windowsize)/heightsize );
  };

  if (windowsize >= 1200) {
    portfolioSize(140, 6 ,7.5);
  }

  else if (windowsize >= 992) {
    portfolioSize(110, 4 ,5);
  }

  else if (windowsize >= 768) {
    portfolioSize(90, 3 ,3.75);
  }

  else {
    portfolioSize(20, 2.4 ,3);
  }


  if(windowsize < 1050) {

        $('#menu-hamburger').css( "display" , "inherit" );
         $('#menu').css( "display" , "none" );
         $('header').css( "height" , "0" );

        $( 'button' ).click(function(){
          if(header == false) {
            $('#menu').css( "display" , "inherit" );
            $('.li-header').css( "display" , "inherit" );
            $('header').css( "height" , "200" );
            $('button').removeClass('fa-bars');
            $('button').addClass('fa-times');

            header = true;
          }

          else if(header == true) {
            $('#menu').css( "display" , "none" );
            $('header').css( "height" , "0" );
            $('button').addClass('fa-bars');
            $('button').removeClass('fa-times');
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