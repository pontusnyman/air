function initMap(){

	//Information om punkterna
	var magistratsvagen = {
		info: '<strong>Magistratsvägen</strong><br>\
                <p>Cykelparkeringen vid bussens vändhållplats</p>\<a href="https://maps.apple.com/?daddr=55.720157,13.209625">Hitta hit</a>',
		lat: 55.720157,
		long: 13.209625
	};

	var karhuset = {
		info: '<strong>Kårhuset</strong><br>\
              <p>Korsningen Sölvegatan John Ericsons väg, busshållplats Kårhuset</p>\<a href="https://maps.apple.com/?daddr=55.712385,13.208214">Hitta hit</a>',
		lat: 55.712385,
		long: 13.208214
	};

	var ideon = {
		info: '<strong>Ideon</strong><br>\
                <p>Sölvegatan, busshållplats Ideon</p>\<a href="https://maps.apple.com/?daddr=55.715560,13.214575">Hitta hit</a>',
		lat: 55.715560,
		long: 13.214575
	};

	var centralen1 = {
		info: '<strong>Lunds centralstation</strong><br>\
              <p>Västra stationstorget</p>\<a href="https://maps.apple.com/?daddr=55.705309,13.185480">Hitta hit</a>',
		lat: 55.705309,
		long: 13.185480
	};

	var centralen2 = {
		info: '<strong>Lunds centralstation</strong><br>\
              <p>Bangatan, söder om huvudbyggnaden</p>\<a href="https://maps.apple.com/?daddr=55.704603,13.187687">Hitta hit</a>',
		lat: 55.704603,
		long: 13.187687
	};

	var vavaregatan = {
		info: '<strong>Vävaregatan</strong><br>\
              <p>Kommunhuset Kristallen</p>\<a href="https://maps.apple.com/?daddr=55.708995,13.184617">Hitta hit</a>',
		lat: 55.708995,
		long: 13.184617
	};

	var stortorget = {
		info: '<strong>Stortorget</strong><br>\
              <p>Mitt för Kungsgatan</p>\<a href="https://maps.apple.com/?daddr=55.703082,13.193237">Hitta hit</a>',
		lat: 55.703082,
		long: 13.193237
	};

	var dalbyvagen = {
		info: '<strong>Dalbyvägen</strong><br>\
              <p>Vid busshållplats Jupitergatan</p>\<a href="https://maps.apple.com/?daddr=55.698969,13.213679">Hitta hit</a>',
		lat: 55.698969,
		long: 13.213679
	};

    var malmovagen = {
		info: '<strong>Malmövägen</strong><br>\
              <p>Korsningen Malmövägen/Ringvägen, söder om Mejeriet</p>\<a href="https://maps.apple.com/?daddr=55.69537,13.18858">Hitta hit</a>',
		lat: 55.69537,
		long: 13.18858
	};

	var lasarettgatan = {
	info: '<strong>Lasarettgatan</strong><br>\
						<p></p>\<a href="https://maps.apple.com/?daddr=55.712218,13.197841">Hitta hit</a>',
	lat: 55.712218,
	long: 13.197841
};


	//Lunds Array
	var locations = [
		[magistratsvagen.info, magistratsvagen.lat, magistratsvagen.long, 0],
		[karhuset.info, karhuset.lat, karhuset.long, 1],
		[ideon.info, ideon.lat, ideon.long, 2],
		[centralen1.info, centralen1.lat, centralen1.long, 3],
		[centralen2.info, centralen2.lat, centralen2.long, 4],
		[vavaregatan.info, vavaregatan.lat, vavaregatan.long, 5],
		[stortorget.info, stortorget.lat, stortorget.long, 6],
		[dalbyvagen.info, dalbyvagen.lat, dalbyvagen.long, 7],
		[malmovagen.info, malmovagen.lat, malmovagen.long, 8],
		[lasarettgatan.info, lasarettgatan.lat,lasarettgatan.long, 9]
	]

	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	//center: new google.maps.LatLng(55.705947, 13.198245),
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
            title: 'Your Location',
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            map: map
    });
    map.setZoom(14);
    map.setCenter(userLatLng);
    }

    function showError(error) {
      map.setCenter(new google.maps.LatLng(55.705947, 13.198245));
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
