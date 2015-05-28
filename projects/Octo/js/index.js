var main = function () {
  	$("header").load("header/header.html");
  	$("footer").load("footer/footer.html");

  	$('.bxslider').bxSlider({
  	  pause: 10000,
	  auto: true,
	  autoControls: true
	});

	function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(-22.223038, -45.921424),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
}
$(document).ready(main);

