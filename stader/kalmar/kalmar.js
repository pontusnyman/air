function initMap(){
	
	//Information om punkterna
	var falkenbergsskolansSporthall = {
		info: '<strong>Falkenbergsskolans sporthall</strong><br>\
                <p>Falkenbergsvägen 12</p>\<a href="https://maps.apple.com/?daddr=56.662206,16.327107">Hitta hit</a>',
		lat: 56.662206,     
		long: 16.327107
	};
	
	var friskisSvettis = {
		info: '<strong>Friskis & Svettis</strong><br>\
              <p>Borgmästaregatan 11 vid cykelparkeringen ut mot Norra vägen</p>\<a href="https://maps.apple.com/?daddr=56.672664,16.350640">Hitta hit</a>',
		lat: 56.672664,    
		long: 16.350640
	};
	
	var järnvägsstationen1 = {
		info: '<strong>Järnvägsstationen 1</strong><br>\
                <p>Vid Pressbyrån.</p>\<a href="https://maps.apple.com/?daddr=56.661537,16.360718">Hitta hit</a>',
		lat: 56.661537,   
		long: 16.360718
	};
    
    var järnvägsstationen2 = {
		info: '<strong>Järnvägsstationen 2</strong><br>\
                <p>Inne i cykelparkeringen nära Tullbron.</p>\<a href="https://maps.apple.com/?daddr=56.661813,16.359136">Hitta hit</a>',
		lat: 56.661813,  
		long: 16.359136
	};
    
    var kalmarNyckeln = {
		info: '<strong>Kalmar Nyckel</strong><br>\
                <p>Vid stora cykelparkeringen.</p>\<a href="https://maps.apple.com/?daddr=56.677892,16.357051">Hitta hit</a>',
		lat: 56.677892,  
		long: 16.357051
	};
    
    var landstingshuset = {
		info: '<strong>Landstingshuset</strong><br>\
                <p>Strömgatan 13.</p>\<a href="https://maps.apple.com/?daddr=56.665515,16.362860">Hitta hit</a>',
		lat: 56.665515,  
		long: 16.362860
	};
    
    var aventyrsbadet = {
		info: '<strong>Äventyrsbadet</strong><br>\
                <p>Mitt emot entren, Smålandsgatan 23</p>\<a href="https://maps.apple.com/?daddr=56.668275,16.349685">Hitta hit</a>',
		lat: 56.668275,  
		long: 16.349685
	};
    
    var lassarettet = {
		info: '<strong>Länssjukhuset</strong><br>\
                <p>Till höger om akutmottagningen.</p>\<a href="https://maps.apple.com/?daddr=56.657546,16.333101">Hitta hit</a>',
		lat: 56.657546,  
		long: 16.333101
	};
    
    var synagogan = {
		info: '<strong>Synagogan</strong><br>\
                <p>På stortorget 38</p>\<a href="https://maps.apple.com/?daddr=56.663932,16.366069">Hitta hit</a>',
		lat: 56.663932,  
		long: 16.366069
	};
	    
    var varvsholmen = {
		info: '<strong>Varvasholmen utanför Sykes</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=56.670104,16.377383">Hitta hit</a>',
		lat: 56.670104,  
		long: 16.377383
	};
	

	// Array
	var locations = [
		[falkenbergsskolansSporthall.info, falkenbergsskolansSporthall.lat, falkenbergsskolansSporthall.long, 0],
		[friskisSvettis.info, friskisSvettis.lat, friskisSvettis.long, 1],
		[järnvägsstationen1.info, järnvägsstationen1.lat, järnvägsstationen1.long, 2],	
        [järnvägsstationen2.info, järnvägsstationen2.lat, järnvägsstationen2.long, 3],
        [kalmarNyckeln.info, kalmarNyckeln.lat, kalmarNyckeln.long, 4],
        [landstingshuset.info, landstingshuset.lat, landstingshuset.long, 5],
        [aventyrsbadet.info, aventyrsbadet.lat, aventyrsbadet.long, 6],
        [lassarettet.info, lassarettet.lat, lassarettet.long, 7],
        [synagogan.info, synagogan.lat, synagogan.long, 8],
        [varvsholmen.info, varvsholmen.lat, varvsholmen.long, 9]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	//center: new google.maps.LatLng(56.668452, 16.350881),
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
      map.setCenter(new google.maps.LatLng(56.668452, 16.350881));
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