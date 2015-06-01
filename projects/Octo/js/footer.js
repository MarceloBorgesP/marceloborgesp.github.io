	function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(-22.223038, -45.921424),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var pos = new google.maps.LatLng(-22.223038, -45.921424);
		var marker = new google.maps.Marker({
		      position: pos,
		      map: map,
		      title:"Octo Serviços Inteligentes",
		      animation: google.maps.Animation.DROP
		  });
      }
      google.maps.event.addDomListener(window, 'load', initialize);