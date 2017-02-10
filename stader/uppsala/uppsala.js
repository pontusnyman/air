function initMap(){
	
	//Information om punkterna
	var stadstradgarden1 = {
		info: '<strong>Stadsträdgården</strong><br>\
                <p>vid entrén till Stadsträdgården, intill pumphuset och Svandammen</p>\<a href="https://maps.apple.com/?daddr=59.854762,17.640999">Hitta hit</a>',
		lat: 59.854762,  
		long: 17.640999
	};
	
	var svartbackegatan = {
		info: '<strong>Svartbäckegatan</strong><br>\
              <p>Korsningen Svartbäcksgatan–Skolgatan</p>\<a href="https://maps.apple.com/?daddr=59.862350,17.632149">Hitta hit</a>',
		lat: 59.862350,  
		long: 17.632149
	};
	
	var dragarbrunnsgatan = {
		info: '<strong>Dragarbrunnsgatan</strong><br>\
                <p>Korsningen Dragarbrunnsgatan–Vretgränd</p>\<p>(Olrogs plats)</p>\<a href="https://maps.apple.com/?daddr=59.856365,17.645618">Hitta hit</a>',
		lat: 59.856365,  
		long: 17.645618
	};
	
	var Vaksalatorg = {
		info: '<strong>Vaksala torg</strong><br>\
              <p>Västra stationstorget</p>\<a href="https://maps.apple.com/?daddr=59.861142,17.646946">Hitta hit</a>',
		lat: 59.861142,  
		long: 17.646946
	};
	
	var torsgatan = {
		info: '<strong>Torsgatan</strong><br>\
              <p>Korsningen Torsgatan–Börjegatan</p>\<a href="https://maps.apple.com/?daddr=59.860908,17.626556">Hitta hit</a>',
		lat: 59.860908,  
		long: 17.626556
	};
	
	var gamlaUppsalagatan1 = {
		info: '<strong>Gamla Uppsalagatan</strong><br>\
              <p>Korsningen Gamla Uppsalagatan–Svartbäcksgatan</p>\<a href="https://maps.apple.com/?daddr=59.87009,17.62743">Hitta hit</a>',
		lat: 59.87009,  
		long: 17.62743
	};
	
	var gamlaUppsalagatan2 = {
		info: '<strong>Stortorget</strong><br>\
              <p>Korsningen Gamla Uppsalagatan–Vattholmavägen</p>\<a href="https://maps.apple.com/?daddr=59.873307,17.638207">Hitta hit</a>',
		lat: 59.873307,  
		long: 17.638207
	};
	
	var bergsbrunnagatan = {
		info: '<strong>Dalbyvägen</strong><br>\
              <p>Korsningen Bergsbrunnagatan–Alsikegatan</p>\<a href="https://maps.apple.com/?daddr=59.856510,17.655123">Hitta hit</a>',
		lat: 59.856510,  
		long: 17.655123
	};
    
    var stPersgatan = {
		info: '<strong>S:t Persgatan</strong><br>\
              <p>Korsningen Salagatan–S:t Persgatan</p>\<a href="https://maps.apple.com/?daddr=59.862643,17.644262">Hitta hit</a>',
		lat: 59.862643,   
		long: 17.644262
	};
    
    var CarolinaParken = {
		info: '<strong>Carolina Parken</strong><br>\
              <p>Bakom Carolina Rediviva</p>\<a href="https://maps.apple.com/?daddr=59.855306,17.629664">Hitta hit</a>',
		lat: 59.855306,    
		long: 17.629664
	};
    
    var dagHammarskjoldsvag = {
		info: '<strong>Dag Hammarskjölds väg</strong><br>\
              <p>I höjd med infarten till Uppsala Science Park.</p>\<a href="https://maps.apple.com/?daddr=59.842480,17.639060">Hitta hit</a>',
		lat: 59.842480,    
		long: 17.639060
	};

    var resecentrum= {
		info: '<strong>Resecentrum</strong><br>\
              <p>Västra sidan, korsningen Bredgränd/Stadshusgatan</p>\<a href="https://maps.apple.com/?daddr=59.859053,17.644075">Hitta hit</a>',
		lat: 59.859053,     
		long: 17.644075
	};

    
    var kungsgatan = {
		info: '<strong>Kungsgatan</strong><br>\
              <p>Korsningen Kungsgatan-Kungsängsesplanaden</p>\<a href="https://maps.apple.com/?daddr=59.849341,17.660489">Hitta hit</a>',
		lat: 59.849341,     
		long: 17.660489
	};

    
    var stadstradgarden2 = {
		info: '<strong>Stadsträdgården</strong><br>\
              <p>Intill utomhusscenen Parksnäckan</p>\<a href="https://maps.apple.com/?daddr=59.851327,17.644350">Hitta hit</a>',
		lat: 59.851327,    
		long: 17.644350
	};

    var kyrkogardsgatan = {
		info: '<strong>Kyrkogårdsgatan</strong><br>\
              <p>Rundellen Kyrkogårdsgatan–S:t Johannesgatan</p>\<a href="https://maps.apple.com/?daddr=59.857576,17.625237">Hitta hit</a>',
		lat: 59.857576,     
		long: 17.625237
	};

	//Uppsalas Array
	var locations = [
		[stadstradgarden1.info, stadstradgarden1.lat, stadstradgarden1.long, 0],
		[svartbackegatan.info, svartbackegatan.lat, svartbackegatan.long, 1],
		[dragarbrunnsgatan.info, dragarbrunnsgatan.lat, dragarbrunnsgatan.long, 2],
		[Vaksalatorg.info, Vaksalatorg.lat, Vaksalatorg.long, 3],
		[torsgatan.info, torsgatan.lat, torsgatan.long, 4],
		[gamlaUppsalagatan1.info, gamlaUppsalagatan1.lat, gamlaUppsalagatan1.long, 5],
		[gamlaUppsalagatan2.info, gamlaUppsalagatan2.lat, gamlaUppsalagatan2.long, 6],
		[bergsbrunnagatan.info, bergsbrunnagatan.lat, bergsbrunnagatan.long, 7],
		[stPersgatan.info, stPersgatan.lat, stPersgatan.long, 8],
        [CarolinaParken.info, CarolinaParken.lat, CarolinaParken.long, 9],	
        [dagHammarskjoldsvag.info, dagHammarskjoldsvag.lat, dagHammarskjoldsvag.long, 10],	
        [resecentrum.info, resecentrum.lat, resecentrum.long, 11],
        [kungsgatan.info, kungsgatan.lat, kungsgatan.long, 12],
        [stadstradgarden2.info, stadstradgarden2.lat, stadstradgarden2.long, 13],
        [kyrkogardsgatan.info, kyrkogardsgatan.lat, kyrkogardsgatan.long, 14]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	//center: new google.maps.LatLng(59.857330, 17.643252),
    disableDefaultUI: true,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	});

    navigator.geolocation && navigator.geolocation.getCurrentPosition(showPosition, showError) == undefined && showError();
    
	var infowindow = new google.maps.InfoWindow({});
	
    //-------------cykellager
	//var bikelayer = new google.maps.BicyclingLayer();
	//bikelayer.setMap(map);
    
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
      map.setCenter(new google.maps.LatLng(59.857330, 17.643252));
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