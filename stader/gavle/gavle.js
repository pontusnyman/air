function initMap(){
	
	//Information om punkterna
	var skomarkargatan = {
		info: '<strong>Skomarkargatan</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=60.672883,17.136805">Hitta hit</a>',
		lat: 60.672883,    
		long: 17.136805
	};
	
	var sodraKungsgatan = {
		info: '<strong>Södra Kungsgatan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=60.670048,17.148641">Hitta hit</a>',
		lat: 60.670048,   
		long: 17.148641
	};
	
	var parkvagen = {
		info: '<strong>Parkvägen</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=60.664193,17.138449">Hitta hit</a>',
		lat: 60.664193,   
		long: 17.138449
	};
    
    var saltavagen = {
		info: '<strong>Sältavägen</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=60.671022,17.189924">Hitta hit</a>',
		lat: 60.671022,   
		long: 17.189924
	};
    
    var norrakungsgatan = {
		info: '<strong>Norra kungsgatan</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=60.680758,17.137518">Hitta hit</a>',
		lat: 60.680758,   
		long: 17.137518
	};
    
	// Array
	var locations = [
		[skomarkargatan.info, skomarkargatan.lat, skomarkargatan.long, 0],
		[sodraKungsgatan.info, sodraKungsgatan.lat, sodraKungsgatan.long, 1],
		[parkvagen.info, parkvagen.lat, parkvagen.long, 2],	
        [saltavagen.info, saltavagen.lat, saltavagen.long, 3],
        [norrakungsgatan.info, norrakungsgatan.lat, norrakungsgatan.long, 4]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	//center: new google.maps.LatLng(60.676490, 17.160018),
    disableDefaultUI: true,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    
    navigator.geolocation && navigator.geolocation.getCurrentPosition(showPosition, showError) == undefined && showError();
	
	var infowindow = new google.maps.InfoWindow({});
	    
    // Back button - Create the DIV to hold the control and call the CenterControl() constructor
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    // Back button end
    
	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
    
    function showPosition(position) {
        var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var marker = new google.maps.Marker({
            position: userLatLng,
            title: 'Din position',
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            map: map
    });   
    map.setZoom(14);
    map.setCenter(userLatLng);
    }
    
    function showError(error) {
      map.setCenter(new google.maps.LatLng(60.676490, 17.160018));
    }
}

function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Klicka för att gå tillbaka!';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Klicka för att backa';
  controlUI.appendChild(controlText);
    
   // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    window.location.href = '../../index.html';
  });
}