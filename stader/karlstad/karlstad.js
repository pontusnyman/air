function initMap(){
	
	//Information om punkterna
	var kungsgatan = {
		info: '<strong>Kungsgatan</strong><br>\
                <p>Korsningen Kungsgatan-Västra Torggatan.</p>\<a href="https://maps.apple.com/?daddr=59.381121,13.501728">Hitta hit</a>',
		lat: 59.381121,    
		long: 13.501728
	};
	
	var stadshuset = {
		info: '<strong>Stadshuset</strong><br>\
              <p>Korsningen Drottninggatan-Fredsgatan</p>\<a href="https://maps.apple.com/?daddr=59.379330,13.496812">Hitta hit</a>',
		lat: 59.379330,   
		long: 13.496812
	};
	
	var universistetstorget = {
		info: '<strong>Universitetstorget</strong><br>\
                <p>Sommargatan</p>\<a href="https://maps.apple.com/?daddr=56.669166,12.863339">Hitta hit</a>',
		lat: 56.669166,   
		long: 12.863339
	};
    
    var lofbergskorset = {
		info: '<strong>Löfbergskorset</strong><br>\
                <p>Tullhusgatan</p>\<a href="https://maps.apple.com/?daddr=59.377133,13.505417">Hitta hit</a>',
		lat: 59.377133,   
		long: 13.505417
	};
    
    var rudstorget = {
		info: '<strong>Rudstorget</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.405653,13.519233">Hitta hit</a>',
		lat: 59.405653,   
		long: 13.519233
	};
	
	// Array
	var locations = [
		[kungsgatan.info, kungsgatan.lat, kungsgatan.long, 0],
		[stadshuset.info, stadshuset.lat, stadshuset.long, 1],
		[universistetstorget.info, universistetstorget.lat, universistetstorget.long, 2],	
        [lofbergskorset.info, lofbergskorset.lat, lofbergskorset.long, 3],
        [rudstorget.info, rudstorget.lat, rudstorget.long, 4]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	center: new google.maps.LatLng(59.390067, 13.506249),
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
      map.setCenter(new google.maps.LatLng(59.390067, 13.506249));
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