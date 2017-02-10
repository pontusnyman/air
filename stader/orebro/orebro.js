function initMap(){
	
	//Information om punkterna
	var jarntorget = {
		info: '<strong>Järntorget</strong><br>\
                <p>Nära Pressbyrån.</p>\<a href="https://maps.apple.com/?daddr=59.274935,15.213909">Hitta hit</a>',
		lat: 59.274935,    
		long: 15.213909
	};
	
	var stortorget = {
		info: '<strong>Stortoget</strong><br>\
              <p>På hörnet vid Lindhska bokhandeln.</p>\<a href="https://maps.apple.com/?daddr=59.271989,15.211947">Hitta hit</a>',
		lat: 59.271989,   
		long: 15.211947
	};
	
	var vasatorget = {
		info: '<strong>Vasatorget</strong><br>\
                <p>Vid cykelbarometern.</p>\<a href="https://maps.apple.com/?daddr=59.274301,15.206394">Hitta hit</a>',
		lat: 59.274301,   
		long: 15.206394
	};
    
    var drottninggatan = {
		info: '<strong>Drottninggatan</strong><br>\
                <p>Södra Kyrkogården (vid cykelbarometern).</p>\<a href="https://maps.apple.com/?daddr=59.266428,15.204664">Hitta hit</a>',
		lat: 59.266428,   
		long: 15.204664
	};
    
    var stadsbyggnadshusen = {
		info: '<strong>Stadsbyggnadshusen</strong><br>\
                <p>Korsningen Idrottsvägen/Åbylundsgatan.</p>\<a href="https://maps.apple.com/?daddr=59.267148,15.193913">Hitta hit</a>',
		lat: 59.267148,   
		long: 15.193913
	};
    
    var hagaCentrum = {
		info: '<strong>Haga centrum</strong><br>\
                <p>Nära entrén.</p>\<a href="https://maps.apple.com/?daddr=59.275407,15.164408">Hitta hit</a>',
		lat: 59.275407,   
		long: 15.164408
	};
    
    var tybbleCentrum = {
		info: '<strong>Tybble centrum</strong><br>\
                <p>Nära Rudbecksgatan.</p>\<a href="https://maps.apple.com/?daddr=59.259283,15.240685">Hitta hit</a>',
		lat: 59.259283,   
		long: 15.240685
	};
	

	// Array
	var locations = [
		[jarntorget.info, jarntorget.lat, jarntorget.long, 0],
		[stortorget.info, stortorget.lat, stortorget.long, 1],
		[vasatorget.info, vasatorget.lat, vasatorget.long, 2],	
        [drottninggatan.info, drottninggatan.lat, drottninggatan.long, 3],
        [stadsbyggnadshusen.info, stadsbyggnadshusen.lat, stadsbyggnadshusen.long, 4],
        [hagaCentrum.info, hagaCentrum.lat, hagaCentrum.long, 5],
        [tybbleCentrum.info, tybbleCentrum.lat, tybbleCentrum.long, 6]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	//center: new google.maps.LatLng(59.271516, 15.198411),
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
    map.setZoom(15);
    map.setCenter(userLatLng);
    }
    
    function showError(error) {
      map.setCenter(new google.maps.LatLng(59.271516, 15.198411));
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