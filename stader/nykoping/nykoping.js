function initMap(){
	
	//Information om punkterna
	var storatorget = {
		info: '<strong>Stora torget</strong><br>\
                <p>Korsningen Västra storgatan-Slottsgatan</p>\<a href="https://maps.apple.com/?daddr=58.752796,17.007950">Hitta hit</a>',
		lat: 58.752796,    
		long: 17.007950
	};
	
	var brunnsgatan = {
		info: '<strong>Brunnsgatan</strong><br>\
              <p>Intill Centralstationen</p>\<a href="https://maps.apple.com/?daddr=58.757513,17.000035">Hitta hit</a>',
		lat: 58.757513,   
		long: 17.000035
	};
	
	var rosvalla = {
		info: '<strong>Idrottsvägen</strong><br>\
                <p>Intill Rosvalla</p>\<a href="https://maps.apple.com/?daddr=58.748709,17.041580">Hitta hit</a>',
		lat: 58.748709,   
		long: 17.041580
	};
    
    var traffen = {
		info: '<strong>Stockholmsvägen</strong><br>\
                <p>Intill Träffen</p>\<a href="https://maps.apple.com/?daddr=58.762354,17.021436">Hitta hit</a>',
		lat: 58.762354,  
		long: 17.021436
	};
    
    var centralstationen = {
		info: '<strong>Centralstationen</strong><br>\
                <p>Bredvid Pressbyrån</p>\<a href="https://maps.apple.com/?daddr=58.755870,16.995497">Hitta hit</a>',
		lat: 58.755870,  
		long: 16.995497
	};
    
    var arnoleden = {
		info: '<strong>Arnöleden</strong><br>\
                <p>Korsningen Arnöleden/Strandväge</p>\<a href="https://maps.apple.com/?daddr=58.740445,17.006329">Hitta hit</a>',
		lat: 58.740445,  
		long: 17.006329
	};
    
    var myntan = {
		info: '<strong>Myntan</strong><br>\
                <p>Myntans torgyta, intill Strandvägen</p>\<a href="https://maps.apple.com/?daddr=58.740166,17.010485">Hitta hit</a>',
		lat: 58.740166,  
		long: 17.010485
	};
	
	// Array
	var locations = [
		[storatorget.info, storatorget.lat, storatorget.long, 0],
		[brunnsgatan.info, brunnsgatan.lat, brunnsgatan.long, 1],
		[rosvalla.info, rosvalla.lat, rosvalla.long, 2],	
        [traffen.info, traffen.lat, traffen.long, 3],
        [centralstationen.info, centralstationen.lat, centralstationen.long, 4],
        [arnoleden.info, arnoleden.lat, arnoleden.long, 5],
        [myntan.info, myntan.lat, myntan.long, 6]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	//center: new google.maps.LatLng(58.752432, 17.009327),
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
      map.setCenter(new google.maps.LatLng(58.752432, 17.009327));
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