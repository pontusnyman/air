function initMap(){
	
	//Information om punkterna
	var stationsoder = {
		info: '<strong>Vikingstads station söder</strong><br>\
                <p>Lokegatan</p>\<a href="https://maps.apple.com/?daddr=58.383295,15.433566">Hitta hit</a>',
		lat: 58.383295,  
		long: 15.433566
	};
	
	var stationnorr = {
		info: '<strong>Vikingstads station norr</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.384107,15.433879">Hitta hit</a>',
		lat: 58.384107,  
		long: 15.433879
	};
	
	var lambohovscentrum = {
		info: '<strong>Lambohovs centrum</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=58.387971,15.566860">Hitta hit</a>',
		lat: 58.387971,  
		long: 15.566860
	};
	
	var rydscentrum = {
		info: '<strong>Ryds centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.408370,15.564625">Hitta hit</a>',
		lat: 58.408370,  
		long: 15.564625
	};
	
	var skaggetorpscentrum = {
		info: '<strong>Skäggtorps centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.426110,15.583248">Hitta hit</a>',
		lat: 58.426110,  
		long: 15.583248
	};
	
	var agatan = {
		info: '<strong>Ågatan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.411982,15.618926">Hitta hit</a>',
		lat: 58.411982,  
		long: 15.618926
	};
	
	var linkopingstation = {
		info: '<strong>Linköping station</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.415978,15.625416">Hitta hit</a>',
		lat: 58.415978,  
		long: 15.625416
	};
	
	var tanneforscentrum = {
		info: '<strong>Tannefors centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.405979,15.642512">Hitta hit</a>',
		lat: 58.405979,  
		long: 15.642512
	};
    
    var bergasoderleden = {
		info: '<strong>Berge söderleden</strong><br>\
              <p>Vid busshållplatsen</p>\<a href="https://maps.apple.com/?daddr=58.393244,15.645540">Hitta hit</a>',
		lat: 58.393244,   
		long: 15.645540
	};
    
    var johannelundscentrum = {
		info: '<strong>Johannelunds centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.395127,15.663579">Hitta hit</a>',
		lat: 58.395127,    
		long: 15.663579
	};
    
    var ekholmenscentrum = {
		info: '<strong>Ekholmens centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.381092,15.679299">Hitta hit</a>',
		lat: 58.381092,    
		long: 15.679299
	};

    var orkestervagen= {
		info: '<strong>Orkestervägen</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.366897,15.690202">Hitta hit</a>',
		lat: 58.366897,     
		long: 15.690202
	};

    
    var nackrosvagen = {
		info: '<strong>Näckrosvägen</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.335949,15.721289">Hitta hit</a>',
		lat: 58.335949,     
		long: 15.721289
	};

    
    var tallboda = {
		info: '<strong>Tallboda centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.425560,15.678158">Hitta hit</a>',
		lat: 58.425560,    
		long: 15.678158
	};
    
    var ljungsbro = {
		info: '<strong>Ljungsbro busstation</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.509019,15.501551">Hitta hit</a>',
		lat: 58.509019,    
		long: 15.501551
	};
    
    var vretaklosterkyrka = {
		info: '<strong>Vreta kloster kyrkan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.482325,15.521955">Hitta hit</a>',
		lat: 58.482325,    
		long: 15.521955
	};


	//Array
	var locations = [
		[stationsoder.info, stationsoder.lat, stationsoder.long, 0],
		[stationnorr.info, stationnorr.lat, stationnorr.long, 1],
		[lambohovscentrum.info, lambohovscentrum.lat, lambohovscentrum.long, 2],
		[rydscentrum.info, rydscentrum.lat, rydscentrum.long, 3],
		[skaggetorpscentrum.info, skaggetorpscentrum.lat, skaggetorpscentrum.long, 4],
		[agatan.info, agatan.lat, agatan.long, 5],
		[linkopingstation.info, linkopingstation.lat, linkopingstation.long, 6],
		[tanneforscentrum.info, tanneforscentrum.lat, tanneforscentrum.long, 7],
		[bergasoderleden.info, bergasoderleden.lat, bergasoderleden.long, 8],
        [johannelundscentrum.info, johannelundscentrum.lat, johannelundscentrum.long, 9],	
        [ekholmenscentrum.info, ekholmenscentrum.lat, ekholmenscentrum.long, 10],	
        [orkestervagen.info, orkestervagen.lat, orkestervagen.long, 11],
        [nackrosvagen.info, nackrosvagen.lat, nackrosvagen.long, 12],
        [tallboda.info, tallboda.lat, tallboda.long, 13],
        [ljungsbro.info, ljungsbro.lat, ljungsbro.long, 14],
        [vretaklosterkyrka.info, vretaklosterkyrka.lat, vretaklosterkyrka.long, 15]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 11,
	//center: new google.maps.LatLng(58.433815, 15.526315),
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
    map.setZoom(12);
    map.setCenter(userLatLng);
    }
    
    function showError(error) {
      map.setCenter(new google.maps.LatLng(58.433815, 15.526315));
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