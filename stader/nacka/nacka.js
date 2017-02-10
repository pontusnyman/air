function initMap(){
	
	//Information om punkterna
	var stadshuset = {
		info: '<strong>Stadshuset</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.309120,18.160003">Hitta hit</a>',
		lat: 59.309120,   
		long: 18.160003
	};
	
	var korset = {
		info: '<strong>Busshållplats korset</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=59.332223,18.265588">Hitta hit</a>',
		lat: 59.332223, 
		long: 18.265588
	};
	
	var ormingecentrum = {
		info: '<strong>Orminge centrum</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.325469,18.257031">Hitta hit</a>',
		lat: 59.325469,   
		long: 18.257031
	};
	
	var telegramvagen = {
		info: '<strong>Busshållplats Telegramvägen</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.321720,18.254268">Hitta hit</a>',
		lat: 59.321720, 
		long: 18.254268
	};
	
	var augustendalsvagen = {
		info: '<strong>Augustendalsvägen 4</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.313605,18.162517">Hitta hit</a>',
		lat: 59.313605,
		long: 18.162517 
	};
	
	var korsbergsvagen = {
		info: '<strong>Korsbergsvägen 1</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.315820,18.233928">Hitta hit</a>',
		lat: 59.315820,
		long: 18.233928
	};
	

	//Nacka kommun Array
	var locations = [
		[stadshuset.info, stadshuset.lat, stadshuset.long, 0],
		[korset.info, korset.lat, korset.long, 1],
		[ormingecentrum.info, ormingecentrum.lat, ormingecentrum.long, 2],
		[telegramvagen.info, telegramvagen.lat, telegramvagen.long, 3],
		[augustendalsvagen.info, augustendalsvagen.lat, augustendalsvagen.long, 3],
		[korsbergsvagen.info, korsbergsvagen.lat, korsbergsvagen.long, 3]			
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	//center: new google.maps.LatLng(57.783958, 14.167440),
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
    map.setZoom(13);
    map.setCenter(userLatLng);
    }
    
    function showError(error) {
      map.setCenter(new google.maps.LatLng(59.309424, 18.206728));
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