function initMap(){
	
	//Information om punkterna
	var brantingsplatsen = {
		info: '<strong>Hjalmar Brantingsplatsen 1</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=57.720863,11.953047">Hitta hit</a>',
		lat: 57.720863,   
		long: 11.953047
	};
	
	var lindholmsallen = {
		info: '<strong>Lindholmsallén 33</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.70823,11.93861">Hitta hit</a>',
		lat: 57.70823,   
		long: 11.93861
	};
	
	var langedragsvagen = {
		info: '<strong>Långedragsvägen 21</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=57.680028,11.899313">Hitta hit</a>',
		lat: 57.680028,   
		long: 11.899313
	};
	
	var bangatan = {
		info: '<strong>Vaksala torg</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.698985,11.934420">Hitta hit</a>',
		lat: 57.698985,   
		long: 11.934420
	};
	
	var vasagatan = {
		info: '<strong>Vasagatan</strong><br>\
              <p>Korsningen Vasagatan-Karl Gustavsg</p>\<a href="https://maps.apple.com/?daddr=57.698248,11.967059">Hitta hit</a>',
		lat: 57.698248,   
		long: 11.967059
	};
	
	var emigrantvagen = {
		info: '<strong>Emigrantvägen</strong><br>\
              <p>Vid Masthamnsbron</p>\<a href="https://maps.apple.com/?daddr=57.702240,11.952446">Hitta hit</a>',
		lat: 57.702240,   
		long: 11.952446
	};
	
	var gustavadolfstorg = {
		info: '<strong>Gustav Adolfs torg</strong><br>\
              <p>Korsningen Köpmansg-Torgg.</p>\<a href="https://maps.apple.com/?daddr=57.707299,11.965809">Hitta hit</a>',
		lat: 57.707299,   
		long: 11.965809
	};
	
	var hotellplatsen = {
		info: '<strong>Hotellplatsen</strong><br>\
              <p>Vid Kvarnbron</p>\<a href="https://maps.apple.com/?daddr=57.707357,11.971743">Hitta hit</a>',
		lat: 57.707357,   
		long: 11.971743
	};
    
    var kapellplatsen = {
		info: '<strong>S:t Persgatan</strong><br>\
              <p>Korsningen Amund Grefweg.-Aschbergsg.</p>\<a href="https://maps.apple.com/?daddr=57.693640,11.972867">Hitta hit</a>',
		lat: 57.693640,    
		long: 11.972867
	};
    
    var sodravagen = {
		info: '<strong>Södravägen</strong><br>\
              <p>Utanför Universum</p>\<a href="https://maps.apple.com/?daddr=57.69589,11.98809">Hitta hit</a>',
		lat: 57.69589,     
		long: 11.98809
	};
    
    var sanktSigfridsPlan = {
		info: '<strong>Sankt Sigfrids Plan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.697971,11.999593">Hitta hit</a>',
		lat: 57.697971,     
		long: 11.999593
	};

    var danskavagen= {
		info: '<strong>Danska vägen 103</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.715386,12.004408">Hitta hit</a>',
		lat: 57.715386,      
		long: 12.004408
	};

    var artillerigatan = {
		info: '<strong>Artillerigatan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.728718,12.010344">Hitta hit</a>',
		lat: 57.728718,      
		long: 12.010344
	};

    
    var frolundatorg = {
		info: '<strong>Frölunda torg</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.652461,11.911030">Hitta hit</a>',
		lat: 57.652461,     
		long: 11.911030
	};

    var torslanda = {
		info: '<strong>Torslanda</strong><br>\
              <p>Amhults Torg</p>\<a href="https://maps.apple.com/?daddr=57.710297,11.773469">Hitta hit</a>',
		lat: 57.710297,      
		long: 11.773469
	};
    
    var linneplatsen = {
		info: '<strong>Linnéplatsen 11</strong><br>\
              <p>Amhults Torg</p>\<a href="https://maps.apple.com/?daddr=57.689970,11.951945">Hitta hit</a>',
		lat: 57.689970,       
		long: 11.951945
	};

	//Göteborgs Array
	var locations = [
		[brantingsplatsen.info, brantingsplatsen.lat, brantingsplatsen.long, 0],
		[lindholmsallen.info, lindholmsallen.lat, lindholmsallen.long, 1],
		[langedragsvagen.info, langedragsvagen.lat, langedragsvagen.long, 2],
		[bangatan.info, bangatan.lat, bangatan.long, 3],
		[vasagatan.info, vasagatan.lat, vasagatan.long, 4],
		[emigrantvagen.info, emigrantvagen.lat, emigrantvagen.long, 5],
		[gustavadolfstorg.info, gustavadolfstorg.lat, gustavadolfstorg.long, 6],
		[hotellplatsen.info, hotellplatsen.lat, hotellplatsen.long, 7],
		[kapellplatsen.info, kapellplatsen.lat, kapellplatsen.long, 8],
        [sodravagen.info, sodravagen.lat, sodravagen.long, 9],
        [sanktSigfridsPlan.info, sanktSigfridsPlan.lat, sanktSigfridsPlan.long, 10],
        [danskavagen.info, danskavagen.lat, danskavagen.long, 11],
        [artillerigatan.info, artillerigatan.lat, artillerigatan.long, 12],	
        [frolundatorg.info, frolundatorg.lat, frolundatorg.long, 13],
        [torslanda.info, torslanda.lat, torslanda.long, 14],
        [linneplatsen.info, linneplatsen.lat, linneplatsen.long, 15]
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 12,
	//center: new google.maps.LatLng(57.712016, 11.967090),
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
      map.setCenter(new google.maps.LatLng(57.712016, 11.967090));
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