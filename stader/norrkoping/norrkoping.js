function initMap(){
	
	//Information om punkterna
	var hotorget = {
		info: '<strong>Hötorget</strong><br>\
                <p>På Olai kyrkogatan</p>\<a href="https://maps.apple.com/?daddr=58.586483,16.191727">Hitta hit</a>',
		lat: 58.586483,    
		long: 16.191727
	};
	
	var resecentrum = {
		info: '<strong>Resecentrum</strong><br>\
              <p>Rundellen Norra promenaden-Drottningg.</p>\<a href="https://maps.apple.com/?daddr=58.595916,16.184668">Hitta hit</a>',
		lat: 58.595916,   
		long: 16.184668
	};
	
	var skvallertorget = {
		info: '<strong>Skvallertorget</strong><br>\
                <p>Bredgatan</p>\<a href="https://maps.apple.com/?daddr=58.590375,16.179105">Hitta hit</a>',
		lat: 58.590375,   
		long: 16.179105
	};
    
    var mirumGalleria = {
		info: '<strong>Mirum Galleria</strong><br>\
                <p>Rundellen Lidaleden-Hagebyg.</p>\<a href="https://maps.apple.com/?daddr=58.572975,16.206179">Hitta hit</a>',
		lat: 58.572975,  
		long: 16.206179
	};
	

	// Array
	var locations = [
		[hotorget.info, hotorget.lat, hotorget.long, 0],
		[resecentrum.info, resecentrum.lat, resecentrum.long, 1],
		[skvallertorget.info, skvallertorget.lat, skvallertorget.long, 2],	
        [mirumGalleria.info, mirumGalleria.lat, mirumGalleria.long, 3]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 14,
	//center: new google.maps.LatLng(58.585732, 16.193408),
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
      map.setCenter(new google.maps.LatLng(58.585732, 16.193408));
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