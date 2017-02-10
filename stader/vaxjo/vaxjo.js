function initMap(){
	
	//Information om punkterna
	var vastraEsplanaden = {
		info: '<strong>Västra Esplanaden-Storgatan</strong><br>\
                <p>I allén utanför Mc Donalds</p>\<a href="https://maps.apple.com/?daddr=56.879111,14.801573">Hitta hit</a>',
		lat: 56.879111,    
		long: 14.801573
	};
	
	var vattentorget = {
		info: '<strong>Vattentorget</strong><br>\
              <p>Vid cykelparkeringen vid Vilhelm Mobergs gata</p>\<a href="https://maps.apple.com/?daddr=56.875977,14.810226">Hitta hit</a>',
		lat: 56.875977,   
		long: 14.810226
	};
	
	var vaxjoStation = {
		info: '<strong>Växjö Station</strong><br>\
                <p>Vid cykelgaraget på stationsområdet.</p>\<a href="https://maps.apple.com/?daddr=56.876844,14.807196">Hitta hit</a>',
		lat: 56.876844,   
		long: 14.807196
	};
	

	//Array
	var locations = [
		[vastraEsplanaden.info, vastraEsplanaden.lat, vastraEsplanaden.long, 0],
		[vattentorget.info, vattentorget.lat, vattentorget.long, 1],
		[vaxjoStation.info, vaxjoStation.lat, vaxjoStation.long, 2]		
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	//center: new google.maps.LatLng(56.880528, 14.803041),
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
      map.setCenter(new google.maps.LatLng(56.880528, 14.803041));
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