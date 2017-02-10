function initMap(){
	
	//Information om punkterna
	var karlbergstation = {
		info: '<strong>Karlberg station</strong><br>\
                <p>Norrbackagatan 1-3</p>\<a href="https://maps.apple.com/?daddr=59.339696,18.030228">Hitta hit</a>',
		lat: 59.339696, 
		long: 18.030228
	};
	
	var bagarmossen = {
		info: '<strong>Bagarmossen centrum</strong><br>\
              <p>Vid T-banestationen</p>\<a href="https://maps.apple.com/?daddr=59.276293,18.131550">Hitta hit</a>',
		lat: 59.276293, 
		long: 18.131550
	};
	
	var farstastrand = {
		info: '<strong>Farsta strand station</strong><br>\
                <p>Vid Brattfosgatan</p>\<a href="https://maps.apple.com/?daddr=59.237037,18.101061">Hitta hit</a>',
		lat: 59.237037, 
		long: 18.101061
	};
	
	var kungsholmen = {
		info: '<strong>Kungsholmen</strong><br>\
              <p>Fleminggatan 6</p>\<a href="https://maps.apple.com/?daddr=59.332625,18.047423">Hitta hit</a>',
		lat: 59.332625, 
		long: 18.047423
	};
	
	var hammarbysjostad = {
		info: '<strong>Hammarby sjöstad</strong><br>\
              <p>Vid Lumabryggan</p>\<a href="https://maps.apple.com/?daddr=59.305575,18.099279">Hitta hit</a>',
		lat: 59.305575, 
		long: 18.099279
	};
	
	var hornstull = {
		info: '<strong>Västra hamnen</strong><br>\
              <p>På nya torget</p>\<a href="https://maps.apple.com/?daddr=59.315997,18.034116">Hitta hit</a>',
		lat: 59.315997, 
		long: 18.034116
	};
	
	var hokarangen = {
		info: '<strong>Hökarängen T-banestation</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=59.25788,18.08210">Hitta hit</a>',
		lat: 59.25788, 
		long: 18.08210
	};
	
	var kista = {
		info: '<strong>Kista T-banestation</strong><br>\
              <p>Vid Vejlegatan</p>\<a href="https://maps.apple.com/?daddr=59.401749,17.943564">Hitta hit</a>',
		lat: 59.401749, 
		long: 17.943564
	};
	
	var munkbroleden = {
		info: '<strong>Munkbroleden, Gamla stan</strong><br>\
              <p>Vid T-banestationen</p>\<a href="https://maps.apple.com/?daddr=59.322953,18.067991">Hitta hit</a>',
		lat: 59.322953, 
		long: 18.067991
	};

	var raoulWallenbergstorg = {
		info: '<strong>Raoul Wallenbergs torg</strong><br>\
              <p>Nybroplan</p>\<a href="https://maps.apple.com/?daddr=59.332688,18.075944">Hitta hit</a>',
		lat: 59.332688, 
		long: 18.075944
	};
	
	var skeppsbron = {
		info: '<strong>Skeppsbron, Slussen</strong><br>\
              <p>Vid tullhus 3</p>\<a href="https://maps.apple.com/?daddr=59.321758,18.074256">Hitta hit</a>',
		lat: 59.321758, 
		long: 18.074256
	};
	
	var spangastation = {
		info: '<strong>Spånga station</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=59.382517,17.898438">Hitta hit</a>',
		lat: 59.382517, 
		long: 17.898438
	};
	
	var stadsgardsleden = {
		info: '<strong>Stadsgårdsleden</strong><br>\
              <p>Vid Fotografiska museet/stora tullhuset</p>\<a href="https://maps.apple.com/?daddr=59.318032,18.084035">Hitta hit</a>',
		lat: 59.318032, 
		long: 18.084035
	};
	
	var ostermalm = {
		info: '<strong>Östermalm</strong><br>\
              <p>Strandvägen 15 vid kajen</p>\<a href="https://maps.apple.com/?daddr=59.331760,18.082805">Hitta hit</a>',
		lat: 59.331760, 
		long: 18.082805
	};
	
	var stureplan = {
		info: '<strong>Stureplan</strong><br>\
              <p>Stureplan</p>\<a href="https://maps.apple.com/?daddr=59.336072,18.072750">Hitta hit</a>',
		lat: 59.336072, 
		long: 18.072750
	};
	
	var vastertorp = {
		info: '<strong>Västertorp T-banestation</strong><br>\
              <p>Vid södra utgången mot E4:an</p>\<a href="https://maps.apple.com/?daddr=59.290367,17.965504">Hitta hit</a>',
		lat: 59.290367, 
		long: 17.965504
	};
	
	var akeshovTbanestation = {
		info: '<strong>Åkeshov T-banestation</strong><br>\
              <p>vid T-banestationen</p>\<a href="https://maps.apple.com/?daddr=59.342295,17.925060">Hitta hit</a>',
		lat: 59.342295, 
		long: 17.925060
	};
	
	var arstabergstation = {
		info: '<strong>Årstaberg station</strong><br>\
              <a href="https://maps.apple.com/?daddr=59.299908,18.030327">Hitta hit</a>',
		lat: 59.299908, 
		long: 18.030327
	};
	
	var alvsjostation = {
		info: '<strong>Älvsjö station</strong><br>\
              <a href="https://maps.apple.com/?daddr=59.278674,18.008428">Hitta hit</a>',
		lat: 59.278674, 
		long: 18.008428
	};
    
    var bonnemecanique = {
        info: '<strong>Bonne Mécanique</strong><br>\
              <p>Öppetider:</p>\
              <p>Vardagar 08.00 - 18.00</p>\
              <p>Lördagar 12.00 - 16.00</p>\
            <a href="https://maps.apple.com/?daddr=59.311573,18.073366" target="_blank">Hitta hit</a>',
		lat: 59.311573, 
		long: 18.073366   
    };
    
    var urbanbike = {
        info: '<strong>Urban Bike Wear & The Mechanics</strong><br>\
              <p>Öppetider:</p>\
              <p>Vardagar 11.00 - 18.30</p>\
              <p>Lördagar 11.00 - 16.00</p>\
            <a href="https://maps.apple.com/?daddr=59.315120,18.076009" target="_blank">Hitta hit</a>',
		lat: 59.315120, 
		long: 18.076009   
    };
	
	//Array
	var locations = [
		[karlbergstation.info, karlbergstation.lat, karlbergstation.long, 0],
		[bagarmossen.info, bagarmossen.lat, bagarmossen.long, 1],
		[farstastrand.info, farstastrand.lat, farstastrand.long, 2],
		[kungsholmen.info, kungsholmen.lat, kungsholmen.long, 3],
		[hammarbysjostad.info, hammarbysjostad.lat, hammarbysjostad.long, 4],
		[hornstull.info, hornstull.lat, hornstull.long, 5],
		[hokarangen.info, hokarangen.lat, hokarangen.long, 6],
		[kista.info, kista.lat, kista.long, 7],
		[munkbroleden.info, munkbroleden.lat, munkbroleden.long, 8],
		[raoulWallenbergstorg.info, raoulWallenbergstorg.lat, raoulWallenbergstorg.long, 9],
		[skeppsbron.info, skeppsbron.lat, skeppsbron.long, 10],
		[spangastation.info, spangastation.lat, spangastation.long, 11],
		[stadsgardsleden.info, stadsgardsleden.lat, stadsgardsleden.long, 12],
		[ostermalm.info, ostermalm.lat, ostermalm.long, 13],
		[stureplan.info, stureplan.lat, stureplan.long, 14],
		[vastertorp.info, vastertorp.lat, vastertorp.long, 15],		
		[akeshovTbanestation.info, akeshovTbanestation.lat, akeshovTbanestation.long, 16],
		[arstabergstation.info, arstabergstation.lat, arstabergstation.long, 17],	
		[alvsjostation.info, alvsjostation.lat, alvsjostation.long, 18]		
	]
    
    var cykelaffar = [
        [bonnemecanique.info, bonnemecanique.lat, bonnemecanique.long, 0],
        [urbanbike.info, urbanbike.lat, urbanbike.long, 1]
    ]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 11,
	//center: new google.maps.LatLng(59.311137, 18.029886),
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

    //Kommunens pumpar
	var marker, i;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            map: map
		});

		google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i)); 
	}
    //cykelbutikers pumpar
    var markers, j;
	for (j = 0; j < cykelaffar.length; j++) {
		markers = new google.maps.Marker({
			position: new google.maps.LatLng(cykelaffar[j][1], cykelaffar[j][2]),
			map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
		});

		google.maps.event.addListener(markers, 'mouseover', (function (markers, j) {
			return function () {
				infowindow.setContent(cykelaffar[j][0]);
				infowindow.open(map, markers);
			}
		})(markers, j)); 
	}
    //Användares position
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
      map.setCenter(new google.maps.LatLng(59.311137, 18.029886));
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