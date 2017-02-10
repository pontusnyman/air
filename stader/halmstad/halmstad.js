function initMap(){
	
	//Information om punkterna
	var actic = {
		info: '<strong>Actic</strong><br>\
                <p>Vid badhusplatsen</p>\<a href="https://maps.apple.com/?daddr=56.679804,12.855899">Hitta hit</a>',
		lat: 56.679804,    
		long: 12.855899
	};
	
	var halmstadC = {
		info: '<strong>Halmstad Centralstation</strong><br>\
              <p>Vid den nordvästra delen av stationsområdet.(nära gångbron)</p>\<a href="https://maps.apple.com/?daddr=56.669741,12.864379">Hitta hit</a>',
		lat: 56.669741,   
		long: 12.864379
	};
	
	var stationsParken = {
		info: '<strong>Stations Parken</strong><br>\
                <p>Vid cykelparkeringen tvärs emot stationen.</p>\<a href="https://maps.apple.com/?daddr=56.669166,12.863339">Hitta hit</a>',
		lat: 56.669166,   
		long: 12.863339
	};
    
    var storaTorg = {
		info: '<strong>Stora torg</strong><br>\
                <p>Korsningen Storgatan-Bangatan.</p>\<a href="https://maps.apple.com/?daddr=56.674330,12.858127">Hitta hit</a>',
		lat: 56.674330,   
		long: 12.858127
	};
	

	// Array
	var locations = [
		[actic.info, actic.lat, actic.long, 0],
		[halmstadC.info, halmstadC.lat, halmstadC.long, 1],
		[stationsParken.info, stationsParken.lat, stationsParken.long, 2],	
        [storaTorg.info, storaTorg.lat, storaTorg.long, 3]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	//center: new google.maps.LatLng(56.674045, 12.859149),
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
      map.setCenter(new google.maps.LatLng(56.674045, 12.859149));
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