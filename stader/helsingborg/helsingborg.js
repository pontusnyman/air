function initMap(){
	
	//Information om punkterna
	var palsjogatan = {
		info: '<strong>Pålsjögatan</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=56.057143,12.692707">Hitta hit</a>',
		lat: 56.057143,  
		long: 12.692707
	};
	
	var idrottenshus = {
		info: '<strong>Idrottens hus</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.052023,12.704589">Hitta hit</a>',
		lat: 56.052023,  
		long: 12.704589
	};
	
	var centralen1 = {
		info: '<strong>Helsingborgs Centralstation</strong><br>\
                <p>Vid Kungstorget utanför Knutpunkten</p>\<a href="https://maps.apple.com/?daddr=56.045262,12.693493">Hitta hit</a>',
		lat: 56.045262,  
		long: 12.693493
	};
	
	var centralen2 = {
		info: '<strong>Helsingborgs Centralstation</strong><br>\
              <p>Vid Knutpunktens södra entré</p>\<a href="https://maps.apple.com/?daddr=56.042348,12.696360">Hitta hit</a>',
		lat: 56.042348,  
		long: 12.696360
	};
	
	var masterpalm = {
		info: '<strong>Mäster Palms plats</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.040580,12.701795">Hitta hit</a>',
		lat: 56.040580,  
		long: 12.701795
	};
	
	var planteringen = {
		info: '<strong>Planteringen</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.026966,12.708053">Hitta hit</a>',
		lat: 56.026966,  
		long: 12.708053
	};
	
	var ramlosa = {
		info: '<strong>Ramlösa Station</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.023963,12.728638">Hitta hit</a>',
		lat: 56.023963, 
		long: 12.728638 
	};
	
	var raavagen = {
		info: '<strong>Rååvägen</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.000587,12.738506">Hitta hit</a>',
		lat: 56.000587,  
		long: 12.738506
	};

	//Array
	var locations = [
		[palsjogatan.info, palsjogatan.lat, palsjogatan.long, 0],
		[idrottenshus.info, idrottenshus.lat, idrottenshus.long, 1],
		[centralen1.info, centralen1.lat, centralen1.long, 2],
		[centralen2.info, centralen2.lat, centralen2.long, 3],
		[masterpalm.info, masterpalm.lat, masterpalm.long, 4],
		[planteringen.info, planteringen.lat, planteringen.long, 5],
		[ramlosa.info, ramlosa.lat, ramlosa.long, 6],
		[raavagen.info, raavagen.lat, raavagen.long, 7]		
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 12,
	//center: new google.maps.LatLng(56.030576, 12.728826),
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
      map.setCenter(new google.maps.LatLng(56.030576, 12.728826));
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