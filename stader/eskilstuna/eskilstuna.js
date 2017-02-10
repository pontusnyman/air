function initMap(){
	
	//Information om punkterna
	var torshallavagen = {
		info: '<strong>Torshällavägen</strong><br>\
                <p>Vid stora rundellen på torshällavägen</p>\<a href="https://maps.apple.com/?daddr=59.386162,16.504550">Hitta hit</a>',
		lat: 59.386162,    
		long: 16.504550
	};
	
	var faktorigatan = {
		info: '<strong>Faktorigatan 3</strong><br>\
              <p>Utanför Clarion Collection hotell</p>\<a href="https://maps.apple.com/?daddr=59.37625,16.51191">Hitta hit</a>',
		lat: 59.37625,    
		long: 16.51191
	};
	
	var fristadstorget = {
		info: '<strong>Fristadstroget</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.371308,16.514466">Hitta hit</a>',
		lat: 59.371308,    
		long: 16.514466
	};
    
    var gymnastikg = {
		info: '<strong>Gymniastikgatan</strong><br>\
                <p>Intill Rådhusbron</p>\<a href="https://maps.apple.com/?daddr=59.369698,16.513426">Hitta hit</a>',
		lat: 59.369698,     
		long: 16.513426
	};
    
    var smortorget = {
		info: '<strong>Smörtorget</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.369240,16.518193">Hitta hit</a>',
		lat: 59.369240,      
		long: 16.518193
	};
    
    var centralstation = {
		info: '<strong>Eskilstuna Centralstation</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.36905,16.50713">Hitta hit</a>',
		lat: 59.36905,        
		long: 16.50713
	};
    
    var tegelbruksv = {
		info: '<strong>Tegelbruksvägen</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.362156,16.506750">Hitta hit</a>',
		lat: 59.362156,         
		long: 16.506750
	};
    
    
	//Eskilstuna Array
	var locations = [
		[torshallavagen.info, torshallavagen.lat, torshallavagen.long, 0],
		[faktorigatan.info, faktorigatan.lat, faktorigatan.long, 1],
		[gymnastikg.info, gymnastikg.lat, gymnastikg.long, 2],
        [smortorget.info, smortorget.lat, smortorget.long, 3],
        [centralstation.info, centralstation.lat, centralstation.long, 4],
        [tegelbruksv.info, tegelbruksv.lat, tegelbruksv.long, 5],	
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	//center: new google.maps.LatLng(59.374622, 16.511514),
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
      map.setCenter(new google.maps.LatLng(59.374622, 16.511514));
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