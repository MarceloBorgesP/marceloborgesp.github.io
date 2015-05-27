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
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
}
$(document).ready(main);

