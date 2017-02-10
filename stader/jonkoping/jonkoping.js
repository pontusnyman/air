function initMap(){
	
	//Information om punkterna
	var hotellplan = {
		info: '<strong>Hotellplan</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=57.783711,14.169379">Hitta hit</a>',
		lat: 57.783711,   
		long: 14.169379
	};
	
	var strandgatan = {
		info: '<strong>Södra Strandgatan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.781673,14.170421">Hitta hit</a>',
		lat: 57.781673,   
		long: 14.170421
	};
	
	var jonköpingscentralstation = {
		info: '<strong>Jönköpings Centralstation</strong><br>\
                <p>Vid cykelställen på Järnvägsgatan</p>\<a href="https://maps.apple.com/?daddr=57.784032,14.164132">Hitta hit</a>',
		lat: 57.784032,   
		long: 14.164132
	};
	

	//Jönköpings Array
	var locations = [
		[hotellplan.info, hotellplan.lat, hotellplan.long, 0],
		[strandgatan.info, strandgatan.lat, strandgatan.long, 1],
		[jonköpingscentralstation.info, jonköpingscentralstation.lat, jonköpingscentralstation.long, 2],		
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
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
      map.setCenter(new google.maps.LatLng(57.783958, 14.167440));
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