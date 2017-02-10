function initMap(){
	
	//Information om punkterna
	var jarnvagsstationen = {
		info: '<strong>Järnvägsstationen</strong><br>\
                <p>Vid cykelgaraget</p>\<a href="https://maps.apple.com/?daddr=56.245319,12.854436">Hitta hit</a>',
		lat: 56.245319,   
		long: 12.854436
	};
    
	var stortorget = {
		info: '<strong>Stortorget</strong><br>\
                <p>Vid de offentliga toaletterna</p>\<a href="https://maps.apple.com/?daddr=56.242919,12.861772">Hitta hit</a>',
		lat: 56.242919,   
		long: 12.861772
	};
    
	var klitterhus = {
		info: '<strong>Klitterhus</strong><br>\
                <p>Vid de offentliga toaletterna</p>\<a href="https://maps.apple.com/?daddr=56.264376,12.836727">Hitta hit</a>',
		lat: 56.264376,   
		long: 12.836727
	};
    
	var vejbystrandshamn = {
		info: '<strong>Vejbystrands hamn</strong><br>\
                <p>Vid Toalett/teknikbyggnad</p>\<a href="https://maps.apple.com/?daddr=56.316224,12.763088">Hitta hit</a>',
		lat: 56.316224,   
		long: 12.763088
	};
	
	//Array
	var locations = [
		[jarnvagsstationen.info, jarnvagsstationen.lat, jarnvagsstationen.long, 0],		
        [stortorget.info, stortorget.lat, stortorget.long, 1],	
        [klitterhus.info, klitterhus.lat, klitterhus.long, 2],	
        [vejbystrandshamn.info, vejbystrandshamn.lat, vejbystrandshamn.long, 3]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 12,
	//center: new google.maps.LatLng(56.259950, 12.856489),
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
			map: map,
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
      map.setCenter(new google.maps.LatLng(56.259950, 12.856489));
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