function initMap(){
	
	//Information om punkterna
	var sodervarn = {
		info: '<strong>Södervärn</strong><br>\
                <p>Korsningen:<br>\ Carl Gustavs väg/S. Förstadsgatan</p>\<a href="https://maps.apple.com/?daddr=55.589285,13.005419">Hitta hit</a>',
		lat: 55.589285,
		long: 13.005419
	};
	
	var erikslust = {
		info: '<strong>Erikslust</strong><br>\
              <p>Rundellen:\ Erikslustv./Köpenhamnsv.</p>\<a href="https://maps.apple.com/?daddr=55.59419,12.96658">Hitta hit</a>',
		lat: 55.59419,
		long: 12.96658
	};
	
	var lugnet = {
		info: '<strong>Lugnet</strong><br>\
                <p>Kaptensgatan vid Scandic</p>\<a href="https://maps.apple.com/?daddr=55.60072947,13.00439268">Hitta hit</a>',
		lat: 55.60072947,
		long: 13.00439268
	};
	
	var kungsparkern = {
		info: '<strong>Kungsparken</strong><br>\
              <p>Malmöhusv.</p>\<a href="https://maps.apple.com/?daddr=55.60570702,12.99209878">Hitta hit</a>',
		lat: 55.60570702,
		long: 12.99209878
	};
	
	var ribersborg = {
		info: '<strong>Ribersborg</strong><br>\
              <p>Ribersborgsstigen</p>\<a href="https://maps.apple.com/?daddr=55.60249025,12.96803266">Hitta hit</a>',
		lat: 55.60249025,
		long: 12.96803266
	};
	
	var vastrahamnen = {
		info: '<strong>Västra hamnen</strong><br>\
              <p>Stora Varvasgatan</p>\<a href="https://maps.apple.com/?daddr=55.61009613,12.97847316">Hitta hit</a>',
		lat: 55.61009613,
		long: 12.97847316
	};
	
	var bagersplats = {
		info: '<strong>Bagers plats</strong><br>\
              <p>Hjälmargatan.</p>\<a href="https://maps.apple.com/?daddr=55.60823267,12.99670413">Hitta hit</a>',
		lat: 55.60823267,
		long: 12.99670413
	};
	
	var centralen1 = {
		info: '<strong>Malmö Centralstation</strong><br>\
              <p>Vid Suellsbron/Anna Linds plats</p>\<a href="https://maps.apple.com/?daddr=55.60874778,13.00216913">Hitta hit</a>',
		lat: 55.60874778,
		long: 13.00216913
	};
	
	var centralen2 = {
		info: '<strong>Malmö Centralstation</strong><br>\
              <p>I cykelgaraget under Centralbron</p>\<a href="https://maps.apple.com/?daddr=55.60899322,13.00410032">Hitta hit</a>',
		lat: 55.60899322,
		long: 13.00410032
	};

	var lillatorg = {
		info: '<strong>Lilla torg</strong><br>\
              <p>Korsningen:\ Engelbrektsg/Larocheg.</p>\<a href="https://maps.apple.com/?daddr=55.6047161,12.99768448">Hitta hit</a>',
		lat: 55.6047161,
		long: 12.99768448
	};
	
	var varnhem = {
		info: '<strong>Värnhemstorget</strong><br>\
              <p>Föreningsgatan utanför Coop</p>\<a href="https://maps.apple.com/?daddr=55.60508884,13.02392721">Hitta hit</a>',
		lat: 55.60508884,
		long: 13.02392721
	};
	
	var lundavagen = {
		info: '<strong>Lundavägen</strong><br>\
              <p>Rundellen:\ Lundavägen/Sjölundaviadukten</p>\<a href="https://maps.apple.com/?daddr=55.61438023,13.04238081">Hitta hit</a>',
		lat: 55.61438023,
		long: 13.04238081
	};
	
	var bulltofta = {
		info: '<strong>Bulltofta</strong><br>\
              <p>Bulltofta motionscenter</p>\<a href="https://maps.apple.com/?daddr=55.59786842,13.06545317">Hitta hit</a>',
		lat: 55.59786842,
		long: 13.06545317
	};
	
	var videdal = {
		info: '<strong>Videdal</strong><br>\
              <p>Videdalsparken</p>\<a href="https://maps.apple.com/?daddr=55.58980241,13.06546658">Hitta hit</a>',
		lat: 55.58980241,
		long: 13.06546658
	};
	
	var rosengard = {
		info: '<strong>Rosengård</strong><br>\
              <p>Vid Örtagårdstorget</p>\<a href="https://maps.apple.com/?daddr=55.58640394,13.0393821">Hitta hit</a>',
		lat: 55.58640394,
		long: 13.0393821
	};
	
	var lonngarden = {
		info: '<strong>Lönngården</strong><br>\
              <p>Korsningen: Lönng/N. Grängesbergsg</p>\<a href="https://maps.apple.com/?daddr=55.58163165,13.0255419">Hitta hit</a>',
		lat: 55.58163165,
		long: 13.0255419
	};
	
	var nydalatorget = {
		info: '<strong>Nydalatorget</strong><br>\
              <a href="https://maps.apple.com/?daddr=55.57354366,13.02043766">Hitta hit</a>',
		lat: 55.57354366,
		long: 13.02043766
	};
	
	var soderkulla = {
		info: '<strong>Söderkulla</strong><br>\
              <p>Nydalastigen</p>\<a href="https://maps.apple.com/?daddr=55.56445213,13.01343374">Hitta hit</a>',
		lat: 55.56445213,
		long: 13.01343374
	};
	
	var kulladal = {
		info: '<strong>Kulladal</strong><br>\
              <p>Lindeborgsstigen</p>\<a href="https://maps.apple.com/?daddr=55.56798476,12.99118616">Hitta hit</a>',
		lat: 55.56798476,
		long: 12.99118616
	};
	
	var hylliestation = {
		info: '<strong>Hyllie Station</strong><br>\
              <p>Arenagatan</p>\<a href="https://maps.apple.com/?daddr=55.562888,12.977190">Hitta hit</a>',
		lat: 55.562888,
		long: 12.977190
	};
	
	var mollevangstorget = {
		info: '<strong>Möllevångstorget</strong><br>\
              <p>Korsningen: Bergsgatan/Möllevångstorget</p>\<a href="https://maps.apple.com/?daddr=55.5918726,13.00680064">Hitta hit</a>',
		lat: 55.5918726,
		long: 13.00680064
	};
	
	var triangeln1 = {
		info: '<strong>Triangeln Station Södra</strong><br>\
              <p>Bo Widerbergs plats</p>\<a href="https://maps.apple.com/?daddr=55.59217904,13.00195724">Hitta hit</a>',
		lat: 55.59217904,
		long: 13.00195724
	};
	
	var triangeln2 = {
		info: '<strong>Triangeln Station Norra</strong><br>\
              <p>Rådmansgatan</p>\<a href="https://maps.apple.com/?daddr=55.59386492,13.00063055">Hitta hit</a>',
		lat: 55.59386492,
		long: 13.00063055
	};
	
	var konsthallen = {
		info: '<strong>Konsthallen</strong><br>\
              <p>Pildammsvägen</p>\<a href="https://maps.apple.com/?daddr=55.59501804,12.99727611">Hitta hit</a>',
		lat: 55.59501804,
		long: 12.99727611
	};
		
	var malmostadion = {
		info: '<strong>Malmö Stadion</strong><br>\
              <p>John Ericssons väg</p>\<a href="https://maps.apple.com/?daddr=55.58757116,12.98863202">Hitta hit</a>',
		lat: 55.58757116,
		long: 12.98863202
	};
	
	var bunkeflo = {
		info: '<strong>Bunkeflostrand</strong><br>\
              <p>Rundellen på Klagshamnsvägen</p>\<a href="https://maps.apple.com/?daddr=55.55467275,12.9181543">Hitta hit</a>',
		lat: 55.55467275,
		long: 12.9181543
	};
	
	var oxie = {
		info: '<strong>Oxie</strong><br>\
              <p>Tegelbruksvägen</p>\<a href="https://maps.apple.com/?daddr=55.54141469,13.09661306">Hitta hit</a>',
		lat: 55.54141469,
		long: 13.09661306
	};
	
	var tygelsjo = {
		info: '<strong>Tygelsjö</strong><br>\
              <p>Korsningen: Tygelsjöv. / Gullkrageg.</p>\<a href="https://maps.apple.com/?daddr=55.51811141,12.99815319">Hitta hit</a>',
		lat: 55.51811141,
		long: 12.99815319
	};
    
    var limhamn = {
        info: '<strong>Limhamn</strong><br>\
              <p>Korsningen: Linnégatan. / Kalkbrottsgatan.</p>\<a href="https://maps.apple.com/?daddr=55.582048,12.929724">Hitta hit</a>',
		lat: 55.582048, 
		long: 12.929724
    };

	//Min Array
	var locations = [
		[sodervarn.info, sodervarn.lat, sodervarn.long, 0],
		[erikslust.info, erikslust.lat, erikslust.long, 1],
		[lugnet.info, lugnet.lat, lugnet.long, 2],
		[kungsparkern.info, kungsparkern.lat, kungsparkern.long, 3],
		[ribersborg.info, ribersborg.lat, ribersborg.long, 4],
		[vastrahamnen.info, vastrahamnen.lat, vastrahamnen.long, 5],
		[bagersplats.info, bagersplats.lat, bagersplats.long, 6],
		[centralen1.info, centralen1.lat, centralen1.long, 7],
		[centralen2.info, centralen2.lat, centralen2.long, 8],
		[lillatorg.info, lillatorg.lat, lillatorg.long, 9],
		[varnhem.info, varnhem.lat, varnhem.long, 10],
		[lundavagen.info, lundavagen.lat, lundavagen.long, 11],
		[bulltofta.info, bulltofta.lat, bulltofta.long, 12],
		[videdal.info, videdal.lat, videdal.long, 13],
		[rosengard.info, rosengard.lat, rosengard.long, 14],
		[lonngarden.info, lonngarden.lat, lonngarden.long, 15],		
		[nydalatorget.info, nydalatorget.lat, nydalatorget.long, 16],
		[soderkulla.info, soderkulla.lat, soderkulla.long, 17],	
		[kulladal.info, kulladal.lat, kulladal.long, 18],
		[hylliestation.info, hylliestation.lat, hylliestation.long, 19],
		[mollevangstorget.info, mollevangstorget.lat, mollevangstorget.long, 20],
		[triangeln1.info, triangeln1.lat, triangeln1.long, 21],
		[triangeln2.info, triangeln2.lat, triangeln2.long, 22],	
		[konsthallen.info, konsthallen.lat, konsthallen.long, 23],	
		[malmostadion.info, malmostadion.lat, malmostadion.long, 24],
		[bunkeflo.info, bunkeflo.lat, bunkeflo.long, 25],
		[oxie.info, oxie.lat, oxie.long, 26],
		[tygelsjo.info, tygelsjo.lat, tygelsjo.long, 27],
        [limhamn.info, limhamn.lat, limhamn.long, 28]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 12,
	//center: new google.maps.LatLng(55.576889, 13.003349),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
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
    map.setZoom(13);
    map.setCenter(userLatLng);
    }
    
    function showError(error) {
      map.setCenter(new google.maps.LatLng(55.576889, 13.003349));
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