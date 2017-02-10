function initMap(){
	
	//Information om punkterna
	var backby = {
		info: '<strong>Bäckby</strong><br>\
                <p>Lisjögatan</p>\<a href="https://maps.apple.com/?daddr=59.594051,16.490455">Hitta hit</a>',
		lat: 59.594051, 
		long: 16.490455
	};
	
	var vasterasCentralstationen = {
		info: '<strong>Centralstationen</strong><br>\
              <p>Södra Ringvägen</p>\<a href="https://maps.apple.com/?daddr=59.607500,16.550978">Hitta hit</a>',
		lat: 59.607500, 
		long: 16.550978
	};
	
	var framnasbadet = {
		info: '<strong>Framnäsbadet</strong><br>\
                <p>Exakt position ej angivit av kommunen.</p>\<a href="https://maps.apple.com/?daddr=59.594948,16.590051">Hitta hit</a>',
		lat: 59.594948, 
		long: 16.590051
	};
	
	var hallashopping = {
		info: '<strong>Hälla shopping</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=59.610149,16.621457">Hitta hit</a>',
		lat: 59.610149,
		long: 16.621457
	};
	
	var logarangsbadet = {
		info: '<strong>Lögarängsbadet</strong><br>\
              <p>Vid entré</p>\<a href="https://maps.apple.com/?daddr=59.599065,16.533916">Hitta hit</a>',
		lat: 59.599065, 
		long: 16.533916
	};
	
	var malardalenshogskola = {
		info: '<strong>Mälardalens högskola</strong><br>\
              <p>Vasagatan</p>\<a href="https://maps.apple.com/?daddr=59.618098,16.539753">Hitta hit</a>',
		lat: 59.618098,
		long: 16.539753
	};
	
	var pilgatan = {
		info: '<strong>Pilgatan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=59.612857,16.562405">Hitta hit</a>',
		lat: 59.612857,
		long: 16.562405
	};
	
	var rocklunda = {
		info: '<strong>Rocklunda</strong><br>\
              <p>Vid ABB Arena Nord</p>\<a href="https://maps.apple.com/?daddr=59.626176,16.529833">Hitta hit</a>',
		lat: 59.626176, 
		long: 16.529833
	};
    
    var ronnby = {
		info: '<strong>Rönnby</strong><br>\
              <p>Exakt position har ej angivits av kommunen.</p>\<a href="https://maps.apple.com/?daddr=59.653978,16.501538">Hitta hit</a>',
		lat: 59.653978,  
		long: 16.507973
	};
    
    var storaTorget  = {
		info: '<strong>Stora Torget</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=59.610674,16.542608">Hitta hit</a>',
		lat: 59.610674,  
		long: 16.542608
	};
    
    var vaxhuset = {
		info: '<strong>Växhuset</strong><br>\
              <p>Viktor Larssons plats</p>\<a href="https://maps.apple.com/?daddr=59.612292,16.548652">Hitta hit</a>',
		lat: 59.612292, 
		long: 16.548652
	};
    
    var skultuna = {
		info: '<strong>Skultuna</strong><br>\
              <p>Biblioteket</p>\<a href="https://maps.apple.com/?daddr=59.718845,16.431008">Hitta hit</a>',
		lat: 59.718845,  
		long: 16.431008
	};

	//Array
	var locations = [
		[backby.info, backby.lat, backby.long, 0],
		[vasterasCentralstationen.info, vasterasCentralstationen.lat, vasterasCentralstationen.long, 1],
		[framnasbadet.info, framnasbadet.lat, framnasbadet.long, 2],
		[hallashopping.info, hallashopping.lat, hallashopping.long, 3],
		[logarangsbadet.info, logarangsbadet.lat, logarangsbadet.long, 4],
		[malardalenshogskola.info, malardalenshogskola.lat, malardalenshogskola.long, 5],
		[pilgatan.info, pilgatan.lat, pilgatan.long, 6],
		[rocklunda.info, rocklunda.lat, rocklunda.long, 7],
		[ronnby.info, ronnby.lat, ronnby.long, 8],
        [storaTorget.info, storaTorget.lat, storaTorget.long, 9],
        [vaxhuset.info, vaxhuset.lat, vaxhuset.long, 10],
        [skultuna.info, skultuna.lat, skultuna.long, 11],
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	//center: new google.maps.LatLng(59.611056, 16.542953),
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
      map.setCenter(new google.maps.LatLng(59.611056, 16.542953));
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